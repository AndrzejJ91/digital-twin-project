import mongoose, {Schema} from "mongoose";

export interface IDataLog extends Document {
    sensor: mongoose.Schema.Types.ObjectId;
    value: number;
  }
  
  const DataLogSchema: Schema = new Schema(
    {
      sensor: { type: Schema.Types.ObjectId, ref: 'Sensor', required: true },
      value: { type: Number, required: true },
    },
    { timestamps: true }  
  );
  
  export default mongoose.model<IDataLog>('DataLog', DataLogSchema);
  