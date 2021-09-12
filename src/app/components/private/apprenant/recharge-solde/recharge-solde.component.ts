import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recharge-solde',
  templateUrl: './recharge-solde.component.html',
  styleUrls: ['./recharge-solde.component.css']
})
export class RechargeSoldeComponent implements OnInit {

  constructor( private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

}
