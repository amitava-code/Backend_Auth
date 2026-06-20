import express from 'express';
import morgan from 'morgan';


const app = express();

app.use(express.json());
app.use(morgan('dev')) // response time , status code , api-hit , method 



export default app;