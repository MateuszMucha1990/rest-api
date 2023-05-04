import  express  from "express";
import bodyParser from 'body-parser'; 
import {port} from './config.js'
import usersRoutes from './routes/users.js'


const app = express();

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/', (req,res) =>{
    res.send('Witam na stronie głownej')
})

app.listen(port, () => console.log(`Server slucha na ${port}`))