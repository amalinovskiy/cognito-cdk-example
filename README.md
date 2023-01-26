# Example auth server

Describes and deploys Cognito User Pool with scopes for [Example Fargate Micro Service](https://github.com/amalinovskiy/fargate-microservice-example) 

## Directory structure

* `bin` - contains main app file which is responsible for creation of all the CloudFormation stacks defined in the project
* `config` - configuration for CloudFormation stacks
* `stacks` - CloudFormation stack definition (currently contains only auth stack with Cognito User Pool)

## Development environment installation

Infrastructure is defined using [CDK](https://aws.amazon.com/cdk/) with TypeScript and NodeJS. To synth stack (compile 
TypeScript code into [CloudFormation](https://aws.amazon.com/cloudformation/)) definitions locally you need to.

* Install NodeJS 18
* Install CDK toolkit `npm install -g aws-cdk`
* Install type script `npm install -g typescript`
* Run `npm install` in project root 
* Run `cdk synth` to synch the CloudFormation stacks

> **Important!** Developer who is working on AWS infrastructure needs to be registered in the root account and be a 
> member of a group with admin access to the account you plan to deploy infrastructure to.

## Bootstrap CDK 

CDK infrastructure needs to be bootstrapped once per account, it creates a dedicated CloudFormation stack with all required resources.

To bootstrap the insfrastructure run:

```
cdk bootstrap aws://ACCOUNT-NUMBER/REGION
```

## Deploying Infrastructure
Run 

```
cdk deploy
```

That's all infrastructure changes (or new infrastucture) will be automatically deployed.
