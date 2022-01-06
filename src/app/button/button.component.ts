import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnData: any;
  @Output() press: any = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  pressKey(key: string | number) {
    this.press.emit({ key });
  }
}
