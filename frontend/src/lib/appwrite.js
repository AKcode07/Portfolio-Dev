import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66da0467dcda14408ab5");

export const account = new Account(client);
export { ID } from "appwrite";
