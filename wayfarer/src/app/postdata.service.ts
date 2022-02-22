import { Injectable } from '@angular/core';
import { CITIES } from './cities';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {
  city = CITIES;
  posts:any[] = [];
 


  constructor() { }
  ngOnInit() {
    CITIES.forEach(city =>{
      city.posts.forEach(post =>{
       
        this.posts.push(post);
      })
      console.log(this.posts);

    })
    return this.posts;

  }
  getAllPosts() {
    
    let keys = Object.keys(localStorage)
    let k = keys.length;


    // CITIES.forEach(city =>{
    //   city.posts.forEach((post, i) =>{
    //     let j: number = 0;
    //     console.log("index: " + i)  
    //     console.log("City title: " + post.title)
    //     console.log(post)
    //     if (this.posts.length === 0) {
    //       this.posts.push(post);
    //     } else if (post.title != this.posts[j].title) {
    //       this.posts.push(post);
    //       j++;
    //     }
    //     // this.posts.push(post);
    //     console.log("Post title: " + this.posts[j].title)
    //     console.log(j)  
      //  if(post.title != this.posts[i].title){
      //     this.posts.push(post);
      //  }
          
      //  })
        
      // })
      if (this.posts.length === 0) {
        this.ngOnInit();
      }
      

   
    

    // while (k--) {
    //   this.posts.push(JSON.parse(localStorage.getItem(keys[k]) || '{}'));
    // }
    console.log("Posts from getAllPosts");
    console.log(this.posts);

    return this.posts;
  }

  addPost(post: any) {
    this.posts.push(post);
    console.log(this.posts)
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
function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}

