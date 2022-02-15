import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  cities : any = CITIES;
  city: any;
  post : any; 

  constructor(private route: AppRoutingModule) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe(param => {

      this.city = city;
      this.post = this.city.posts[postId];




    })
  }

}
