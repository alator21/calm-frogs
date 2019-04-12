import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  PostsComponent
} from './components/posts/posts.component';

import {
  LoginComponent
} from './components/login/login.component';

import {
  RegisterComponent
} from './components/register/register.component';

import {
  UsersComponent
} from './components/users/users.component';

import {
  UserDetailsComponent
} from './components/user-details/user-details.component';

import {
  PostDetailsComponent
} from './components/post-details/post-details.component';

const routes: Routes = [{
    'path': '',
    'component': PostsComponent
  },
  {
    'path': 'posts',
    'component': PostsComponent
  },
  {
    'path': 'login',
    'component': LoginComponent
  },
  {
    'path': 'register',
    'component': RegisterComponent
  },
  {
    'path': 'users/discover',
    'component': UsersComponent
  },
  {
    'path': 'users/user/:username',
    'component': UserDetailsComponent
  },
  {
    'path': 'posts/post/:postID',
    'component': PostDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
