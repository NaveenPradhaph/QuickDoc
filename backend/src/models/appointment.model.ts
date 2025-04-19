import { db } from "./db";
import { Appointment } from "../types/appointment";

export const getAllAppointments = async () => {
  const [rows] = await db.query("SELECT * FROM appointments");
  return rows;
};

export const getAppointmentById = async (id: number) => {
  const [rows] = await db.query<Appointment[]>(
    "SELECT * FROM appointments WHERE id = ?",
    [id]
  );
  return rows[0];
};

export const createAppointment = async (appointment_details: any) => {
  const { doctor_id, patient_name, appointment_time, contact_info } =
    appointment_details;
  const [existing] = await db.query(
    "SELECT * FROM appointments WHERE doctor_id = ? AND appointment_time = ?",
    [doctor_id, appointment_time]
  );
  if ((existing as any[]).length > 0)
    throw new Error("Time slot already booked.");
  const [result] = await db.query(
    "INSERT INTO appointments (doctor_id, patient_name, appointment_time, contact_info) VALUES (?, ?, ?, ?)",
    [doctor_id, patient_name, appointment_time, contact_info]
  );
  return result;
};

export const updateAppointment = async (id: number, status: string) => {
  const [result] = await db.query(
    "UPDATE appointments SET status = ? WHERE id = ?",
    [status, id]
  );
  return result;
};

export const deleteAppointment = async (id: number) => {
  const [result] = await db.query("DELETE FROM appointments WHERE id = ?", [
    id,
  ]);
  return result;
};
