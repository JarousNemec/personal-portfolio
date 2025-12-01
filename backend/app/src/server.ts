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

api.get('/project/:id', async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if (!id) {
            return res.status(400).json({error: 'Chybí parametr id'});
        }
        const idPattern = /^[a-z0-9\-]+$/i;
        if (!idPattern.test(id)) {
            return res.status(400).json({error: 'Neplatné parametry'});
        }

        const fileName = `data-project-${id}.json`;

        const DATA_FILE =
            process.env.DATA_PATH
                ? path.join(process.env.DATA_PATH, '/projects/', fileName)
                : path.join(process.cwd(), '../content-resources/projects/', fileName);

        console.log('PROJECT FILE', DATA_FILE);

        // Ověříme existenci souboru
        try {
            await fs.access(DATA_FILE);
        } catch {
            return res.status(404).json({error: 'Soubor neexistuje'});
        }

        // Soubor existuje → načteme a pošleme
        const raw = await fs.readFile(DATA_FILE, 'utf-8');
        const json = JSON.parse(raw);

        res.json(json);
    } catch (err) {
        res.status(500).json({error: 'Nepodařilo se načíst JSON'});
    }
});

api.get('/blog/:id', async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        if (!id) {
            return res.status(400).json({error: 'Chybí parametr id'});
        }
        const idPattern = /^[a-z0-9\-]+$/i;
        if (!idPattern.test(id)) {
            return res.status(400).json({error: 'Neplatné parametry'});
        }

        const fileName = `data-blog-${id}.json`;

        const DATA_FILE =
            process.env.DATA_PATH
                ? path.join(process.env.DATA_PATH, '/blogs/', fileName)
                : path.join(process.cwd(), '../content-resources/blogs/', fileName);

        console.log('PROJECT FILE', DATA_FILE);

        // Ověříme existenci souboru
        try {
            await fs.access(DATA_FILE);
        } catch {
            return res.status(404).json({error: 'Soubor neexistuje'});
        }

        // Soubor existuje → načteme a pošleme
        const raw = await fs.readFile(DATA_FILE, 'utf-8');
        const json = JSON.parse(raw);

        res.json(json);
    } catch (err) {
        res.status(500).json({error: 'Nepodařilo se načíst JSON'});
    }
});

api.get('/image/:parentType/:id/:imageId', async (req: Request, res: Response) => {
    try {
        const {parentType, id, imageId} = req.params;

        if (!id || !imageId || !parentType) {
            return res.status(400).json({error: 'Chybí parametry id nebo imageId'});
        }

        const idPattern = /^[a-z0-9\-]+$/i;
        if (!idPattern.test(id) || !idPattern.test(imageId) || !idPattern.test(parentType) || !(parentType === "project" || parentType === "blog")) {
            return res.status(400).json({error: 'Neplatné parametry'});
        }

        const fileName = `${parentType}-${id}-${imageId}.jpg`;

        const IMAGE_FILE =
            process.env.DATA_PATH
                ? path.join(process.env.DATA_PATH, '/images/', fileName)
                : path.join(process.cwd(), '../content-resources/images/', fileName);

        console.log('IMAGE FILE', IMAGE_FILE);

        // Ověříme existenci
        try {
            await fs.access(IMAGE_FILE);
        } catch {
            return res.status(404).json({error: 'Obrázek neexistuje'});
        }

        // Odpověď jako obrázek
        return res.sendFile(IMAGE_FILE);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Nepodařilo se načíst obrázek'});
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
