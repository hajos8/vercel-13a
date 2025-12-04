import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    const conn = neon(process.env.DATABASE_URL);

    if (req.method === 'GET') {
        const result = await conn`SELECT * FROM cats LIMIT 20;`;
        return res.status(200).json(result);
    }

    if (req.method === 'POST') {
        //TODO
    }

    if (req.method === 'PUT') {
        //TODO
    }

    if (req.method === 'DELETE') {
        //TODO
    }

    return res.status(200).json('neon-cats api is working');
}