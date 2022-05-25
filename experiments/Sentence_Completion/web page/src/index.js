import React from 'react';
import pushkinClient from 'pushkin-client';
import { initJsPsych } from 'jspsych';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { build_timeline } from './experiment';
import jsYaml from 'js-yaml';
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

  var jsPsych = await initJsPsych({
    display_element: document.getElementById('jsPsychTarget'),
    on_finish: this.endExperiment.bind(this),
    show_progress_bar: true,
    auto_update_progress_bar: true,
    on_finish: function() {
      //jsPsych.data.displayData('csv');
  }
  });
  
  var timeline_basic = build_timeline(jsPsych);
  const timeline = pushkin.setSaveAfterEachStimulus(timeline_basic);
  window.jsPsych = jsPsych.run(timeline);

  console.log(jsPsych.data.get())

  await pushkin.connect(this.props.api);
  await pushkin.prepExperimentRun(this.props.userID);


  jsPsych.data.addProperties({user_id: this.props.userID}); //See https://www.jspsych.org/core_library/jspsych-data/#jspsychdataaddproperties
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