import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecializationComponent } from './specialization/specialization.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },  
  {
    path: 'register',
    component: RegisterComponent,
  },  
  {
    path: 'doctors/specialization/:specialty',
    component: SpecializationComponent,
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
