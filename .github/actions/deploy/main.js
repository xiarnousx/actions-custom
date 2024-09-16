const core = require("@actions/core");
const github = require("@actions/github");
const shell = require("@actions/exec");

function run() {
  // 1) get intput values
  const bucket = core.getInput("bucket", { required: true });
  const region = core.getInput("bucket-region", { required: true });
  const folder = core.getInput("build-folder", { required: true });

  // 2) upload files
  const s3Uri = `s3://${bucket}`;
  shell.exec(`echo "aws s3 sync ${folder} ${s3Uri} --region ${region}"`);
  core.notice("Hello world!");

  const url = `http://${bucket}.s3-website-${region}.amazonaws.com`;
  core.setOutput("url", url);
}

run();
