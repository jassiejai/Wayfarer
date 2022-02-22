import { Injectable } from '@angular/core';
import { CITIES } from './cities';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {
  city = CITIES;
  posts:any[] = [];
 


  constructor() { }
  getAllPosts() {
    
    let keys = Object.keys(localStorage)
    let k = keys.length;


    CITIES.forEach(city =>{
      this.posts.push(city.posts);
    })
    

    while (k--) {
      this.posts.push(JSON.parse(localStorage.getItem(keys[k]) || '{}'));
    }
    console.log("Posts from getAllPosts");
    console.log(this.posts);

    return this.posts;
  }

  addPost(post: any) {
    this.posts.push(post);
  }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getItem(key: string){
    return localStorage.getItem(key)
  }
  public removeItem(key:string) {
    localStorage.removeItem(key);
  }
  public clear(){
    localStorage.clear();
  }

}
