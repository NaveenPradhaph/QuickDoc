import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorListService } from '../services/doctor-list.service';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder , private doctorListService : DoctorListService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      specialization: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0)]],
      contact_info: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      console.log('User registered:', user);
      this.doctorListService.registerDoctor(user).subscribe({
          next: () => {
            console.log('Doctor successfully registered.');
            this.registerForm.reset(); // ✅ Clear the form
          },
          error: (err:any) => {
            console.error('Error registering doctor:', err);
          }
        });

    } else {
      console.log('Form is invalid');
    }
  }
}
