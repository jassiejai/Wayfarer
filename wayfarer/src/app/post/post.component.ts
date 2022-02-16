import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../cities/cities.service';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  cities : any = CITIES;
  city: any;
  post: any;


  constructor( private route: ActivatedRoute, private citiesService: CitiesService) { }

  findpost(){

    console.log("this is a test");
    this.route.paramMap.subscribe(params => {
      const postId = parseInt(params.get('postId') || '');

      console.log(postId);
      this.city = CITIES.find( c => {

        let paramId :string = this.citiesService.getCityId();
        // let paramId: string = params.get('id') || '';
       console.log(paramId)
        return c.id === parseInt(paramId);
      
      })

      let postArray: any[] = this.city.posts;
      console.log(postArray);
      this.post = postArray.find( p => {
     return p.id === postId;
   } )
    }) 
    console.log(this.city)
    console.log(this.post);


    // return this.cities
    // need to be able to find specific post from cities compo
    // link to post and open a new page 
    // pulling informtion from url like postman but in angular
    // this.posts 
    // return this.cities.post
  }

  ngOnInit(): void {
 
    this.findpost()
    // this.route.paramMap.subscribe(parmas => {
    //   this.posts = parmas.get('postId')

    //   this.city = CITIES.find( ({id}) => 
    //   // equate id to whatever id is in the url 

    //   )
    //   this.cities = parmas.get('id')
    // })

    

    // this.route.paramMap.subscribe(params => {
    //   this.city = CITIES.find(city => {
    //     let paramId: string = params.get('id') || '';
    //     return city.id === parseInt(paramId);})


        // console.log(this.cities[0].posts[0])
      // })

      // // define route using parameter and subscribe dot notations
      // this.route.paramMap.subscribe(param => {
  
      //    return param.getAll(this.cities)
      //   // this.posts 
      //   // const postId = parseInt(param.get('postId'))
      //   // this.city = CITIES.find(city =>{
      //   //   return city.id === parseInt(param.get('id'));
      //   // });
  
      //   // this.posts = this.city.posts[postId];
      // });
  
      // console.log(this.route)
    }
}
