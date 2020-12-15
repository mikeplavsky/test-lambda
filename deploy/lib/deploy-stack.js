const cdk = require('@aws-cdk/core');
const lambda = require('@aws-cdk/aws-lambda');
const path = require('path');

class DeployStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const docker = path.join(__dirname, "..", "../src");

    new lambda.DockerImageFunction(this, 'test-lambda', {
      code: lambda.DockerImageCode.fromImageAsset(docker)
    });
    

  }
}

module.exports = { DeployStack }
