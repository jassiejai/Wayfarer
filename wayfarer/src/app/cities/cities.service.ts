import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cityId : string = "";
  cityName : string = "";
  countryCode: string = "";

  constructor(private http: HttpClient) { }

  createAPIObservable(cityName: string, countryCode: string){
    return this.http
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
  
  }

  sendCityId( id: string){
    this.cityId = id;
  }

  getCityId() {
    return this.cityId;
  }

}
