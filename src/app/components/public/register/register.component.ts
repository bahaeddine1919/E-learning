import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform:FormGroup

  constructor( private fb: FormBuilder,
    private userService:UserService,
    private router:Router) {
  let formcontrols={
firstname:new FormControl('',[

  Validators.required,
  Validators.pattern("[a-z .'-]+"),
  Validators.minLength(2)



]),
lastname:new FormControl('',[

  Validators.required,
  Validators.pattern("[a-z .'-]+"),
  Validators.minLength(2)



]),
email: new FormControl('', [
  Validators.required,
  Validators.email

]),
password: new FormControl('', [

  Validators.required,
  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
  Validators.minLength(6)

])
, repassword: new FormControl('',[
  Validators.required,
])



  }

  this.registerform=this.fb.group(formcontrols);


}
get firstname(){
  return this.registerform.get('firstname');
}
get lastname(){
  return this.registerform.get('lastname');
}
get email(){
  return this.registerform.get('email');
}
get password(){

return this.registerform.get('password')


}

get repassword(){

return this.registerform.get('repassword')


}
  ngOnInit(): void {
  }
  register() {

    let data = this.registerform.value;
    let user = new User(undefined,data.firstname,data.lastname,data.email,data.password,undefined,undefined,undefined,0,undefined,undefined,undefined,undefined);

    this.userService.registerAdmin(user).subscribe(
      res=>{
        
        this.router.navigate(['/login']);
      },
      err=>{
        console.log(err);
      }
    )
    
  }
}
