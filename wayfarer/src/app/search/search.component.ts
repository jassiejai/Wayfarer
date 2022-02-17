import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 cityList: any = CITIES;
 
  cities: any;
//TODO: Add search logic 
    public searchText: string = '';
    dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

    constructor(private route: ActivatedRoute, private router: Router) { console.log(this.cityList[0].name)}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cities = CITIES.find( (city: { id: number; }) => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      }); 
    })
  }
  onChange(event: any){
    console.log(event.value);
    this.router.navigate(['cities/',event.value]);
  }

}
