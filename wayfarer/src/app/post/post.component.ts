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
    // this.route.param.subscribe(param => {

    //   let postId = parseInt(param.get('post'), 15)

    //   // this.city = CITIES.find(city =>{
    //   //   return city.id == parseInt(param.get('id'), 15);
    //   // });

    //   this.post = this.city.posts[postId];
    // });

    // console.log(this.city, this.post)

  }

}
