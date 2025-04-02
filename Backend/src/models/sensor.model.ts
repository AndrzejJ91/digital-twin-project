import mongoose, {Schema} from "mongoose";


export interface ISensor extends Document {
    name: string;
    type: string;
    unit: string;
    lastValue: number;
    machine: mongoose.Schema.Types.ObjectId;
  }
  
  const SensorSchema: Schema = new Schema(
    {
      name: { type: String, required: true },
      type: { type: String, required: true },
      unit: { type: String, required: true },
      lastValue: { type: Number, default: 0 },
      machine: { type: Schema.Types.ObjectId, ref: 'Machine' },
    },
    { timestamps: true }  
  );
  
  export default mongoose.model<ISensor>('Sensor', SensorSchema);