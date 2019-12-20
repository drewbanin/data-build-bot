const core = require('@actions/core');
const github = require('@actions/github');

try {
  //const forkOrg = core.getInput('fork-org');
  //const forkRepo = core.getInput('fork-repo');
  //const forkBranch = core.getInput('fork-branch');
  const PRNumber = core.getInput('pr-number');

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
