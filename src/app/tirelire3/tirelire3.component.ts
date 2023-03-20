import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tirelire3',
  templateUrl: './tirelire3.component.html',
  styleUrls: ['./tirelire3.component.css']
})
export class Tirelire3Component {
  @Input() valeur: number = 0;
  @Output() utiliser = new EventEmitter<number>(); // Définition de l'événement "utiliser"

  constructor() { }

  onClick() {
    this.utiliser.emit(this.valeur); // Émission de l'événement "utiliser"
  }
}
