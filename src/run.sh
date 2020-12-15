docker build . -t test-lambda

docker rm test-lambda
docker run --name=test-lambda -p 8080:8080 test-lambda
