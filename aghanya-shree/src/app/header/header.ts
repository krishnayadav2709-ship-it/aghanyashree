import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  scrollUp(event: Event) {
  event.preventDefault();
  window.scrollBy({ top: 1350, left: 0, behavior: 'smooth' });
}
  scrollUp1(event: Event) {
  event.preventDefault();
  window.scrollBy({ top: 2270, left: 0, behavior: 'smooth' });
}
  scrollUp2(event: Event) {
  event.preventDefault();
  window.scrollBy({ top: 3500, left: 0, behavior: 'smooth' });
}


}
