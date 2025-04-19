import { Request, Response } from "express";
import * as AppointmentModel from "../models/appointment.model";

export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await AppointmentModel.getAllAppointments();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const appointment = await AppointmentModel.getAppointmentById(
      Number(req.params.id)
    );
    appointment
      ? res.json(appointment)
      : res.status(404).json({ message: "Not found" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const result = await AppointmentModel.createAppointment(req.body);
    res.status(201).json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateAppointment = async (req: Request, res: Response) => {
  try {
    const result = await AppointmentModel.updateAppointment(
      Number(req.params.id),
      req.body.status
    );
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: "Invalid input" });
  }
};

export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    const result = await AppointmentModel.deleteAppointment(
      Number(req.params.id)
    );
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: "Invalid request" });
  }
};
