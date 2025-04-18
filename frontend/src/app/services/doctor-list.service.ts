import { Injectable } from '@angular/core';
import { Doctor } from '../types/doctor.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorListService {
  private apiUrl = 'http://localhost:3000/api/doctors';
  constructor(private http: HttpClient) { }
  getDoctors(){
    return this.http.get<Doctor[]>(this.apiUrl);
  }

}
