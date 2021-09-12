import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-consulter-learners',
  templateUrl: './consulter-learners.component.html',
  styleUrls: ['./consulter-learners.component.css']
})
export class ConsulterLearnersComponent implements OnInit {
  

  constructor(private fb: FormBuilder, private userService:UserService,
    private router:Router,
    private route:ActivatedRoute) { }
    leanerslist:any[]=[]

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedInAdmin();
    if(!isLoggedIn){
      this.router.navigate(['/']);
      }


    this.userService.GetAllLearners().subscribe(
      result=>{
        this.leanerslist = result
      },
      error=>{
        console.log(error);
      }
    )
  }

  delete(course:any) {
    let index = this.leanerslist.indexOf(course);
    this.leanerslist.splice(index, 1);

    this.userService.deleteuser(course.id).subscribe(
      res=>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }


  }


