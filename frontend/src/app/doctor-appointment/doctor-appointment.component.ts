import { Component } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { DoctorListService } from '../services/doctor-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';



export interface Appointment {
  id: number;
  doctor_id: number;
  patient_name: string;
  appointment_time: Date;
  time : string;
  contact_info: string;
  status: string;
  doctorName: String;
}

@Component({
  selector: 'app-doctor-appointment',
  standalone: false,
  templateUrl: './doctor-appointment.component.html',
  styleUrl: './doctor-appointment.component.css'
})
export class DoctorAppointmentComponent {


  appointment: Appointment[] = [];
  doctorNameMap: Map<number, String> = new Map();
  searchTerm: string = '';
  currentPage: number = 0;
  doctorId: number = 0;
  pageSize: number = 6;

  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private doctorListService: DoctorListService,
    private snackBar : MatSnackBar,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.doctorId = Number(this.route.snapshot.paramMap.get('id')!);
    this.doctorListService.getDoctors().subscribe((data) => {
      this.doctorNameMap = new Map(data.map((d) => [d.id, d.name]));

      this.appointmentService.getAppointments().subscribe((data) => {
        this.appointment = data.map((a) => ({
          ...a,
          time : this.convertReadableDate(a.appointment_time),
          doctorName: this.doctorNameMap.get(a.doctor_id) || 'unknown',
        }));
      });
    });

    console.log(this.appointment);
  }

  get pagedAppointment(): Appointment[] {
    const filtered = this.appointment.filter((_appointment) => {
      const matchesPatient = _appointment.patient_name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
  
      const matchesDoctor =
        _appointment.doctor_id.toString() === this.doctorId.toString();
  
      return matchesPatient && matchesDoctor;
    });
  
    const startIndex = this.currentPage * this.pageSize;
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages(): number {
    const filteredLength = this.appointment.filter((_appointment) => {
      const matchesPatient = _appointment.patient_name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
  
      const matchesDoctor =
        _appointment.doctor_id.toString() === this.doctorId.toString();
  
      return matchesPatient && matchesDoctor;
    }).length;
    return Math.ceil(filteredLength / this.pageSize);
  }

  changePage(delta: number) {
    this.currentPage = Math.max(
      0,
      Math.min(this.currentPage + delta, this.totalPages - 1)
    );
  }

  convertReadableDate(utcDate: Date) {
    const localDate = new Date(utcDate);
    const readable = localDate.toLocaleString('en-IN', {
      dateStyle: 'long',
      timeStyle: 'short',
    });
    return readable;
  }

  changeStatus(id:number,status:string){
    this.appointmentService.updateStatus(id,status).subscribe((data) => {
      this.snackBar.open(`Status updated to ${status}`, 'Close', {
        duration: 3000,
      });
      // Refresh the page
      window.location.reload();

      console.log(data);
      });
  }

  getDelete(id : number){
    this.appointmentService.deleteAppointment(id).subscribe((data) => {
      this.snackBar.open(`Appointment deleted successfully`, 'Close', {
        duration: 3000,
        });
        // Refresh the page
        window.location.reload();
        console.log(data);
        });
  }


}
