export default class JobModel {
  constructor(
    id,
    company,
    role,
    location,
    salary,
    vacancies,
    applyBy,
    skills,
    applicants
  ) {
    (this.id = id),
      (this.company = company),
      (this.role = role),
      (this.location = location),
      (this.salary = salary),
      (this.vacancies = vacancies),
      (this.applyBy = applyBy),
      (this.skills = skills),
      (this.applicants = applicants);
  }
  static jobs = [
    {
      id: 0,
      company: "Amazon",
      role: "MERN Developer",
      location: "Delhi",
      salary: "10lpa",
      vacancies: 5,
      applyBy: "28/09/2024",
      skills: ["MongoDB", "Expressjs", "React", "Node"],
      applicants: [
        {
          name: "Vivek",
          email: "vivek@gmail.com",
          number: 9999999999,
          resume: "this is resume",
        },
        {
          name: "Vivek2",
          email: "vivek@gmail.com",
          number: 9999999999,
          resume: "this is resume",
        },
      ],
    },
  ];

  static get() {
    // console.log("inside model, value of jobs in get funcn" + this.jobs);
    return this.jobs;
  }

  static add({
    companyName,
    jobRole,
    jobLocation,
    salary,
    totalVacancies,
    applyBy,
    skills,
  }) {
    // console.log(company, role, location, salary, skills);

    let jobModel = new JobModel(
      this.jobs.length + 1,
      companyName,
      jobRole,
      jobLocation,
      salary,
      totalVacancies,
      applyBy,
      skills,
      []
    );
    this.jobs.push(jobModel);
  }
  static getJobById(id) {
    return this.jobs.find((job) => job.id == id);
  }

  static updateJobById(
    id,
    { company, role, location, salary, vacancies, applyBy, skills }
  ) {
    let idx = this.jobs.findIndex((obj) => obj.id == id);
    // console.log(this.jobs[idx]);

    this.jobs[idx] = {
      id,
      company,
      role,
      location,
      salary,
      vacancies,
      applyBy,
      skills,
      applicants: [],
    };
    // console.log(this.jobs[idx]);
    // console.log(typeof(this.jobs[idx].skills));
  }

  static deleteJob(id) {
    let idx = this.jobs.findIndex((job) => job.id == id);
    // console.log(idx);
    this.jobs.splice(idx, 1);
  }

  static addApplicant(jobId, { name, email, number }, resumeUrl) {
    let idx = this.jobs.findIndex((job) => job.id == jobId);
    this.jobs[idx].applicants.push({ name, email, number, resume: resumeUrl });
  }

  static getApplicantsByJobId(jobId){
    let job = this.jobs.find( job => job.id == jobId);
    return job.applicants;
  }
}
