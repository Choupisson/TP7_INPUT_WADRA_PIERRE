import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  tirelire1: number = 0;
  tirelire2: number = 0;
  tirelire3: number = 0;

  ajouter100Fr() {
    const tirelireAleatoire = Math.floor(Math.random() * 3) + 1;
    if (tirelireAleatoire === 1) {
      this.tirelire1 += 100;
    } else if (tirelireAleatoire === 2) {
      this.tirelire2 += 100;
    } else {
      this.tirelire3 += 100;
    }
  }

  utiliserTirelire(valeur: number, tirelire: string) {
    if (tirelire === 'tirelire1') {
      this.tirelire1 -= valeur;
    } else if (tirelire === 'tirelire2') {
      this.tirelire2 -= valeur;
    } else {
      this.tirelire3 -= valeur;
    }
  }
}
