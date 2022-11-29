import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, NavbarModule],
  exports: [ContactUsComponent],
})
export class ContactUsModule {}
