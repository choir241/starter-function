import { Databases, Client } from "node-appwrite";
// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {

 const appwriteClient = new Client()
    .setEndpoint("https://v16.appwrite.org/v1")
    .setProject("668840fe0017793b93a6")
    .setKey(req.headers["x-appwrite-key"])
;


  if (req.method === 'GET') {
    const database = new Databases(appwriteClient);
    const documents = await database.listDocuments('66884220000662def5a4','66884223000a7bff327a');

    log(documents.documents);
    return database.listDocuments;
  }

};