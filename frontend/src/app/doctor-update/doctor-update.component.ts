import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorListService } from '../services/doctor-list.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor-update',
  standalone: false,
  templateUrl: './doctor-update.component.html',
  styleUrl: './doctor-update.component.css',
})
export class DoctorUpdateComponent implements OnInit {
  doctorForm: FormGroup;
  doctorId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorListService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.doctorForm = this.fb.group({
      name: [''],
      specialization: [''],
      experience: [''],
      contact_info: [''],
    });
  }

  onDelete(){
    this.doctorService.deleteDoctor(this.doctorId).subscribe(() => {
      this.router.navigate(['']);
      });
  }

  ngOnInit(): void {
    this.doctorId = Number(this.route.snapshot.paramMap.get('id')!);
    this.doctorService.getDoctorById(this.doctorId).subscribe((doctor) => {
      this.doctorForm.patchValue(doctor);
    });
  }

  onSubmit(): void {
    console.log(this.doctorId);
    this.doctorService
      .updateDoctor(this.doctorId, this.doctorForm.value)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
