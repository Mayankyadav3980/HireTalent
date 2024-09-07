import JobModel from "../models/job.model.js";

export default class JobController {
  getJobs(req, res) {
    let jobs = JobModel.get();
    res.render("jobs", { jobs: jobs });
  }

  newJob(req, res) {
    res.render("new-job");
  }

  postNewJob(req, res) {
    // console.log(req.body);
    
    JobModel.add(req.body)
    // console.log(req.body);
    
    res.redirect("/jobs");
  }

  viewDetailsPage(req, res){
      let id = req.params.id;
      let job = JobModel.getJobById(id);
      res.render("job" , { job: job });
   
  }
}
