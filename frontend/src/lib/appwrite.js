import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66da0891042c5aa87458");

export const account = new Account(client);
export { ID } from "appwrite";
