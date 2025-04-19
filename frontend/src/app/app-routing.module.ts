import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecializationComponent } from './specialization/specialization.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentsAllComponent } from './appointments-all/appointments-all.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';

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
    path: 'appointment',
    component: AppointmentsComponent,
  },
  {
    path: 'appointment-list',
    component: AppointmentsAllComponent,
  },
  {
    path: 'doctors/appointment/:id',
    component: DoctorAppointmentComponent,
  },
  {
    path: 'doctors/update/:id',
    component: DoctorUpdateComponent,
  },
  {
    path: 'doctors/specialization/:specialty',
    component: SpecializationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
