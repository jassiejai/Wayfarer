import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: 'cities/:id', 
  component: CitiesComponent, // backup option: comment this out 
  children : [
    // { ///uncomment this for the backup option
    //   path: '',
    //   pathMatch: 'full',
    //   component: CitiesComponent

    // },
    {
      path: 'post/:postId',
      component: PostComponent

    }
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
