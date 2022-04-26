import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showText = false;

  switchShowText(): void {
    this.showText = !this.showText;
  }
}
