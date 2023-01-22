#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

import { ControlStack } from '../stacks/auth-stack';
import { CONTROL_ACCOUNT } from '../config/accounts'

const app = new cdk.App();

const controlStack = new ControlStack(app, 'auth-stack', {
    stackName: 'auth-stack',
    env: {
        region: CONTROL_ACCOUNT.region,
        account: CONTROL_ACCOUNT.id,
    },
});