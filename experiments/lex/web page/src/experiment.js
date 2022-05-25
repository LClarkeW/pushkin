import calibration_booster_timeline from './lib/calibration-booster-timeline';
import initial_calibration_timeline from './lib/initial-calibration-timeline';
import { trials1, trials2, practice_trials } from './lib/trials'
import jsPsychHtmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import jsPsychHtmlButtonResponse from '@jspsych/plugin-html-button-response'
import jsPsychPreload from '@jspsych/plugin-preload';
import jsPsychCallFunction from '@jspsych/plugin-call-function'
import jsPsychWebgazerCalibrateCamera from '@jspsych/plugin-webgazer-validate'
import jsPsychWebgazerValidateCamera from '@jspsych/plugin-webgazer-validate';
import jsPsychWebgazerInitCamera from '@jspsych/plugin-webgazer-init-camera';
import jsPsychEyeTrackImageSort from './lib/eye-track-image-sort-new';
import jsPsychExtensionWebgazer from '@jspsych/extension-webgazer'
import fullscreen from '@jspsych/plugin-fullscreen';
import testsound from './assets/sounds/main/111_sentence1.mp3';

function build_timeline(jsPsych) {
  

var sound_test = testsound

  function importAll(r) {
    return r.keys().map(r);
  }

  const img_import = importAll(require.context('./assets/images/main', false, /\.(png|jpe?g|svg)$/));
  const snd_import = importAll(require.context('./assets/sounds/main', false, /\.(mp3)$/));

  const timeline = []

  /* randomly assign a list */
  var which_list = jsPsych.randomization.sampleWithoutReplacement(["list_1", "list_2"], 1)[0];
  if (which_list == 'list_1') {
    var trials = trials1;
  } else {
    var trials = trials2;
  }

  jsPsych.data.addProperties({
    which_list: which_list
  })

  var random_order_trials = jsPsych.randomization.shuffle(trials)
  var half = Math.ceil(random_order_trials.length / 2);

  var first_half = random_order_trials.splice(0, half);
  var second_half = random_order_trials.splice(-half);


  /* preload */

  var image = img_import;
  var audio = snd_import;

  var preload = {
    type: jsPsychPreload,
    images: image,
    audio: audio,
    message: '<p>Please wait while we load the experiment.</p>' +
      '<p>The experiment will start as soon as the loading is complete.</p>',
  }

  timeline.push(preload);

  /* initial calibration */
  const initialtimeline = initial_calibration_timeline(jsPsych)
  timeline.push(initialtimeline);

  /* audio check */

  var audio = null;

  var audio_loop = {
    type: jsPsychCallFunction,
    func: () => {
      audio = new Audio();
      audio.src = sound_test;
      audio.loop = true
      audio.play();
    }
  }

  var stop_audio = {
    type: jsPsychCallFunction,
    func: () => {
      audio.pause();
    }
  }

  var audiocheck = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: ` <p>To complete this experiment you need to be able to listen to audio.
                <p>Adjust your volume to a comfortable level.</p>
                <p>Once you can clearly hear the audio, press the spacebar to continue.</p>
              `,
    choices: [' '] // <-- change this to whatever instruction your audio prompt says to follow
  }

  timeline.push(audio_loop, audiocheck, stop_audio)

  /* instructions */
  var basic = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>You will be presented with four objects and an audio prompt. </p>' +
      '<p>Listen to the audio prompt and do your best to follow the instructions using your mouse.</p>' +
      '<p>You can pick up and move objects on the screen, or just move your mouse to act out the directions.</p>' +
      '<p>For example, if the audio says to look at an object, you should move your mouse on top of the object as if "looking" with your cursor.</p>',
    choices: ['Continue'],
    margin_vertical: '20px'
  };

  timeline.push(basic);

  var instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<p>Let's start with three practice trials.</p>" +
      "<p>Try to keep your head still throughout the trials and press the <b>spacebar</b> when you are done with a trial.</p>" +
      "<p>Press the spacebar to continue.</p>",
    choices: [" "]
  };


  timeline.push(instructions);

  var sort_practice_trials = {
    type: jsPsychEyeTrackImageSort,
    images: jsPsych.timelineVariable('images'),
    image_width: 200,
    image_height: 200,
    audio: jsPsych.timelineVariable('audio'),
    stimulus: "<p>Press spacebar to continue</p>",
    data: {
      compatibility: jsPsych.timelineVariable('compatibility_type')
    }
  };

  var filler_button_click_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "",
    choices: ['Click Here']
  }

  var test_practice_trials = {
    timeline: [sort_practice_trials, filler_button_click_trial],
    timeline_variables: practice_trials
  };

  timeline.push(test_practice_trials);


  /* main trials */
  var begin = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<p>We will now begin the experiment.</p>' +
      '<p>Remember to <b>stay as still as possible</b> and act out the instructions with your cursor.</p>' +
      '<p>Make sure to press the spacebar once you have completed the prompt.</p>' +
      '<p>After each trial, you will be asked to press a button to proceed to the next trial</p>' +
      '<p>Press the spacebar to begin.',
    choices: [" "]
  }

  timeline.push(begin);


  var sort_trial = {
    type: jsPsychEyeTrackImageSort,
    images: jsPsych.timelineVariable('images'),
    image_width: 200,
    image_height: 200,
    audio: jsPsych.timelineVariable('audio'),
    data: {
      verb: jsPsych.timelineVariable('verb'),
      compatibility: jsPsych.timelineVariable('compatibility'),
      target_animal: jsPsych.timelineVariable('target_animal'),
      target_instrument: jsPsych.timelineVariable('target_object'),
      audio: jsPsych.timelineVariable('audio'),
      images: jsPsych.timelineVariable('images')
    },
    extensions: [
      {
        type: jsPsychExtensionWebgazer,
        params: {
          targets: [
            '#jspsych-free-sort-draggable-0',
            '#jspsych-free-sort-draggable-1',
            '#jspsych-free-sort-draggable-2',
            '#jspsych-free-sort-draggable-3'
          ]
        }
      }
    ]
  };

  var button_click_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "",
    choices: ['Click Here']
  }

  var test_trials1 = {
    timeline: [sort_trial, button_click_trial],
    timeline_variables: first_half,
    randomize_order: true
  }

  timeline.push(test_trials1);

  var booster = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p>You are halfway through the experiment! </p>' +
      '<p>We are now going to re-calibrate the eye-tracking software to ensure accuracy in the second half.</p>',
    choices: ['Continue'],
    margin_vertical: '20px'
  }

  timeline.push(booster);

  timeline.push(calibration_booster_timeline);

  var test_trials2 = {
    timeline: [sort_trial, button_click_trial],
    timeline_variables: second_half,
    randomize_order: true
  }

  timeline.push(test_trials2);

  var check1 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p> Were you wearing glasses during this experiment? </p>',
    choices: ['Yes', 'No']
  }
  timeline.push(check1);

  var check2 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p> Were you able to keep your head still during the course of this experiment? </p>',
    choices: ['Yes', 'No']
  }
  timeline.push(check2);

  var check3 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p> Were you distracted by any notifications? </p>',
    choices: ['Yes', 'No']
  }
  timeline.push(check3);

  var check4 = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p> Were you able to hear all of the audios? </p>',
    choices: ['Yes', 'No']
  }
  timeline.push(check4);

  var save_server_data = {
    type: jsPsychCallFunction,
    func: function () {
      var data = jsPsych.data.get().json();
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'php/save_json.php');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({ filedata: data }));
    },
    post_trial_gap: 1000
  }
  timeline.push(save_server_data);

  var finale = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="instructions">' +
      '<p>You have completed the experiment. Thank you for participating!</p>' +
      '<p>This is an experiment about eye-tracking and how certain verbs influence associations.</p>' +
      '<p>One hypothesis is that sentences containing certain verbs will cause participants to fixate on the image of the target animal more than they would when other types of verbs are used.</p>' +
      '<p>An additional hypothesis is that particpants will first click on the image of the target object more often when a verb associated with object-use is used, rather than a verb without that association.</p>' +
      '<p>We will look at your individual eye and mouse movements to determine whether they show these theorized trends. If people generally do in fact follow the verb-bias trends mentioned before, then your eye and mouse movements should reflect that.</p>' +
      '<p><a href="https://app.prolific.co/submissions/complete?cc=44DB0CF7">Click here to finish the experiment and return to Prolific</a>. You do not need a completion code.</p>' +
      '</div>',
      choices: ['Exit']

  }

  timeline.push(finale);
  return timeline

}

export { build_timeline };