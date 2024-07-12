// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {

  if (req.method === 'GET') {
    log(req.bodyJson);
    log(req.bodyText)
    // return req.bodyText;
  }

};