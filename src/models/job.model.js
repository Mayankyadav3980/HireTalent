

export default class JobModel {
  constructor(id, company, role, location, salary, vacancies, applyBy, skills) {
    (this.id = id),
      (this.company = company),
      (this.role = role),
      (this.location = location),
      (this.salary = salary),
      (this.vacancies = vacancies),
      (this.applyBy = applyBy),
      (this.skills = skills);
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
      skills
    );
    this.jobs.push(jobModel);
  }
  static getJobById(id) {
    return this.jobs.find((job) => job.id == id);
  }
}