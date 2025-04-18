import { Component } from '@angular/core';
import { Doctor } from '../../types/doctor.type';
import { DoctorListService } from '../../services/doctor-list.service';

@Component({
  selector: 'app-doctors-list',
  standalone: false,
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.css',
})
export class DoctorsListComponent {
  doctors: Doctor[] = [];
  searchTerm: string = '';
  currentPage: number = 0;
  pageSize: number = 6;


  constructor(private doctorListService: DoctorListService) {}

  ngOnInit(): void {
    this.doctorListService.getDoctors().subscribe((data) => {
      this.doctors = data;
    });
  }

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