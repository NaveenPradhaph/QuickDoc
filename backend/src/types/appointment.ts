import { RowDataPacket } from "mysql2/promise";
export interface Appointment extends RowDataPacket{
    id: number;
    doctor_id: number;
    patient_name: string;
    appointment_time: Date;
    contact_info: string;
    status: string;
    created_at: Date;
}