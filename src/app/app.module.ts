import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  MaterialModule
} from './material.module';
import {
  FlexLayoutModule
} from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  PostsComponent
} from './components/posts/posts.component';
import {
  NavbarComponent
} from './components/navbar/navbar.component';
import {
  LoginComponent
} from './components/login/login.component';

import {
  PostService
} from './services/post.service';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
