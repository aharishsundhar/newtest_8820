# Deploy your newtest-8820 applicaton by using github actions
![Github Actions](https://readmegeppetto.s3.amazonaws.com/githubactions.jpeg)

### Deploy the your generated application in aws by using github actions.

- First copy the github action folder in the below path and paste in root directory, by using the below commands in the terminal .
```sh
$ cd devops/cloud/aws/github_actions/
```
```sh
$ mkdir ../../../../.github && cp -r * ../../../../.github/
```
- An github actions will triggered when code is pushed to branch(master, main and geppetto)  in a repository.

- Before the push code to to your repo you need to give your aws details in [github secrets](https://docs.github.com/en/actions/reference/encrypted-secrets). What are keys you need to give as below.

|s.no| Key           | Value  |
| ---|:-------------:| :-----:|
| 01 | [AWS_ACCOUNT_ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html) | A 12-digit number, such as 123456789012, that uniquelyidentifies an AWS account. |
| 02 | [AWS_ACCESS_KEY_ID](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)      |   Specifies the AWS access key used as part of the credentials to authenticate the user. |
| 03 | [AWS_SECRET_ACCESS_KEY](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)      |    Specifies the AWS secret key used as part of the credentials to authenticate the user. |
| 04 | [AWS_REGION](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)      |    AWS_REGION provides details about a specific AWS region. |
| 05 | [AWS_ECS_CLUSTER_NAME](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create_cluster.html)      |    The name of the ECS cluster (up to 255 letters, numbers, hyphens, and underscores) |
| 06 | [AWS_ROLE_FOR_FARGATE](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html)     |    The task execution role grants the Amazon ECS container and Fargate agents permission to make AWS API calls on your behalf. |
| 07 | [AWS_VPC_NAME](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html)      |   The name of the VPC cluster. |
| 08 | [AWS_VPC_PUBLIC_SUBNET](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html)      |    The name of the subnet created on the above AWS_VPC_NAME. |
| 09 | [AWS_VPC_SECURITY_GROUP](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)     |    The name of the security name. |

- Make sure Your IAM user have the following roles,
1. AmazonS3FullAccess
2. AmazonECS_FullAccess
3. [AmazonECR_Access](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html)

- If all is done then push the your code to your own private repo in this branch(master, main and geppetto). Now click the  `Actions`  button and see the jobs are running. Once all is jobs is completed successfully your application is deployed.

- Here the URL for your application,

http://newtest-8820.s3-website-us-east-1.amazonaws.com/