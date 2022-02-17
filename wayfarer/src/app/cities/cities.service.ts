import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cityId : string = "";
  postId : string = "";

  constructor() { }

  sendCityId( id: string){

    this.cityId = id;
  }
  getCityId() {
    return this.cityId;
  }
  // create setter and getter for post id
  sendPostId(pId : string){
    this.postId = pId;
  
  }
  getPostId(){
    return this.postId;
  }
}
