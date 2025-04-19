import { Component, importProvidersFrom } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../types/doctor.type';
import { DoctorListService } from '../services/doctor-list.service';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    '04:15 PM - 05:00 PM',
  ];

  constructor(
    private doctorListService: DoctorListService,
    private router: Router,
    private appointmentService: AppointmentService,
    private snackBar: MatSnackBar
  ) {
    this.appointmentForm = new FormGroup({
      // Initialize the FormGroup
      doctor_id: new FormControl('', Validators.required),
      patient_name: new FormControl('', Validators.required), // Add validators if needed
      timeSlot: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      contact_info: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  ngOnInit(): void {
    this.doctorListService.getDoctors().subscribe((data: Doctor[]) => {
      this.doctors = data;
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const formData = this.appointmentForm.value;
      const date = new Date(formData.date);
      const timeRange = formData.timeSlot.split(' - ')[0];
      const [time, modifier] = timeRange.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      date.setHours(hours, minutes, 0, 0);
      const utcDate = new Date(date.getTime() +  5.5* 60 * 60 * 1000);
      const appointmentDateTimeUTC = utcDate
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');

      if (modifier === 'PM' && hours !== 12) {
        hours += 12;
      } else if (modifier === 'AM' && hours === 12) {
        hours = 0;
      }

      const appointmentData = {
        ...formData,
        appointment_time: appointmentDateTimeUTC, // Use this key in the backend
      };

      this.appointmentService.createAppointment(appointmentData).subscribe({
        next: (response) => {
          this.snackBar.open('Appointment booked successfully!', 'Close', {
            duration: 3000,
          });
          console.log('Appointment created successfully!', response);
          this.router.navigate(['']);
          this.appointmentForm.reset();
          // this.appointmentForm.reset();
        },
        error: (error) => {
          console.error('Failed to create appointment', error);
          const errorMessage = error?.error?.message || 'Something went wrong!';
          this.snackBar.open(errorMessage, 'Close', {
            duration: 4000,
            panelClass: ['mat-warn'], // Optional styling
          });
        },
      });

      console.log('Form submitted successfully!', this.appointmentForm.value);
    } else {
      console.log('Form is invalid. Please check the fields.');
      this.snackBar.open('Form is invalid. Please check the fields.', 'Close', {
        duration: 3000,
        panelClass: ['mat-warn']
      });
      this.printFormErrors();
    }
  }

  printFormErrors() {
    Object.keys(this.appointmentForm.controls).forEach((key) => {
      const control = this.appointmentForm.get(key);
      if (control?.invalid) {
        console.log(`Error in ${key}:`, control?.errors);
      }
    });
  }
}
