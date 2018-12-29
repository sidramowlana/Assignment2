import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.less']
})
export class OddComponent implements OnInit {

  @Input() oddElement:number;
  constructor() { }

  ngOnInit() {
  }

}
