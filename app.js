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
app.use(express.urlencoded({ extended:true}))

const jobsController = new JobsController();
const usersController = new UsersController();
// root route
app.get('/', (req, res) => {
    res.render('home')
})

//register & login routes
app.get('/register', usersController.getRegister)
app.post("/register", usersController.postRegister);
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {
  res.render("profile");
});

//Jobs related routes
//Read all jobs
app.get('/jobs', jobsController.getJobs)
//Create a new job
app.get('/create-job', (req, res)=>{
  res.render('new-job')
})
app.post("/jobs", (req, res) => {
  res.redirect("/jobs");
});

//Update a existing job
app.get('/update-job', (req, res)=>{
  res.render('update-job');
})

//Delete a specific job


//View details of a specific job
app.get('/job/1', (req, res) => {
    res.render('job');
})
app.listen(3000, ()=>{
    console.log('server started on port 3000');
    
})