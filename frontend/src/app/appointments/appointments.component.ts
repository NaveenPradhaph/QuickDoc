import { Component, importProvidersFrom } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../types/doctor.type';
import { DoctorListService } from '../services/doctor-list.service';

@Component({
  selector: 'app-appointments',
  standalone: false,
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css',
})
export class AppointmentsComponent {
  appointmentForm: FormGroup;
  doctors: Doctor[] = [];
  timeSlots: string[] = [
    '09:00 AM - 09:45 AM',
    '09:45 AM - 10:30 AM',
    '10:30 AM - 11:15 AM',
    '11:15 AM - 12:00 PM',
    '12:00 PM - 12:45 PM',
    '02:00 PM - 02:45 PM',
    '02:45 PM - 03:30 PM',
    '03:30 PM - 04:15 PM',
    '04:15 PM - 05:00 PM'
  ];

  constructor(private fb: FormBuilder, private doctorListService: DoctorListService) {
    this.appointmentForm = this.fb.group({
      doctor: ['', Validators.required],
      timeSlot: ['', Validators.required],
      patientName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.doctorListService.getDoctors().subscribe((data: Doctor[]) => {
      this.doctors = data;
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Form submitted successfully!', this.appointmentForm.value);
    } else {
      console.log('Form is invalid. Please check the fields.');
      this.printFormErrors();
    }
  }

  printFormErrors() {
    Object.keys(this.appointmentForm.controls).forEach(key => {
      const control = this.appointmentForm.get(key);
      if (control?.invalid) {
        console.log(`Error in ${key}:`, control?.errors);
      }
    });
  }
}
