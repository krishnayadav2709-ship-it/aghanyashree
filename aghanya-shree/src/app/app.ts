import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Detail1 } from './detail1/detail1';
import { Products } from './products/products';
import { Detail2 } from './detail2/detail2';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Hero,Detail1,Products,Detail2,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aghanya-shree');
}
