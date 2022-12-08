const core = require('@actions/core');
const github = require('@actions/github');

try {
  const ghToken = core.getInput('GITHUB_TOKEN');
  const the_input = core.getInput('the_input');

  console.log(`This is The_input: ${the_input}!`);
  const the_time = (new Date()).toTimeString();
  core.setOutput("time", the_time);
  //JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}