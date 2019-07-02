const utils = require('./utils');

module.exports = function preDeploy() {
  const pkg = utils.readPackageJSON();

  const modified = Object.assign({}, pkg, {
    privacy: 'unlisted'
  });

  utils.writePackageJSON(modified);

  const app = utils.readAppJSON();
  utils.writeAppJSON(app);
};
