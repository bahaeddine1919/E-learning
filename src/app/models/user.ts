import { Course } from "./course";
export class User {

    constructor(private id?: Number, private firstname?: String, private lastname?: String, private email?: String, private password?: String, private role?: String,private accountState?:String,private revenu_total?:Number,private sold?:Number,private Start_date?:String,private office?:String,private imageUrl?:String,private description?:String,public courseenrolled?:Course[] ) {







        
        
    }
    get _firstname() { return this.firstname }

    get _id() { return this.id }




    get _lastname() { return this.lastname }
    get _email() { return this.email }
    get _password() { return this.password }
    get _role() { return this.role }
    get _accountState() { return this.accountState }
    

    get _Start_date() { return this.Start_date }
    get _revenu_total() { return this.revenu_total }
    get _sold() { return this.sold }
    get _office() { return this.office }
    get _imageUrl() { return this.imageUrl }
    get _description() { return this.description }

get _courseenrolled(){
    return this.courseenrolled
}
    
}
