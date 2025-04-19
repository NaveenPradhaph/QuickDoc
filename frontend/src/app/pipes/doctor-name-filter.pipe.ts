import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from '../types/doctor.type';
@Pipe({
  name: 'doctorNameFilter',
  standalone: false
})
export class DoctorNameFilterPipe implements PipeTransform {

  transform(doctors: Doctor[], searchTerm: string): Doctor[] {
    if (!doctors || !searchTerm) {
      return doctors;
    }
    
    const lowerSearch = searchTerm.toLowerCase();
    return doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(lowerSearch)
    );

  }

}
