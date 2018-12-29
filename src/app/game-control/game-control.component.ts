import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.less']
})
export class GameControlComponent implements OnInit {
// @Input() element:[];
  @Output() createNumber= new EventEmitter<number>();
  @Output() stopNumber= new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }
  gameStart()
  {
    this.createNumber.emit();
  }
  gameStop()
  {
    this.stopNumber.emit();
  }
}

