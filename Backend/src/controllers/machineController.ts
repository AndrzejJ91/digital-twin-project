import Machine from "../models/machine.model";
import {Request, Response, NextFunction} from "express"
import {maschineSchema} from "../validation/maschine.schema";


export const createMaschine = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const parsed = maschineSchema.safeParse(req.body);
  
      if (!parsed.success) {
        res.status(400).json({
          error: "Invalid input",
          details: parsed.error.errors,
        });
        return; 
      }
  
      const maschine = await Machine.create(parsed.data);
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