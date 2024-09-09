import express, { urlencoded } from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import JobsController from './src/controllers/job.controller.js';
import UsersController from './src/controllers/user.controller.js';
import {uploadResume} from './src/middlewares/resume-upload.middleware.js'

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

//Retrieve all job listing
app.get('/jobs', jobsController.getJobs)

//Create a new job listing
app.get("/create-job", jobsController.newJob);
app.post("/jobs", jobsController.postNewJob);

//Retrieve a specific job listing by id
app.get('/jobs/:id', jobsController.viewDetailsPage)

//Update a specific job listing by id
app.get('/update-job/:id', jobsController.getUpdateJob)
app.post("/jobs/:id", jobsController.postUpdateJob);

//Delete a specific job
app.post('/delete-job/:id', jobsController.deleteJob)


//Retrieve all applicants for a specific job listing
app.get('/jobs/:id/applicants', jobsController.getApplicantsByJobId)


//Apply to a specific job listing by job id,
app.post( '/apply/:id', uploadResume.single('resume'), jobsController.addApplicant)

app.listen(3000, ()=>{
    console.log('server started on port 3000');
    
})