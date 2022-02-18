import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: 'cities/:id', 
  // component: CitiesComponent, // backup option: comment this out 
  children : [
    {
      path: '',
      pathMatch: 'full',
      component: CitiesComponent

    },
    {
      path: 'post/:postId',
      component: PostComponent

    }
    
  ]
}
];
// const routes: Routes = [
//   {path: 'cities/:id', 
//   // component: CitiesComponent,
//   children : [
//     {
//       path: 'post/:postId',
//       component: PostComponent

//     },
//     {
//       path: '',
//       pathMatch: 'full',
//       component: CitiesComponent

//     }
//   ]
// }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
