import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { NavbarModule } from '../../components/navbar/navbar.module';

@NgModule({
  declarations: [GalleryComponent],
  exports: [GalleryComponent],
  imports: [CommonModule, NavbarModule],
})
export class GalleryModule {}
