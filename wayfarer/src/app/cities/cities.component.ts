import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { CITIES } from '../cities';
import { CitiesService } from './cities.service';
<<<<<<< HEAD

=======
import { PostdataService } from '../postdata.service';
>>>>>>> 3048429c17e6713373182f1a27508aa7d43ed242
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  city: any;
  weather: any;
  posts = this.postDataService.getAllPosts();
  citypost: any;

  constructor(private route: ActivatedRoute, private citiesService : CitiesService, private http: HttpClient, private postDataService: PostdataService) { }

  get sortPosts(){
        return this.citypost.sort((a:any,b:any) => {
          return <any>new Date(b.date) - <any>new Date(a.date);
        });
      }
  ngOnInit(): void {
 
    
    this.route.paramMap.subscribe(params => {

      this.citiesService.sendCityId(params.get('id') || '');
      // this.citiesService.createAPIObservable();
      // this.citiesService.loadForecastWeather();

      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        if(city.id===parseInt(paramId)){
          this.citiesService.createAPIObservable(city.name, city.code)
          .subscribe(response => {
          console.log(city.name);
          console.log(response);
          
          this.weather = response;
          })
        }
        
        return city.id === parseInt(paramId);
      })
    });
    this.route.paramMap.subscribe(params => {
      this.citypost = this.posts.find((post: any) => {
        console.log(post);
        let paramId: string = params.get('id') || '';
        console.log(paramId);
        console.log("city id: " + post[0].cityId);
        if (post[0].cityId === parseInt(paramId)) {
          console.log(post[0].cityId)
          console.log(paramId)   
      }
      console.log(post[0].cityId === parseInt(paramId))
      return post[0].cityId === parseInt(paramId)
    });
  });
  console.log(this.citypost)
  
  }
}
