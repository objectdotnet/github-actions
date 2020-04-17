let params = process.argv.slice(2);

let ftpHost = params[0];
let ftpRoot = params[1];
let ftpUser = params[2];
let ftpPass = params[3];
let slackHook = params[3];

if (ftpHost.length < 2) {
  throw new Error("FTP host address not specified.")
}
if (ftpRoot.length < 2) {
  throw new Error("FTP root directory not specified.")
}
if (ftpUser.length < 2) {
  throw new Error("FTP username not specified.")
}
if (ftpPass.length < 2) {
  throw new Error("FTP password not specified.")
}
if (slackHook.length < 2) {
  throw new Error("Slack web hook hash not specified.")
}

console.log("This script shall deploy the files to ftp://" + ftpUser + ":passwd@" + ftpHost + "/" + ftpRoot);
