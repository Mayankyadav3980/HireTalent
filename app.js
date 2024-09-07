import express, { urlencoded } from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import JobsController from './src/controllers/job.controller.js';
import UsersController from './src/controllers/user.controller.js';

const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join('src','views') )
app.use(express.static('public'));
app.use(expressEjsLayouts);
app.use(urlencoded({ extended:true}))

const jobsController = new JobsController();
const usersController = new UsersController();
// root route
app.get('/', (req, res) => {
    res.render('home')
})

//register & login routes
app.get('/register', usersController.getRegister)
app.post("/register", usersController.postRegister);
app.get("/login", usersController.getLogin);
app.post("/login", usersController.postLogin);

//Jobs related routes

//Read all jobs
app.get('/jobs', jobsController.getJobs)
//Create a new job
app.get("/create-job", jobsController.newJob);
app.post("/jobs", jobsController.postNewJob);

//Update a existing job
app.get('/update-job/:id', (req, res)=>{
  res.render('update-job');
})

//Delete a specific job


//View details of a specific job
app.get('/job/:id', jobsController.viewDetailsPage)


app.listen(3000, ()=>{
    console.log('server started on port 3000');
    
})