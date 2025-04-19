import { RowDataPacket } from "mysql2/promise";

export interface Doctor extends RowDataPacket{
    id: number;
    name: string;
    specialization: string;
    experience: number;
    contact_info: string;
    created_at: Date;
}