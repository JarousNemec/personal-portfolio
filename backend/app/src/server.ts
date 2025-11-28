import express, {Request, Response} from 'express';
import fs from 'fs/promises';
import path from 'path';

const app = express();
const PORT = 80;

const api = express.Router();

api.get('/blogs', async (req: Request, res: Response) => {
    try {
        const DATA_FILE =
            process.env.DATA_PATH ? path.join(process.env.DATA_PATH, 'data-blogs.json') :
            path.join(process.cwd(), '../content-resources/data-blogs.json');
        // const filePath = path.join('/app', 'data', 'data.json');
        console.log('DATA_FILE', DATA_FILE);
        const raw = await fs.readFile(DATA_FILE, 'utf-8');
        const json = JSON.parse(raw);
        if (typeof json !== 'object' || !Array.isArray(json)) {
            throw new Error('Invalid JSON');
        }

        res.json(json);
    } catch (err) {
        res.status(500).json({error: 'Nepodařilo se načíst JSON'});
    }
});

api.get('/projects', async (req: Request, res: Response) => {
    try {
        const DATA_FILE =
            process.env.DATA_PATH ? path.join(process.env.DATA_PATH, 'data-projects.json') :
            path.join(process.cwd(), '../content-resources/data-projects.json');
        // const filePath = path.join('/app', 'data', 'data.json');
        console.log('DATA_FILE', DATA_FILE);
        const raw = await fs.readFile(DATA_FILE, 'utf-8');
        const json = JSON.parse(raw);
        if (typeof json !== 'object' || !Array.isArray(json)) {
            throw new Error('Invalid JSON');
        }

        res.json(json);
    } catch (err) {
        res.status(500).json({error: 'Nepodařilo se načíst JSON'});
    }
});

api.get('/ping', (req, res) => {
    res.json({message: 'Pong!'});
});

app.use('/api', api);

// Start server
app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});
