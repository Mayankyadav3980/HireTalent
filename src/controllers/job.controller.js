import JobModel from "../models/job.model.js";

export default class JobController {
  getJobs(req, res) {
    let jobs = JobModel.get();
    res.render("jobs", { jobs, userEmail: req.session.userEmail });
  }

  newJob(req, res) {
    res.render("new-job", { userEmail: req.session.userEmail });
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
    res.render("job", { job, userEmail: req.session.userEmail });
  }

  getUpdateJob(req, res) {
    let id = req.params.id;
    let job = JobModel.getJobById(id);
    res.render("update-job", { job, userEmail: req.session.userEmail });
  }

  postUpdateJob(req, res) {
    let id = req.params.id;
    // console.log(id, req.body);

    JobModel.updateJobById(id, req.body);
    res.redirect("/jobs/" + id);
  }

  deleteJob(req, res) {
    let id = req.params.id;
    // console.log(id);

    JobModel.deleteJob(id);
    res.redirect("/jobs");
  }

  addApplicant(req, res, next) {
    let jobId = req.params.id;
    let applicantDetails = req.body;
    let resumeUrl = "resumes/" + req.file.filename;
    // console.log(jobId, applicantDetails, resumeUrl);
    JobModel.addApplicant(jobId, applicantDetails, resumeUrl);
    next();   
  }

  getApplicantsByJobId(req, res){
    let jobId = req.params.id;
    let applicants = JobModel.getApplicantsByJobId(jobId);
    res.render("applicants", {
      applicants: applicants,
      userEmail: req.session.userEmail,
    });
  }
}
   