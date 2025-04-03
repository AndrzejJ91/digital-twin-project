import Machine from "../models/machine.model";
import {Request, Response, NextFunction} from "express"



export const createMaschine = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

      const {name, type, location, status, description } = req.body;
  
      const maschine = await Machine.create({name, type, location, status, description});
      res.status(201).json(maschine);
    } catch (error) {
      next(error);
    }
  };
  

export const getMaschine = async (req: Request, res: Response, next: NextFunction):Promise<void> => {

    try {
        const maschines = await Machine.find();
         res.json(maschines)

    }catch(error) {
        res.status(500).json({error: "Error fetching machines"});

    };

};

