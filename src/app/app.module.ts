import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { FooterComponent } from './components/private/shared/footer/footer.component';
import { AddCourseComponent } from './components/private/tuteurs/add-course/add-course.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { AddLessonComponent } from './components/private/tuteurs/add-lesson/add-lesson.component';
import { ConsulterTuteursComponent } from './components/private/admin/consulter-tuteurs/consulter-tuteurs.component';
import { RechargeSoldeComponent } from './components/private/apprenant/recharge-solde/recharge-solde.component';
import { ConsulterLearnersComponent } from './components/private/admin/consulter-learners/consulter-learners.component';
import { ConsulterLessonComponent } from './components/private/admin/consulter-lesson/consulter-lesson.component';
import { ChoisirLessonComponent } from './components/private/admin/choisir-lesson/choisir-lesson.component';
import {FormsModule  , ReactiveFormsModule } from '@angular/forms';
import { ConsulterCoursesComponent } from './components/private/admin/consulter-courses/consulter-courses.component';
import { HomeComponent } from './components/public/home/home.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { TiteursComponent } from './components/public/titeurs/titeurs.component';
import { ContactUsComponent } from './components/public/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCourseComponent } from './components/private/tuteurs/update-course/update-course.component';
import { UpdateLessonComponent } from './components/private/tuteurs/update-lesson/update-lesson.component';
import { MycourseComponent } from './components/private/mycourse/mycourse.component';
import { CoursedetailComponent } from './components/private/shared/coursedetail/coursedetail.component';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    AddCourseComponent,
    AddLessonComponent,
    ConsulterTuteursComponent,
    RechargeSoldeComponent,
    ConsulterLearnersComponent,
    ConsulterLessonComponent,
    ChoisirLessonComponent,
  
    ConsulterCoursesComponent,
       HomeComponent,
       NavbarComponent,
       CoursesComponent,
       LoginComponent,
       RegisterComponent,
       TiteursComponent,
       ContactUsComponent,
       UpdateCourseComponent,
       UpdateLessonComponent,
       MycourseComponent,
       CoursedetailComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
