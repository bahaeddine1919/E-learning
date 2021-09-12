import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-titeurs',
  templateUrl: './titeurs.component.html',
  styleUrls: ['./titeurs.component.css']
})
export class TiteursComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService:UserService,
    private router:Router,
    private route:ActivatedRoute) { }
    tuteurslist:any[]=[]

  ngOnInit(): void {



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
