import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  IsAdmin? :boolean =false;
  IsClient? :boolean =false;
  Istuteur? :boolean =false;
    constructor(private userservices :UserService) { }
  
    ngOnInit(): void {
  
  this.IsAdmin=this.userservices.isLoggedInAdmin();
  this.IsClient=this.userservices.isLoggedInClient();
  this.Istuteur=this.userservices.isLoggedInTuteur();
  
    }
}
