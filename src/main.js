import { Users, Client, ID } from 'node-appwrite';
// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  if (req.method === 'GET') {
    const client = new Client()
      .setEndpoint('https://v16.appwrite.org/v1')
      .setProject('668840fe0017793b93a6')
      .setKey(req.headers['x-appwrite-key']);
    const users = new Users(client);
    const user = await users.create(ID.unique(), 'matej@appwrite.io');
    log(res.text(user.$id))
    log(req.bodyJson);
    log(req.bodyText);
    return res.text(user.$id);
  }
};
