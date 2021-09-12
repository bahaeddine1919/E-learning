import { Course } from "./course"

export class Lesson {
    constructor(public id?: Number, public name?: String, public description?: String, public imageUrl?: String,public videoUrl?: String,public duration?:String,public course?: Course) {










    }
    get _name() { return this.name }

    get _id() { return this.id }

    get _description() {

        return this.description
    }

    get _imageUrl() {
        return this.imageUrl
    }

    get _videoUrl() {

        return this.videoUrl
    }
    get _duration(){
        return this.duration
    }

    get _course(){

        return this.course
    }
}
