import jsPsychHtmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';
import jsPsychHtmlButtonResponse from '@jspsych/plugin-html-button-response';
import jsPsychSurveyHtmlForm from '@jspsych/plugin-survey-html-form';
import { independent_task_1 } from './lib/independent_task1';
import { independent_task_2 } from './lib/independent_task2';
import { stimuli_list1 } from './lib/stimuli_list1';
import { stimuli_list2 } from './lib/stimuli_list2';

function build_timeline(jsPsych) {
    var timeline = [];

        jsPsych.data.addProperties({
            subject_id: jsPsych.randomization.randomID(15),
        });

        var consent = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<iframe src = "" style="width:1000px; height:800px;" frameborder="0" allowfullscreen></iframe>'  + '<br></br>',
            choices: ["I HAVE READ THE PRECEDING INFORMATION AND WOULD LIKE TO PARTICIPATE IN THE STUDY", "I WOULD LIKE TO WITHDRAW FROM THIS STUDY. (There is no penalty for withdrawing.)"],

            on_finish: function(data) {
                if (data.button_pressed == 1) {
                jsPsych.endExperiment("Thank you for your response. <p> Please return this HIT through the Amazon Mechanical Turk platform (you may close this browser window). </p>");
                }
            }
        };
        timeline.push(consent);

        var instructions = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: "<p> In this task, you will see the beginning of a sentence and you will finish the sentence with the first thing that comes to mind. </p> <p> Please press the space bar to start </p>",
            choices: [' ']
        };
        timeline.push(instructions);

        var independent_task1 = {
            type: jsPsychSurveyHtmlForm,
            html: jsPsych.timelineVariable('stimuli'),
        }

        var print_out_independent_task1 = {
            timeline: [independent_task1],
            timeline_variables: independent_task_1,
            randomize_order: true,
            data: {
                given_sentence: jsPsych.timelineVariable('stimuli'),
                stimulus: ' '
            }
        };
        
        timeline.push(print_out_independent_task1);

        var count = 0;
        var n_trials = 150;

        var sentences;
        var version = jsPsych.randomization.sampleWithoutReplacement([1,2],1)[0];
        console.log("version: ", version);
        if (version == 1){
            sentences = stimuli_list1;
        } else {
            sentences = stimuli_list2;
        }

        var trial = {
            type: jsPsychSurveyHtmlForm,
            html: jsPsych.timelineVariable('SENTENCE')
        }

        var print_out_sentences = {
            timeline: [trial],
            timeline_variables: sentences,
            randomize_order: true,
            data: {given_sentence: jsPsych.timelineVariable('SENTENCE'),
                    stimuli_version: version,
                    stimulus: ' '
            },
            on_finish: function(data) {
                    count++;
                    var progress = count/n_trials;
                    jsPsych.setProgressBar(progress);
            },

        }
        timeline.push(print_out_sentences);

        var independent_task2 ={
            type: jsPsychSurveyHtmlForm,
            html: jsPsych.timelineVariable('stimuli')
        }

        var print_out_independent_task2 = {
            timeline: [independent_task2],
            timeline_variables: independent_task_2,
            randomize_order: true,
            data: {
                    given_sentence: jsPsych.timelineVariable('stimuli'),
                    stimulus: ' '
            }
        };
        timeline.push(print_out_independent_task2);

        var end = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: "Please press the space bar to continue",
            choices: [' '],
        };

        timeline.push(end);

        var code = {
            type: jsPsychHtmlKeyboardResponse,
            choices: ' ',
            stimulus: function(){
            return "You have completed the main task! Please copy the following code to the MTurk page. You can then close this window.  <br>" + jsPsych.data.get().values()[0].subject_id + "<br> Your browser may ask you to confirm that you want to to leave this page, just say leave, we have recorded your performance."
            }
        }
        
        timeline.push(code);
        
        return timeline
}

export { build_timeline };