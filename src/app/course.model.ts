export class Course {
    constructor(public title: string, public code: string, public days: string[], 
        public Starttime:string, public endTime: string, public credits: number){}

    getDays(){
        return this.days.join("/");
    }
}
