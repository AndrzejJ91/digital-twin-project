import mqtt from "mqtt";
import dotenv from "dotenv";
import sensorModel from "../models/sensor.model";
import alertModel from "../models/alert.model";
import dataLogModel from "../models/dataLog.model";
import machineModel from "../models/machine.model";

dotenv.config();


const MQTT_URL= process.env.MQTT_URL || "mqtt://localhost:1883";



export const startMqttClient = async () => {

    const client = mqtt.connect(MQTT_URL);

        client.on("connect", () => {
            console.log("MQTT connected");
            client.subscribe("#");

        });

        client.on("message", async (topic, message) => {

            try {
                const data = JSON.parse(message.toString());

                switch(topic) {


                    case "maschine/status":
                        const {name, ...rest} = data;

                        await machineModel.findByIdAndUpdate(
                            {name},
                            rest,
                            {new: true, upsert: true}
                        );
                        break;

                    case "machine/sensor":
                        await sensorModel.create(data);
                        break;

                    case "machine/alert":
                        await alertModel.create(data);
                        break;
                    
                    case "machine/log":
                        await dataLogModel.create(data);
                        break; 
                        
                    default:
                        console.log("nieobsługiwany topic", topic)    
                }





                console.log(`Recived message: ${message} on topic: ${topic}`);

            }catch(error) {
                console.error("Fail parsed MQTT message", error);
            };
       });

       client.on("error", (error) => {
            console.error("MQTT connection error", error)
            client.end();
       });
};

