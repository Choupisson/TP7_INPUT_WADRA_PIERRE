import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tirelire1',
  templateUrl: './tirelire1.component.html',
  styleUrls: ['./tirelire1.component.css']
})
export class Tirelire1Component {
  @Input() valeur: number = 0;
  @Output() utiliser = new EventEmitter<number>();
}
