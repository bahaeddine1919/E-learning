import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Lesson } from 'src/app/models/lesson';
import { CourseService } from 'src/app/services/course.service';
import { LessonService } from 'src/app/services/lesson.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {


  constructor(private fb: FormBuilder, private userService:UserService,
    private router:Router,
    private route:ActivatedRoute,
    private courseSerivce:CourseService,private lessonService:LessonService) { }
    lessonlist:Lesson[]=[]
    lessons:Lesson[]=[]
    courseslist:Course[]=[]
    mcourse?:Course=new Course();
  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn;
    if(!isLoggedIn){
      this.router.navigate(['/']);
      }
    let idcourse = this.route.snapshot.params.id;
   
    this.lessonService.getOnelesson(idcourse).subscribe(
      result=>{
       
        console.log(result)
        this.lessonlist.push(result)
        this.mcourse=result.course
        console.log(this.mcourse)
        this.courseslist.push(result.course)
        console.log(result.course.id)


        this.courseSerivce.getOnecourse(result.course.id).subscribe(
          result=>{
            this.lessons = result.lessons
            console.log(result)
    
          },
          error=>{
            console.log(error);
          }
        )

       
      },
      error=>{
        console.log(error);
      }
    )



  }
  dirige(id:any){
    
    this.router.navigate(['/course-detaill/',id]);
    

  } 

}
