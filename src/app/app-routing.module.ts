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

const routes: Routes = [{
    'path': '',
    'component': PostsComponent,
    runGuardsAndResolvers: 'always',
  },
  {
    'path': 'posts',
    'component': PostsComponent
  },
  {
    'path': 'login',
    'component': LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
