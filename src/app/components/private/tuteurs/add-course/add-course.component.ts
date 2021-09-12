import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseform: FormGroup


  constructor(private fb: FormBuilder, private userService:UserService,
    private route:ActivatedRoute,
    private courseSerivce:CourseService,private router : Router) {

    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      description: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      price: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9 .'-]+"),
        Validators.minLength(2)
      ]),
      course_Forum: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
                Validators.minLength(2)
      ]),
      imageUrl: new FormControl('',[
        Validators.required
      ]),

      nomtuteur: new FormControl('',[
        Validators.required
      ])
    }

    this.courseform = this.fb.group(formControls);


   }
   
  get name(){
    return this.courseform.get('name');
  }
  
  get description(){
    return this.courseform.get('description');
  }


  get price(){
    return this.courseform.get('price');
  }
  get course_Forum(){

    return this.courseform.get('course_Forum');


  }
  get imageUrl(){
    return this.courseform.get('imageUrl');

    
  }
  get nomtuteur(){
    return this.courseform.get('nomtuteur');
  }
  


  //constructor(private id?: Number, private name?: String, private description?: String, private imageUrl?: String, private price?: Number,private course_Forum?:String,private nomtuteur?: String) {



  ngOnInit(): void {

    let isLoggedIn = this.userService.isLoggedInTuteur;
    if(!isLoggedIn){
      this.router.navigate(['/']);
      }
  }
  saveprod(){
    console.log(this.courseform)
    let date=this.courseform.value;
    let course=new Course(undefined,date.name,date.description,date.imageUrl,date.price,date.course_Forum,date.nomtuteur);
console.log(course);
    this.courseSerivce.AddCourse(course).subscribe(
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
