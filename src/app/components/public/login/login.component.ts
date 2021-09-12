import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup


  constructor(private fb: FormBuilder,
    private userService:UserService,
    private router:Router) {


      let formcontrols = {
        email: new FormControl('', [
          Validators.required,
          Validators.email
  
        ]),
        password: new FormControl('', [
  
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
          Validators.minLength(6)
  
        ])
  
     }
     this.loginform = this.fb.group(formcontrols);
    }

    get email(){
      return this.loginform.get('email');
    }
    get password(){
    
    return this.loginform.get('password')
    
    
    }

  ngOnInit(): void {


  
      
    
        



  }

  login(){
    let data = this.loginform.value;

    let user = new User(undefined,undefined,undefined,data.email,data.password,undefined,undefined,undefined,0,undefined,undefined,undefined,undefined);

    this.userService.loginAdmin(user).subscribe(
      res=>{
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken",token);
        this.router.navigate(['/dashboard']);
        this.userService.isLoggedIn;
      },
      err=>{
        console.log(err);
        
      }
    )
  }


} 

