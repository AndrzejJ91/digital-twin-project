import mqtt from "mqtt";
import dotenv from "dotenv";

dotenv.config();


const MQTT_URL= process.env.MQTT_URL || "mqtt://localhost:1883";



export const startMqttClient = async () => {

    const client = mqtt.connect(MQTT_URL);

        client.on("connect", () => {
            console.log("MQTT connected");
            client.subscribe("#");

        });

        client.on("message", (topic, message) => {

            try {
                const data = JSON.parse(message.toString());
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

