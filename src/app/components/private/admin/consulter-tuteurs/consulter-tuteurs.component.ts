import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-consulter-tuteurs',
  templateUrl: './consulter-tuteurs.component.html',
  styleUrls: ['./consulter-tuteurs.component.css']
})
export class ConsulterTuteursComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService:UserService,
    private router:Router,
    private route:ActivatedRoute) { }
    tuteurslist:any[]=[]

  ngOnInit(): void {

    let isLoggedIn = this.userService.isLoggedInAdmin();
    if(!isLoggedIn){
      this.router.navigate(['/']);
      }

    this.userService.GetAllTuteur().subscribe(
      result=>{
        this.tuteurslist = result
      },
      error=>{
        console.log(error);
      }
    )
  }

  delete(course:any) {
    let index = this.tuteurslist.indexOf(course);
    this.tuteurslist.splice(index, 1);

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
