import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent implements OnInit {

  @Input() title;
  @Input() message;
  @Output() restart: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  
  executeRestart () {
    this.restart.emit();
  }

}
