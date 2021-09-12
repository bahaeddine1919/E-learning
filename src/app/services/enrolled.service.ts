import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enrolled } from '../models/enrolled';

@Injectable({
  providedIn: 'root'
})
export class EnrolledService {
  private addenrolled = "http://localhost:8080/enrolled/add";
  private getallenrolled = "http://localhost:8080/enrolled/all";
  private getmyenroled = "http://localhost:8080/enrolled/courseenrolled";
  private myenrolled = "http://localhost:8080/enrolled/mycourse";

  constructor(private http: HttpClient) {




  }
  AddEnrolled(enrolled:Enrolled) {
    return this.http.post<any>(this.addenrolled,enrolled);
  }

  getAllenrolled() {
    return this.http.get<any>(this.getallenrolled);
  }
  getCourseEnrol(enrolled:Enrolled) {
    return this.http.patch<Enrolled>(this.getmyenroled,enrolled);
  }





}
