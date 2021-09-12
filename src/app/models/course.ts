export class Course {

    
    constructor(public id?: Number, public name?: String, public description?: String, public imageUrl?: String, public price?: Number,public Course_Forum?:String,public nomtuteur?: String) {










    }
    get _name() { return this.name }

    get _id() { return this.id }

    get _description() {

        return this.description
    }

    get _imageUrl() {
        return this.imageUrl
    }

    get _price() {

        return this.price
    }
    get _Course_Forum(){
        return this.Course_Forum
    }

    get _nomtuteur(){

        return this.nomtuteur
    }
}
