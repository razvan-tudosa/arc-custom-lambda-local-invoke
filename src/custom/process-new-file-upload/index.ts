import { Context, S3Event } from "aws-lambda";

export async function handler(event: S3Event, context: Context): Promise<any> {
  console.log("[process-new-file-upload]", event, context);

  return event;
}
