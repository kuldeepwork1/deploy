version: 0.2

phases:
  install:
    commands:
      - echo Logging in to Docker Hub...
      - export DOCKER_USERNAME=$DOCKER_USERNAME
      - export DOCKER_PASSWORD=$DOCKER_PASSWORD
      - echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
      
  build:
    commands:
      - echo Building Docker image...
      - aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $REPOSITORY_URI
      - export ENV_VARIABLE1=$(aws ssm get-parameter --name "/CodeBuild/api.sbzee.com/RUN_SEEDER" --with-decryption --query "Parameter.Value"  --output text)
      - export ENV_VARIABLE2=$(aws ssm get-parameter --name "/CodeBuild/api.sbzee.com/MONGO_URI" --with-decryption --query "Parameter.Value"  --output text)
      - export ENV_VARIABLE3=$(aws ssm get-parameter --name "/CodeBuild/api.sbzee.com/JWT_SECRET" --with-decryption --query "Parameter.Value"  --output text)
      - export ENV_VARIABLE4=$(aws ssm get-parameter --name "/CodeBuild/api.sbzee.com/JWT_EXPIRATION" --with-decryption --query "Parameter.Value"  --output text)
      - export ENV_VARIABLE5=$(aws ssm get-parameter --name "/CodeBuild/api.sbzee.com/PORT" --with-decryption --query "Parameter.Value"  --output text)
  
      - echo "$ENV_VARIABLE1" > .env
      - echo "$ENV_VARIABLE2" >> .env
      - echo "$ENV_VARIABLE3" >> .env
      - echo "$ENV_VARIABLE4" >> .env
      - echo "$ENV_VARIABLE5" >> .env

      - aws ssm get-parameter --name "/CodeBuild/api.sbzee.com/firebaseServiceAccount" --with-decryption --query "Parameter.Value" --output text > sbzeeapp-firebase-adminsdk-fbsvc-b6400b5c5d.json
      - cat sbzeeapp-firebase-adminsdk-fbsvc-b6400b5c5d.json
      - docker build -t $REPOSITORY_URI:latest .
      - apt-get install jq -y
      - printf '[{"name":"sbzee-prod-api","imageUri":"822654907360.dkr.ecr.ap-south-1.amazonaws.com/sbzee-prod-api:latest"}]' > imagedefinitions.json
      - cat imagedefinitions.json
      
  post_build:
    commands:
      - echo Pushing Docker image to ECR...
      - docker push $REPOSITORY_URI:latest
artifacts:
  files: imagedefinitions.json

  