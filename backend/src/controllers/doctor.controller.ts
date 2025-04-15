import { Request, Response } from "express";
import * as DoctorModel from "../models/doctor.model";

export const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const doctors = await DoctorModel.getAllDoctors();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getDoctorById = async (req: Request, res: Response) => {
  try {
    const doctor = await DoctorModel.getDoctorById(Number(req.params.id));
    doctor
      ? res.json(doctor)
      : res.status(404).json({ message: "Doctor not found" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createDoctor = async (req: Request, res: Response) => {
  try {
    const result = await DoctorModel.createDoctor(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: "Invalid input" });
  }
};

export const updateDoctor = async (req: Request, res: Response) => {
  try {
    const result = await DoctorModel.updateDoctor(
      Number(req.params.id),
      req.body
    );
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: "Invalid input" });
  }
};

export const deleteDoctor = async (req: Request, res: Response) => {
  try {
    const result = await DoctorModel.deleteDoctor(Number(req.params.id));
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: "Invalid request" });
  }
};
