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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
