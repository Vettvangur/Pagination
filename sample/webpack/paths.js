const path = require('path');
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  helpers: path.resolve(CURRENT_WORKING_DIR, 'src/helpers'),
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules'),

  public: path.resolve(CURRENT_WORKING_DIR),
};
