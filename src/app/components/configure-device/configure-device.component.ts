import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Device } from 'src/app/models/device.model';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-configure-device',
  templateUrl: './configure-device.component.html',
  styleUrls: ['./configure-device.component.css']
})
export class ConfigureDeviceComponent implements OnInit {
  public device: Observable<Device>;
  public isLoading: boolean;
  public configureDeviceForm: FormGroup;
  public deviceId: string;
  public configuredEmails: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly plantService: PlantService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly location: Location,
  ) { }

  ngOnInit(): void {
    this.deviceId = this.route.snapshot.paramMap.get('id');
    this.configureDeviceForm = this.fb.group({
      plantName: ['', Validators.required],
      plantSpecies: ['', Validators.required],
      howMuchWater: [''],
      howMuchLight: [''],
      howMuchHumidity: [''],
      idealTemperature: [''],
      email: ['', Validators.email],
    })
    this.device = this.plantService.getDeviceConfiguration(this.deviceId)
      .pipe(tap(d => {
        this.configuredEmails = d.configuredEmails && d.configuredEmails.length != 0 ?
          "Subscribed emails: \n" + d.configuredEmails.join("\n") :
          "No email configured yet.";
        this.configureDeviceForm.patchValue(d);
      }
      ));
  }

  save() {
    let device = this.configureDeviceForm.value as Device;
    device.id = this.deviceId;
    this.plantService.saveDeviceConfiguration(device).subscribe(ok => {
      this.router.navigateByUrl("/plant/" + this.deviceId);
    })
  }

  sliderMeasurement(value: number) {
    return "";
  }

  back() {
    this.location.back();
  }
}

enum MeasurementIdealAmount {
  Low = 1,
  Moderate = 2,
  High = 3
}
