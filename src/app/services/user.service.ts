import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Course } from '../models/course';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerUserUrl = "http://localhost:8080/users/register";
  private GetTuteur = "http://localhost:8080/users/tuteurs";
  private Getapprenant = "http://localhost:8080/users/apprenant";
  private loginUserUrl = "http://localhost:8080/users/login";
  private deleteUserUrl = "http://localhost:8080/users/delete/";
  private getoneuser = "http://localhost:8080/users/oneuser/";
  private Updateuser = "http://localhost:8080/users/update";
  constructor(private http: HttpClient) {




  }

  getOneUser() {
    let id:Number=0;
    let token = localStorage.getItem("myToken");

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken)
      console.log(decodedToken);
     id= decodedToken.data.id;
    } 
    return this.http.get<any>(this.getoneuser + id)
  }
  getUserConnect(){
    let id:Number=0;
    let token = localStorage.getItem("myToken");

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken)
      console.log(decodedToken);
     id= decodedToken.data.id;
    } 
  
    return this.http.get<any>(this.getoneuser + id)
   
  }
  updatecourse(user:User){
    return this.http.patch<any>(this.Updateuser, user);
   
  }
  registerAdmin(user: User) {
    return this.http.post<any>(this.registerUserUrl, user);
  }

  loginAdmin(user: User) {
    return this.http.post<any>(this.loginUserUrl, user);

  }
  isLoggedInAdmin() {

    let token = localStorage.getItem("myToken");

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken)
      if (decodedToken.data.role == "admin") {
        return true
      } else

        return false;
    } else {
      return false;
    }




  }
  isLoggedInClient() {

    let token = localStorage.getItem("myToken");

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken)
      if (decodedToken.data.role == "client") {
        return true
      } else

        return false;
    } else {
      return false;
    }




  }
  isLoggedInTuteur() {

    let token = localStorage.getItem("myToken");

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken)
      if (decodedToken.data.role == "tuteur") {
        return true
      } else

        return false;
    } else {
      return false;
    }




  }
  isLoggedIn(){
    let token = localStorage.getItem("myToken");

    

    if (token) {
      const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken)
    console.log(decodedToken);
      return true ;
    } else {
      return false;
    }




  }
  getuser(){
    let token = localStorage.getItem("myToken");

    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken)
      console.log(decodedToken);
      return decodedToken.data.id;
    } 
  


  }





  GetAllTuteur() {
    return this.http.get<any>(this.GetTuteur);
  }
  GetAllLearners() {
    return this.http.get<any>(this.Getapprenant);
  }



  deleteuser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }
  




}

