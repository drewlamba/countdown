import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { GalleryModule } from './pages/gallery/gallery.module';
import { HomeModule } from './pages/home/home.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsModule } from './pages/contact-us/contact-us.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarModule } from './components/navbar/navbar.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'gallery', component: GalleryComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ContactUsModule,
    GalleryModule,
    HomeModule,
    NavbarModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
