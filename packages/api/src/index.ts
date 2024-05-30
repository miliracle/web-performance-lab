// packages/api/src/index.ts
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

async function main() {
    const client = new MongoClient(process.env.MONGODB_URI as string);
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        app.listen(port, () => {
            console.log(`API listening at http://localhost:${port}`);
        });
    } catch (e) {
        console.error(e);
    }
}

main().catch(console.error);
