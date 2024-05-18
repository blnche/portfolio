import express from 'express'
import cors from 'cors'
import myProjects from './data/myProjects.js'

const app = express()

app.use(cors({
    origin: 'https://portfolio-v1-front.vercel.app/',
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

const port = 3000


app.get('/api/projects', (req, res) => {
    res.send(myProjects)
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})