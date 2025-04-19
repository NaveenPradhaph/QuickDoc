import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../types/appointment.types';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:3000/api/appointments';

  constructor(private http: HttpClient) { }

  createAppointment(appointment: Omit<Appointment, 'id'>) {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }

}
