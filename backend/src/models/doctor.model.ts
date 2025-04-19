import { db } from "./db";
import { Doctor } from "../types/doctor";


export const getAllDoctors = async () => {
  const [rows] = await db.query("SELECT * FROM doctors");
  return rows;
};

export const getDoctorById = async (id: number) => {
  const [rows] = await db.query<Doctor[]>(
    "SELECT * FROM doctors WHERE id = ?",
    [id]
  );
  return rows[0];
};

export const createDoctor = async (doctor_details: any) => {
  const { name, specialization, experience, contact_info } = doctor_details;
  const [result] = await db.query(
    "INSERT INTO doctors (name, specialization, experience, contact_info) VALUES (?, ?, ?, ?)",
    [name, specialization, experience, contact_info]
  );
  return result;
};

export const updateDoctor = async (id: number, doctor_details: any) => {
  const { name, specialization, experience, contact_info } = doctor_details;
  const [result] = await db.query(
    "UPDATE doctors SET name = ?, specialization = ?, experience = ?, contact_info = ? WHERE id = ?",
    [name, specialization, experience, contact_info, id]
  );
  return result;
};

export const deleteDoctor = async (id: number) => {
  const [result] = await db.query("DELETE FROM doctors WHERE id = ?", [id]);
  return result;
};
