import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="p-4 bg-gray-600">
      <ul
        class=" flex flex-row justify-center item-center gap-4 cursor-pointer text-white font-semibold text-xl "
      >
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/gallery">Gallery</a></li>
        <li><a routerLink="/contact-us">Contact Us</a></li>
      </ul>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
