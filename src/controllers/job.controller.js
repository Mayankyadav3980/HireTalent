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

    JobModel.add(req.body);
    // console.log(req.body);

    res.redirect("/jobs");
  }

  viewDetailsPage(req, res) {
    let id = req.params.id;
    let job = JobModel.getJobById(id);
    res.render("job", { job: job });
  }

  getUpdateJob(req, res) {
    let id = req.params.id;
    let job = JobModel.getJobById(id);
    res.render("update-job", { job: job });
  }

  postUpdateJob(req, res){
    let id = req.params.id;
    // console.log(id, req.body);
    
     JobModel.updateJobById(id, req.body);
     res.redirect('/jobs')
  }

  deleteJob(req, res){
    let id = req.param.id;
    JobModel.deleteJob(id);
    res.redirect('/jobs');
  }
}
