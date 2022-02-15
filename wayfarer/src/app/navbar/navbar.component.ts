import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  citiesList: any[] = ['London', 'Sydney', 'San Franciso', 'Seattle'];

  constructor() { }

  ngOnInit(): void {
  }


  onChange(event: any){
    console.log(event.value);
  }
}
