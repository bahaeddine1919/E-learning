import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Enrolled } from 'src/app/models/enrolled';
import { Lesson } from 'src/app/models/lesson';
import { User } from 'src/app/models/user';
import { CourseService } from 'src/app/services/course.service';
import { EnrolledService } from 'src/app/services/enrolled.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  isLoggedIn? : Boolean ;

  courseslist:any[]=[]
  constructor(private fb: FormBuilder,private enrolledSerivce:EnrolledService,
    private route:ActivatedRoute,
    private courseSerivce:CourseService, private userService:UserService,
    private router:Router
    ) { }
  ngOnInit(): void {

    this.isLoggedIn = this.userService.isLoggedIn();

    this.courseSerivce.getAllCourses().subscribe(
      result=>{
        this.courseslist = result
      },
      error=>{
        console.log(error);
      }
    )


  }

  enroll(lesson:Lesson){

    
  
    this.router.navigate(['/course-detaill/',lesson.id]);




    
  }
  dash(){
    if(this.isLoggedIn){
 
      

    }else{
      this.router.navigate(['/login']);
    }

  }

}
