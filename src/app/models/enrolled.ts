import { Course } from "./course";
import { User } from "./user";

export class Enrolled {


    constructor(public id?: Number, public user?: User, public course?: Course, public date_enrolled?: String){



    }



    get _id() { return this.id }
    get _user(){ return this.user}
    get _course(){ return this.course}
    get _date_enrolled(){ return this.date_enrolled}
    

}
