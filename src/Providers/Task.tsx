class Task {
    subject:string;
    date:Date;
    stringDate:string;
    project?:string;
    constructor(subj:string,date:Date,proj?:string){
        this.subject = subj;
        this.date = date;
        this.stringDate = date.toDateString();
        this.project = proj;

    }
};