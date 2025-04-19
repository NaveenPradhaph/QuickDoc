import { Injectable } from '@angular/core';
import { Doctor } from '../types/doctor.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DoctorListService {
  private apiUrl = 'http://localhost:3000/api/doctors';
  constructor(private http: HttpClient) {}

  getDoctors() {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  registerDoctor(doctor: Doctor) {
    console.log(doctor);
    return this.http.post(this.apiUrl, doctor);
  }

  getDoctorById(id:number){
    return this.http.get<Doctor>(`http://localhost:3000/api/doctors/${id}`);
  }

  updateDoctor(id: number, updatedData: any){
    console.log(updatedData);
    return this.http.put(`${this.apiUrl}/${id}`, updatedData);
  }

  deleteDoctor(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}

