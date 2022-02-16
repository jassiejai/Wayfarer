import { Component, OnInit } from '@angular/core';
// import { FilterPipe } from '../filter.pipe'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  city: string = '';
//TODO: Add search logic 
    public searchText: string = '';
    dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

  ngOnInit(): void {
  }

}
