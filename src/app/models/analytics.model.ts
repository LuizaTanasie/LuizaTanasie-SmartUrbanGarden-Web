import { AnalyticsLine } from "./analytics-line.model";

export class Analytics {
    measurementTypeId: number;
    labels: string[];
    line: AnalyticsLine[];
}

export enum MeasurementTypes{
    Temperature = 1,
    Humidity = 2,
    Soil = 3,
    Light = 4
}