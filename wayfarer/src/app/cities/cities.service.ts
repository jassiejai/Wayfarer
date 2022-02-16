import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cityId : string = "";

  constructor() { }

  sendCityId( id: string){

    this.cityId = id;
  }
  getCityId() {
    return this.cityId;
  }
}
