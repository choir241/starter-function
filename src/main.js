import { Databases, Client } from "node-appwrite";
// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {

 const appwriteClient = new Client()
  .SetEndpoint("https://v16.appwrite.org/v1")
  .SetProject("APPWRITE_FUNCTION_PROJECT_ID")
  .SetKey(req.headers["x-appwrite-key"])
;


  if (req.method === 'GET') {
    const database = Databases(appwriteClient);
    log(database.listDocuments('database','collection'));
    return(database.listDocuments);
  }

};