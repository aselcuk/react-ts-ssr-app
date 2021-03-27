const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`);

  if (env === 'prod') {
    const prod_client_config = merge(commonConfig, envConfig["clientConfig"]);
    const prod_server_config = merge(commonConfig, envConfig["serverConfig"]);

    return [prod_client_config, prod_server_config];
  } else {
    
    const dev_config = merge(commonConfig, envConfig);

    return dev_config;
  }
}