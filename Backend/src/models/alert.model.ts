import mongoose, {Schema} from "mongoose";

export interface IAlert extends Document {
    sensor: mongoose.Schema.Types.ObjectId;
    alertType: string;
    value: number;
    status: string;
  }
  
  const AlertSchema: Schema = new Schema(
    {
      sensor: { type: Schema.Types.ObjectId, ref: 'Sensor', required: true },
      alertType: { type: String, required: true },
      value: { type: Number, required: true },
      status: { type: String, default: 'Active' },
    },
    { timestamps: true }  
  );
  
  export default mongoose.model<IAlert>('Alert', AlertSchema);
  