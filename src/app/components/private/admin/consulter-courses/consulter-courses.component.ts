import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-consulter-courses',
  templateUrl: './consulter-courses.component.html',
  styleUrls: ['./consulter-courses.component.css']
})
export class ConsulterCoursesComponent implements OnInit {

  courseslist:any[]=[]
  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,
    private courseSerivce:CourseService, private userService:UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedInTuteur;
    if(!isLoggedIn){
      this.router.navigate(['/']);
      }

    this.courseSerivce.getAllCourses().subscribe(
      result=>{
        this.courseslist = result
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
