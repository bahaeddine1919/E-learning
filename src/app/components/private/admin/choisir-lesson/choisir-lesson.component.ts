import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-choisir-lesson',
  templateUrl: './choisir-lesson.component.html',
  styleUrls: ['./choisir-lesson.component.css']
})
export class ChoisirLessonComponent implements OnInit {
  selctform: FormGroup
  courseslist:any[]=[]
  constructor(private fb: FormBuilder, private userService:UserService,
 
    private route:ActivatedRoute,
    private courseSerivce:CourseService,private router : Router) {
      let formControls = {
      course : new FormControl('',[
        Validators.required
      ])
    }
    this.selctform = this.fb.group(formControls);
 }

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedInTuteur();
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
  saveprod(){
    let date=this.selctform.value;
     console.log(date);
     this.router.navigate(['/consult-lesson/'.concat(date.course.toString())]);

    

  }

}
