import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tirelire2',
  templateUrl: './tirelire2.component.html',
  styleUrls: ['./tirelire2.component.css']
})
export class Tirelire2Component {
  @Input() valeur: number = 0;
  @Output() utiliser = new EventEmitter<number>();
}
