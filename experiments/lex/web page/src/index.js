import React from 'react';
import pushkinClient from 'pushkin-client';
import { initJsPsych } from 'jspsych';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { build_timeline } from './experiment';
import jsYaml from 'js-yaml';
import jsPsychExtensionWebgazer from '@jspsych/extension-webgazer';
const fs = require('fs');

//stylin'
import './assets/experiment.css'

const expConfig = jsYaml.safeLoad(fs.readFileSync('../config.yaml'), 'utf8');

const pushkin = new pushkinClient();


const mapStateToProps = state => {
  return {
    userID: state.userInfo.userID
  };
}

class quizComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.startExperiment();
  }

  async startExperiment() {
    this.setState({ experimentStarted: true });

    await pushkin.loadScripts(['https://cdn.jsdelivr.net/gh/jspsych/jsPsych@jspsych@7.1.2/examples/js/webgazer/webgazer.js',])

    var jsPsych = await initJsPsych({
      override_safe_mode: true,
      display_element: document.getElementById('jsPsychTarget'),  
      on_finish: this.endExperiment.bind(this),
      extensions: [
          {type: jsPsychExtensionWebgazer}
        ]
    });    

    var timeline_basic = build_timeline(jsPsych);
    const timeline = pushkin.setSaveAfterEachStimulus(timeline_basic);
    window.jsPsych = jsPsych.run(timeline);

    
    await pushkin.connect(this.props.api);
    await pushkin.prepExperimentRun(this.props.userID);

    jsPsych.data.addProperties({user_id: this.props.userID});
    document.getElementById('jsPsychTarget').focus();
    this.setState({ loading: false });
  }

  async endExperiment() {
    document.getElementById("jsPsychTarget").innerHTML = "Processing...";
    await pushkin.tabulateAndPostResults(this.props.userID, expConfig.experimentName)
    document.getElementById("jsPsychTarget").innerHTML = "Thank you for participating!";
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        {this.state.loading && <h1>Loading...</h1>}
        <div id="jsPsychTarget" />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(quizComponent));