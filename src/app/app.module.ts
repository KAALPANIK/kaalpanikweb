import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HomeSliderComponent } from './component/home-slider/home-slider.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { WhatWeDoComponent } from './component/what-we-do/what-we-do.component';
import { WwdDetialsComponent } from './component/what-we-do/wwd-detials/wwd-detials.component';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeSliderComponent,
    FooterComponent,
    AboutUsComponent,
    WhatWeDoComponent,
    WwdDetialsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
