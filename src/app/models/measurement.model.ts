import { PlantCareWarning } from "./plant-care-warning.model";

export class Measurement {
    temperature: number;
    humidity: number;
    soilMouisture: number;
    light: number;
    isRaining: number;
    measuredAtTime: Date;
    warnings: PlantCareWarning;
}