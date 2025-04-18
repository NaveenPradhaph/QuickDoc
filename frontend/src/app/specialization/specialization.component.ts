import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../types/doctor.type';
import { DoctorListService } from '../services/doctor-list.service';

@Component({
  selector: 'app-specialization',
  standalone: false,
  templateUrl: './specialization.component.html',
  styleUrl: './specialization.component.css'
})
export class SpecializationComponent {
  specialty = "";
  constructor(private route : ActivatedRoute , private doctorListService : DoctorListService){}

  ngOnInit(): void {
    this.specialty = this.route.snapshot.paramMap.get('specialty') || '';
    this.doctorListService.getDoctors().subscribe((data) => {
      this.doctors = data
      ?data.filter ((d) => d.specialization === this.specialty)
      :data;
    });
  }

    doctors: Doctor[] = [];
    searchTerm: string = '';
    currentPage: number = 0;
    pageSize: number = 6;
  
    get pagedDoctors(): Doctor[] {
      const filtered = this.doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      const startIndex = this.currentPage * this.pageSize;
      return filtered.slice(startIndex, startIndex + this.pageSize);
    }
  
    get totalPages(): number {
      const filteredLength = this.doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      ).length;
      return Math.ceil(filteredLength / this.pageSize);
    }
  
    changePage(delta: number) {
      this.currentPage = Math.max(0, Math.min(this.currentPage + delta, this.totalPages - 1));
    }

}
