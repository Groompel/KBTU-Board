import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {PostsListComponent} from './posts-list/posts-list.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {MakePostComponent} from './make-post/make-post.component';
import {ProjectDescriptionComponent} from './project-description/project-description.component';

export const ROUTES: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/salem'},
  {path: 'salem', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'project-description', component: ProjectDescriptionComponent},
  {path: 'posts-list/:sectionId', component: PostsListComponent},
  {path: 'post-details/:postId', component: PostDetailsComponent},
  {path: 'make-post', component: MakePostComponent},
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
