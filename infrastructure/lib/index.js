import S3Stack from "./S3Stack";
import DynamoDBStack from "./DynamoDBStack";

export default function main(app) {
  new DynamoDBStack(app, "dynamodb");

  new S3Stack(app, "s3");

  // Add more stacks
}
