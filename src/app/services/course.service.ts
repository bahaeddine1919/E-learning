import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  private addCourse = "http://localhost:8080/courses/add";
  private ALLCourse = "http://localhost:8080/courses/all";
  private delateCourse = "http://localhost:8080/courses/delete/";
  private GetOneCourse = "http://localhost:8080/courses/one/";
  private updateCourseurl = "http://localhost:8080/courses/update"
  private getLesson = "http://localhost:8080/courses/lesson/"

  constructor(private http: HttpClient) { 

  }
  AddCourse(course:Course) {
    return this.http.post<any>(this.addCourse,course);
  }

  getAllCourses() {
    return this.http.get<any>(this.ALLCourse);
  }
  getOnecourse(id: String) {
    return this.http.get<any>(this.GetOneCourse + id)
  }

  deletecourse(id: String) {
    return this.http.delete<any>(this.delateCourse + id)
  }
  

  
  updatecourse(course:Course){
    return this.http.patch<any>(this.updateCourseurl, course);
   
  }
  getlesson(id: String){
    console.log(id)
    return this.http.get<any>(this.getLesson+id);
   
  }

}
