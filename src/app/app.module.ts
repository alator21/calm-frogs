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

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
