import { Component, OnInit } from '@angular/core';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { Location } from '@angular/common';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { PlantService } from 'src/app/services/plant.service';
import { ActivatedRoute } from '@angular/router';
import { Analytics, MeasurementTypes } from 'src/app/models/analytics.model';
import { AnalyticsSettings } from 'src/app/models/analytics-settings';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  public analytics: Analytics[];
  public MeasurementTypes = MeasurementTypes;
  public AnalyticsSettings = AnalyticsSettings;
  public deviceId: string;

  lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 100,
          min: 0,
          callback: function (value, index, values) {
            return value + "%";
          }
        }
      }]
    }
  };

  lineChartOptionsTemperature: (ChartOptions) = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 50,
          min: -20,
          callback: function (value, index, values) {
            return value + "°C";
          }
        }
      }]
    }
  };

  lineChartColorsTemperature: Color[] = [
    {
      borderColor: '#5e9cff',
      backgroundColor: 'rgba(144, 196, 245,0.28)',
    },
  ];
  lineChartColorsHumidity: Color[] = [
    {
      borderColor: '#63d4b8',
      backgroundColor: 'rgba(163, 227, 211,0.28)',
    },
  ];
  lineChartColorsSoil: Color[] = [
    {
      borderColor: '#ffe136',
      backgroundColor: 'rgba(255, 239, 150,0.28)',
    },
  ];
  lineChartColorsLight: Color[] = [
    {
      borderColor: '#ffa142',
      backgroundColor: 'rgba(255, 194, 133,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(
    private readonly service: PlantService,
    private readonly location: Location,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.deviceId = this.route.snapshot.paramMap.get('id');
    this.getAnalytics(AnalyticsSettings.PerWeek);
  }
  
  //color
  getLineChartColor(measurementTypeId: number): Color[] {
    switch (measurementTypeId) {
      case MeasurementTypes.Temperature:
        return this.lineChartColorsTemperature;
      case MeasurementTypes.Soil:
        return this.lineChartColorsSoil
      case MeasurementTypes.Humidity:
        return this.lineChartColorsHumidity;
      case MeasurementTypes.Light:
        return this.lineChartColorsLight;
    }
  }

  settingsChanged(event: MatButtonToggleChange): void {
    this.getAnalytics(event.value);
  }

  getAnalytics(settings: AnalyticsSettings){
    this.service.getAnalytics(this.deviceId, settings).subscribe((analyticsList: Analytics[]) => {
      this.analytics = analyticsList;
    });
  }

  back(): void {
    this.location.back();
  }

}
