import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { CountDownComponent } from './count-down/count-down.component';
import { CountDownModule } from './count-down/count-down.module';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModule } from './gallery/gallery.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';

const routes: Routes = [ 
  {path: "", component: CountDownComponent,},
  {path: "contact-us", component: ContactUsComponent},
{path: "gallery", component: GalleryComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CountDownModule,HomeModule, GalleryModule,ContactUsModule,NavbarModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
