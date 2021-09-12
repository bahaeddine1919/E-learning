import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from 'src/app/models/lesson';
import { CourseService } from 'src/app/services/course.service';
import { LessonService } from 'src/app/services/lesson.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {
  lessonform: FormGroup

  courseslist:any[]=[]


  constructor(private fb: FormBuilder, private userService:UserService,
    private route:ActivatedRoute, private courseSerivce:CourseService,
    private lessonSerivce:LessonService,private router : Router) {

    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      description: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
    
      duration: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      video: new FormControl('',[
        Validators.required
      ]),
      resource: new FormControl('',[
        Validators.required
      ]),
      course: new FormControl([null, [Validators.required]])
    
    }

    this.lessonform = this.fb.group(formControls);


   }
   
  get name(){
    return this.lessonform.get('name');
  }
  
  get description(){
    return this.lessonform.get('description');
  }


  get price(){
    return this.lessonform.get('price');
  }
  get duration(){

    return this.lessonform.get('duration');


  }
  get video(){
    return this.lessonform.get('video');

    
  }
  get resource(){
    return this.lessonform.get('resource');

    
  }
get course(){

  return this.lessonform.get("course")
}




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
  saveprod(){
    console.log(this.lessonform)
    let date=this.lessonform.value;
    let lesson=new Lesson(undefined,date.name,date.description,date.video,date.resource,date.duration,date.course);
console.log(lesson);
    this.lessonSerivce.AddLesson(lesson).subscribe(
      res=>{
        
        console.log(res);
        this.router.navigate(['/consult-courses']);
      },
      err=>{
        console.log(err);
      }
    )


  }
}
