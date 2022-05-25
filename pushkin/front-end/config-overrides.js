// This is necessary because JsPsych seems to want to export CommonJS files (.cjs)
// We therefore need to modify the webpack module tests to pick up on files with this extension.
const WebpackModules = require('./node_modules/webpack-modules');
module.exports = function override(config, env) {
config.plugins.push(new WebpackModules())

    const maybe_modify_test = test => {
      const test_str = test.toString();
      if(test_str.includes("js")) {
        return new RegExp(test_str.substring(1, 4) + 'cjs|' + test_str.substring(4, test_str.length - 1));
      } else {
        return test;
      }
    };
    
    config.module.rules.map(rule => {
      if(rule.test != undefined) {
        rule.test = maybe_modify_test(rule.test);
      } else {
        if(rule.oneOf != undefined) {
          rule.oneOf.map(r => {
            if(r.test != undefined) {
              r.test = maybe_modify_test(r.test);
            }
            return r;
          });
        }
      }
  
      return rule;
    });
    
    return config;
  }