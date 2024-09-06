import JobModel from "../models/job.model.js";

export default class JobController {
   getJobs(req, res) {
    let jobs = JobModel.get();
    // console.log("inside controller, value of jobs f from model" + jobs);

    res.render("jobs", { jobs: jobs });
  }
}
