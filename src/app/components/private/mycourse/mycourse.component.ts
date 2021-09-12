import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit {

  courseslist:any[]=[]
  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,
    private courseSerivce:CourseService, private userService:UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
    let isLoggedTuteur= this.userService.isLoggedIn();



    this.userService.getOneUser().subscribe(
      result=>{
        if(isLoggedTuteur){

          this.courseslist = result.courses

        }else{
          this.courseslist = result.courseenrolled

        }


        this.courseslist = result.courses
        console.log(result)

      },
      error=>{
        console.log(error);
      }
    )
  }

  delete(course:any) {
    let index = this.courseslist.indexOf(course);
    this.courseslist.splice(index, 1);

    this.courseSerivce.deletecourse(course.id).subscribe(
      res=>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
