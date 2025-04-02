import mongoose, { Schema, Document } from "mongoose";

export interface IMachine extends Document {
    name: string,
    type: string,
    location: string,
    status: string,
    description? : string,
    createdAt?: Date;  
    updatedAt?: Date;
     
}

const MachineSchema: Schema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    location: {type: String, required: true},
    status: {type: String, default: "offline"},
        description: {type: String}
    }, 
    {
        timestamps: true
});


export default mongoose.model<IMachine>("Machine", MachineSchema);


