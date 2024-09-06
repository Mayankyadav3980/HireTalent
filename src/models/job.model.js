

export default class JobModel{
    static jobs = [
        {
            company: 'Amazon',
            role: 'MERN Developer',
            location: 'Delhi',
            salary: '10lpa',
            skills: [ "MongoDB", "Expressjs", "React", "Node"]
        }
    ];

    static get(){
        // console.log("inside model, value of jobs in get funcn" + this.jobs);
        return this.jobs;
    }
}