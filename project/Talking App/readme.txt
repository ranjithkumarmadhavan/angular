1. create s3 bucket.
2. add s3 bucket name in lambda code.
3. create a policy using the json file policy.txt.
4. create a role using the above policy.
5. add the arn of that role in serverless file under resources:role 
6. run serverless deploy
7. copy the http endpoint and paste in angular api.service.ts => ENDPOINT.