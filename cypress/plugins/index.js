/* eslint-disable  no-unused-vars,global-require,import/no-unresolved,max-len */
module.exports = (on, config) => {
  /** the rest of your plugins... * */
  require('cypress-log-to-output').install(on, (type, event) => {
    // return true or false from this plugin to control if the event is logged
    // `type` is either `console` or `browser`
    // if `type` is `browser`, `event` is an object of the type `LogEntry`:
    //  https://chromedevtools.github.io/devtools-protocol/tot/Log#type-LogEntry
    // if `type` is `console`, `event` is an object of the type passed to `Runtime.consoleAPICalled`:
    //  https://chromedevtools.github.io/devtools-protocol/tot/Runtime#event-consoleAPICalled

    // for example, to only show error events:
    if (event.level === 'error' || event.type === 'error') {
      return true;
    }

    return false;
  });
};
