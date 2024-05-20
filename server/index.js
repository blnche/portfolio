import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import myProjects from './data/myProjects.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors({
    origin: 'https://blanchepeltier.app',
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'data', 'projectsImages')));

const port = 3000


app.get('/api/projects', (req, res) => {
    res.json(myProjects)
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
