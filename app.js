import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';

const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join('src','views') )
app.use(express.static('public'));
app.use(expressEjsLayouts);

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/jobs', (req, res) => {
    res.render('jobs');
})
app.get('/job/1', (req, res) => {
    res.render('job');
})
app.listen(3000, ()=>{
    console.log('server started on port 3000');
    
})