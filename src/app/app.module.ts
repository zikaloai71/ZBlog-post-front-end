import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReadPostComponent } from './pages/read-post/read-post.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoadingComponentComponent } from './components/loading-component/loading-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadPostComponent,
    NavbarComponent,
    FooterComponent,
    SignUpComponent,
    LogInComponent,
    ProfileComponent,
    LoadingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
