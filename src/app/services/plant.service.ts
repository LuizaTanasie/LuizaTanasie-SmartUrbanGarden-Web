import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Measurement } from "../models/measurement.model";

@Injectable()
export class PlantService {
    constructor(
        private readonly httpClient: HttpClient
    ){}

    public getLatestMeasurement(deviceId: string): Observable<Measurement> {
        return this.httpClient.get<Measurement>(environment.api + "/api/GetLatestMeasurement", {
            params: new HttpParams().set('deviceId', deviceId)});
    }

    public getDeviceIdBySerialNumber(serialNumber: string): Observable<string> {
        return this.httpClient.get<string>(environment.api + "/api/GetDeviceIdBySerialNumber", {
            params: new HttpParams().set('serialNumber', serialNumber)});
    }
}