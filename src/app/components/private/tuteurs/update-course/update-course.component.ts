import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  courseform: FormGroup




  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,
    private courseSerivce:CourseService,private router : Router, private userService:UserService
   ) {

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
  




  ngOnInit(): void {


    let idUser = this.route.snapshot.params.id;
    
    this.courseSerivce.getOnecourse(idUser).subscribe(
      res=>{
        let course = res;

        this.courseform.patchValue({
          name : course.name,
          description : course.description,
          price :course.price,
          nomtuteur:course.nomtuteur,
          course_Forum:course.Course_Forum,
          imageUrl:course.imageUrl

     
        })
        
      },
      err=>{
        console.log(err);
      }
    )
  }
  saveUser(){
    let date = this.courseform.value;
    let idUser = this.route.snapshot.params.id;
    let course=new Course(idUser,date.name,date.description,date.imageUrl,date.price,date.course_Forum,date.nomtuteur);

console.log(course)
    this.courseSerivce.updatecourse(course).subscribe(
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
