import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Lesson } from 'src/app/models/lesson';
import { CourseService } from 'src/app/services/course.service';
import { LessonService } from 'src/app/services/lesson.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-consulter-lesson',
  templateUrl: './consulter-lesson.component.html',
  styleUrls: ['./consulter-lesson.component.css']
})
export class ConsulterLessonComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService:UserService,
    private router:Router,
    private route:ActivatedRoute,
    private courseSerivce:CourseService,private lessonService:LessonService) { }
    courseslist:any[]=[]
    mcourse?:Course
  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedInTuteur;
    if(!isLoggedIn){
      this.router.navigate(['/']);
      }
    let idcourse = this.route.snapshot.params.id;
   
    this.courseSerivce.getOnecourse(idcourse).subscribe(
      result=>{
        this.courseslist = result.lessons
        console.log(result)

      },
      error=>{
        console.log(error);
      }
    )

  }

  delete(lesson:any) {
    let index = this.courseslist.indexOf(lesson);
    this.courseslist.splice(index, 1);

    this.lessonService.deletelesson(lesson.id).subscribe(
      res=>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
