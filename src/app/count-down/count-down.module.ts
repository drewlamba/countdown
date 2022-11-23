import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownComponent } from './count-down.component';
import { NavbarModule } from "../navbar/navbar.module";



@NgModule({
    declarations: [
        CountDownComponent
    ],
    exports: [CountDownComponent],
    imports: [
        CommonModule,
        NavbarModule
    ]
})
export class CountDownModule { }
