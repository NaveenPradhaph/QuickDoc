import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SpecialistGridComponent } from './components/specialist-grid/specialist-grid.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { provideHttpClient } from '@angular/common/http';
import { DoctorNameFilterPipe } from './pipes/doctor-name-filter.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SpecializationComponent } from './specialization/specialization.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentsAllComponent } from './appointments-all/appointments-all.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SpecialistGridComponent,
    DoctorsListComponent,
    DoctorNameFilterPipe,
    SpecializationComponent,
    RegisterComponent,
    AppointmentsComponent,
    AppointmentsAllComponent,
    AppointmentsListComponent,
    DoctorUpdateComponent,
    DoctorAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
