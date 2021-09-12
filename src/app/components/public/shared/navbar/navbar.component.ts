import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(     private userService:UserService,
    private router:Router) { }
    isLoggedIn? : Boolean ;
  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();


  }
  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/login']);

  } 
  dash(){
    if(this.isLoggedIn){
 
      this.router.navigate(['/dashboard']);

    }else{
      this.router.navigate(['/login']);
    }

  }
}
