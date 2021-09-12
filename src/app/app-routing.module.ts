import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoisirLessonComponent } from './components/private/admin/choisir-lesson/choisir-lesson.component';
import { ConsulterCoursesComponent } from './components/private/admin/consulter-courses/consulter-courses.component';
import { ConsulterLearnersComponent } from './components/private/admin/consulter-learners/consulter-learners.component';
import { ConsulterLessonComponent } from './components/private/admin/consulter-lesson/consulter-lesson.component';
import { ConsulterTuteursComponent } from './components/private/admin/consulter-tuteurs/consulter-tuteurs.component';
import { RechargeSoldeComponent } from './components/private/apprenant/recharge-solde/recharge-solde.component';
import { MycourseComponent } from './components/private/mycourse/mycourse.component';
import { CoursedetailComponent } from './components/private/shared/coursedetail/coursedetail.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { AddCourseComponent } from './components/private/tuteurs/add-course/add-course.component';
import { AddLessonComponent } from './components/private/tuteurs/add-lesson/add-lesson.component';
import { UpdateCourseComponent } from './components/private/tuteurs/update-course/update-course.component';
import { UpdateLessonComponent } from './components/private/tuteurs/update-lesson/update-lesson.component';
import { ContactUsComponent } from './components/public/contact-us/contact-us.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { TiteursComponent } from './components/public/titeurs/titeurs.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent

  },
  {
    path: 'update-course/:id',
    component: UpdateCourseComponent

  },
  {
    path: 'update-lesson',
    component: UpdateLessonComponent

  },
  {
    path: 'contact',
    component: ContactUsComponent

  },{
    path: 'mycourse',
    component: MycourseComponent

  },
  {
    path: 'tuteurs',
    component: TiteursComponent

  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'register',
    component: RegisterComponent

  },
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'add-course',
    component: AddCourseComponent

  },{
    path: 'add-lesson',
    component: AddLessonComponent

  }
  ,{
    path: 'consult-tuteurs',
    component: ConsulterTuteursComponent

  }
  
  ,{
    path: 'courses',
    component: CoursesComponent

  },{
    path: 'recharge-sold',
    component: RechargeSoldeComponent

  },{
    path: 'consult-leaners',
    component: ConsulterLearnersComponent

  },{
    path: 'consult-lesson/:id',
    component: ConsulterLessonComponent

  },{
    path: 'choisir-lesson',
    component: ChoisirLessonComponent

  },{
    path: 'consult-courses',
    component: ConsulterCoursesComponent

  },{
    path: 'course-detaill/:id',
    component: CoursedetailComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
