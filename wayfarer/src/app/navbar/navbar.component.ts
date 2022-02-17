import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CITIES } from '../cities'
import { CitiesService } from '../cities/cities.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cities: any = {};
  citiesList: any[] = ['San Franciso', 'London', 'Gibraltar','Sydney', 'Seattle'];

  constructor(private route: ActivatedRoute, private router: Router, private citiesService : CitiesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cities = CITIES.find( (city: { id: number; }) => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      })
    })
  }


  onChange(event: any){
    console.log(event.value);
    this.citiesService.sendCityName(CITIES[event.value-1].name);
    this.citiesService.sendCountryCode(CITIES[event.value-1].code);
    this.router.navigate(['cities/',event.value]);
  }
}
