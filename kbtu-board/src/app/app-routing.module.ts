import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthComponent} from './auth/auth.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {NewPostComponent} from './new-post/new-post.component';

export const ROUTES: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/salem'},
  {path: 'salem', component: MainPageComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: ':sectionName/:postId', component: PostDetailsComponent},
  {path: 'new/:sectionName', component: NewPostComponent},
  {path:'login', component:AuthComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
