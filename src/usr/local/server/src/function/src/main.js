import { Databases, Client } from "node-appwrite";
// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {

 const appwriteClient = new Client()
    .setEndpoint("https://v16.appwrite.org/v1")
    .setProject("APPWRITE_FUNCTION_PROJECT_ID")
    .setKey(req.headers["x-appwrite-key"])
;


  if (req.method === 'GET') {
    const database = new Databases(appwriteClient);
    log(database.listDocuments('database','collection'));
    return(database.listDocuments);
  }

};