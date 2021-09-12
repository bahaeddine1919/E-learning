import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService:UserService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();
    if(!isLoggedIn){
      this.router.navigate(['/']);
      }
  }

}
