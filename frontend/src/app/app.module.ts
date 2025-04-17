import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    DoctorFormComponent,
    DoctorDetailsComponent,
    AppointmentListComponent,
    AppointmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
