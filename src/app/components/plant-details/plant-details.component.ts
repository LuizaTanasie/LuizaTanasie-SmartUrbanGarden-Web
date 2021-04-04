import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Measurement } from 'src/app/models/measurement.model';
import { PlantCareWarning } from 'src/app/models/plant-care-warning.model';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent implements OnInit {

  constructor(
    private readonly plantService: PlantService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }
  public measurement: Measurement;
  public plantStatus: PlantStatuses;
  public PlantStatuses = PlantStatuses;
  public error: string;
  public deviceId: string;
  public isLoading: boolean;

  ngOnInit(): void {
    this.isLoading = true;
    this.deviceId= this.route.snapshot.paramMap.get('id');
    this.plantService.getLatestMeasurement(this.deviceId).subscribe(m => {
      this.isLoading = false;
      this.measurement = m;
      this.calculatePlantStatus(m.warnings);
    }, error => {
      this.isLoading = false;
      this.measurement = new Measurement();
      this.error = error.error;
      this.plantStatus = this.PlantStatuses.Sad;
    });
  }

  public navigateToConfigure() {
    this.router.navigateByUrl("/configure/" + this.deviceId);
  }

  public navigateToAnalytics() {
    this.router.navigateByUrl("/analytics/" + this.deviceId);
  }

  private calculatePlantStatus(warnings: PlantCareWarning) {
    let waringsCount = this.countHowManyWarings(warnings);
    if (waringsCount == 0) {
      this.plantStatus = PlantStatuses.Happy;
    }
    else if (waringsCount == 1) {
      this.plantStatus = PlantStatuses.Neutral;
    }
    else {
      this.plantStatus = PlantStatuses.Sad
    }
  }

  private countHowManyWarings(warning: PlantCareWarning) {
    return ["temperatureWarning", "humidityWarning", "soilMoistureWarning", "lightWarning"]
      .filter(k => k in warning && warning[k] != null && warning[k] != undefined).length;
  }
}

export enum PlantStatuses {
  Happy = 1,
  Neutral = 2,
  Sad = 3
}