/* jspsych-fullscreen.js
 * Josh de Leeuw
 *
 * toggle fullscreen mode in the browser
 *
 */

jsPsych.plugins["button-break"] = (function() {

    var plugin = {};
  
    plugin.info = {
      name: 'button-break',
      description: '',
      parameters: {
        stimulus: {
          type: jsPsych.plugins.parameterType.HTML_STRING,
          pretty_name: 'Stimulus',
          default: undefined,
          description: 'The HTML string to be displayed'
        },
        prompt: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Prompt',
          default: null,
          description: 'Any content here will be displayed below the stimulus.'
        },
        stimulus_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Stimulus duration',
          default: null,
          description: 'How long to hide the stimulus.'
        },
        response_ends_trial: {
          type: jsPsych.plugins.parameterType.BOOL,
          pretty_name: 'Response ends trial',
          default: true,
          description: 'If true, then trial will end when user responds.'
        },
      }
    }
  
    plugin.trial = function(display_element, trial) {
  
      var new_html = '<div id="jspsych-html-keyboard-response-stimulus"></div>';
      var buttons = '<div class="container-Break"><button id="break-btn" class="button-choice-break">'+trial.stimulus+'</button></div>' 
      
      new_html += buttons 

      if(trial.prompt !== null){
        new_html += '<p class="text-instr">' + trial.prompt + '</p>';
      }

      display_element.innerHTML = new_html;

      var start_time = performance.now();

      display_element.querySelector('#break-btn').addEventListener('click', function(e) {
        var choice = e.currentTarget.getAttribute('data-choice');
        after_response(choice);
      });

      var response = {
        rt: null,
        button: null
      };

      function after_response(choice) {
  
        // measure rt
        var end_time = performance.now();
        var rt = end_time - start_time;
        response.button = choice;
        response.rt = rt;
  
        // after a valid response, the stimulus will have the CSS class 'responded'
        // which can be used to provide visual feedback that a response was recorded
        // display_element.querySelector('#break-btn').className += ' responded';
  
        if (trial.response_ends_trial) {
          endTrial();
        }
      };

      function endTrial() {
  
        jsPsych.pluginAPI.clearAllTimeouts();
        
        display_element.innerHTML = '';
  
        jsPsych.pluginAPI.setTimeout(function(){
  
          var trial_data = {
            "rt": response.rt,
            "stimulus": trial.stimulus,
            "key_press": 32,
          };
  
          jsPsych.finishTrial(trial_data);
  
        }, trial.delay_after);
  
      }
  
    };
  
    return plugin;
  })();
  