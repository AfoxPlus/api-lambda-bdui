import type { AWS } from '@serverless/typescript';

import establishmentDetail from '@functions/establishment';

const serverlessConfiguration: AWS = {
  service: 'api-lambda-bdui',
  frameworkVersion: '4',
  plugins: ['serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    profile: '${self:custom.profile.${opt:stage}}',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      API_RESTAURANTS: '${self:custom.env.${opt:stage}.API_RESTAURANTS}',
      API_PRODUCTS: '${self:custom.env.${opt:stage}.API_PRODUCTS}',
      VERSION: '${self:custom.version}',
      STAGE: '${opt:stage}',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: { establishmentDetail },
  package: { individually: true },
  custom: {
    stage: '${opt:stage}',
    env: '${file(env.json)}',
    version: '2.0.0',
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node18',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    profile: {
      prod: 'YaListoApp',
      dev: 'YaListoApp',
    },
  },
};

module.exports = serverlessConfiguration;
