import {z} from "zod";


export const maschineSchema = z.object({
    name : z.string().min(1, "Name is required"),
    type: z.string().min(1, "Type is required"),
    status: z.enum(["online", "offline"]),
    location: z.string().optional(),
    description: z.string().optional()
});