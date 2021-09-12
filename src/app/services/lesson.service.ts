import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private addLesson = "http://localhost:8080/lessons/add";
  private ALLLesson = "http://localhost:8080/lessons/all";
  private delateLesson = "http://localhost:8080/lessons/delete/";
  private GetOneLesson = "http://localhost:8080/lessons/one/";
  private updateLessonurl = "http://localhost:8080/lessons/update"
  private getLesson = "http://localhost:8080/lessons/lesson/"

  constructor(private http: HttpClient) { 

  }
  AddLesson(lesson:Lesson) {
    return this.http.post<any>(this.addLesson,lesson);
  }

  getAllLessons() {
    return this.http.get<any>(this.ALLLesson);
  }
  getOnelesson(id: String) {
    return this.http.get<any>(this.GetOneLesson + id)
  }

  deletelesson(id: String) {
    return this.http.delete<any>(this.delateLesson + id)
  }
  

  
  updatelesson(lesson:Lesson){
    return this.http.patch<any>(this.updateLessonurl, lesson);
   
  }
  getlesson(id: String){
    console.log(id)
    return this.http.get<any>(this.getLesson+id);
   
  }
}
