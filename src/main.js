const appwrite = require("node-appwrite")
// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {

 appwriteClient = client.NewClient()
	appwriteClient.SetEndpoint(os.Getenv("https://v16.appwrite.org/v1"))
	appwriteClient.SetProject(os.Getenv("APPWRITE_FUNCTION_PROJECT_ID"))
	appwriteClient.SetKey(Context.Req.Headers["x-appwrite-key"])


  if (req.method === 'GET') {
    const database = appwrite.Databases(appwriteClient);
    log(database.listDocuments('database','collection'));
    return(database.listDocuments);
  }

};