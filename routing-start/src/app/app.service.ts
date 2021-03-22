import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient) {}
  postCar(): Observable<any> {
    return this.http.post(
      "https://garage-d1f8a-default-rtdb.firebaseio.com/post.json",
      { name: "colorado", color: "blue" }
    );
  }

  getCars(): Observable<any> {
    const cars: Car[] = [];
    return this.http
      .get("https://garage-d1f8a-default-rtdb.firebaseio.com/post.json")
      .pipe(
        map((responseData) => {
          for (const key in responseData) {
            cars.push(responseData[key]);
          }
          return cars;
        })
      );
  }
}

export class Car {
  name: string;
  color: string;
}
