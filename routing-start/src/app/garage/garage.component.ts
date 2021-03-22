import { Component, OnInit } from "@angular/core";
import { AppService, Car } from "src/app/app.service";

@Component({
  selector: "app-garage",
  templateUrl: "./garage.component.html",
  styleUrls: ["./garage.component.css"],
})
export class GarageComponent implements OnInit {
  constructor(private appService: AppService) {}

  public cars: Car[];
  ngOnInit(): void {
    this.refreshCarList();
  }

  addCar() {
    this.appService.postCar().subscribe(() => {
      this.refreshCarList();
    });
  }

  refreshCarList() {
    this.appService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }

  addCarAndRefreshList() {
    this.addCar();
    // this.refreshCarList();
  }
}
