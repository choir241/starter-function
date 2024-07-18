import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  try{
    if (req.method === 'POST') {
      const client = new Client()
        .setEndpoint('https://v16.appwrite.org/v1')
        .setProject('668840fe0017793b93a6')
        .setKey(req.headers['x-appwrite-key']);
        
      const users = new Users(client);
      await users.create(ID.unique(), 'test@email.com', 'testPassword', 'testName');
      log(req.bodyJson);
      log(req.bodyText);
      return res.text("User was successfully created!");
    }
  }catch(err){
    console.error(err);
    log(err);
  }
};
