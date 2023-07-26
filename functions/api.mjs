import express from 'express';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();


router.get('/', (req,res) => {
    res.send('Welcome to my API service');
});


router.get('/about', (req,res) => {
    res.json({
        "name": "Mirfozil",
        "hobby": {
            "1": "Programming",
            "2": "Workout",
            "3": "Music"
        }
    })
})

router.get('/express', (req,res) => {
    res.send('Finish my website on nodejs express framework')
})

app.use('/', router);


export const handler = serverless(app)