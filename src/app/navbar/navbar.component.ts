import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/"  ></a>Home</li>
        <li><a routerLink="/gallery" ></a>Gallery</li>
        <li><a routerLink="/contact-us" ></a>Contact</li>
      </ul>
    </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
