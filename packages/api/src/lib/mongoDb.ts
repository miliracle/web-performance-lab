import { MongoClient } from 'mongodb';


let cachedClient: MongoClient | null = null;

async function connectToDatabase(uri: string) {
  if (!cachedClient) {
    cachedClient = new MongoClient(uri, {
        maxPoolSize: 10,
    });
    await cachedClient.connect();
  }
  return cachedClient;
}

export default connectToDatabase