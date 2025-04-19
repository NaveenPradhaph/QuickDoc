export interface Appointment {
  id: number;
  doctor_id: number;
  patient_name: string;
  appointment_time: Date;
  contact_info: string;
  status: string;
}
