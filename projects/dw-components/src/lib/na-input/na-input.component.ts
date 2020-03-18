import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-na-input',
  templateUrl: './na-input.component.html',
  styleUrls: ['./na-input.component.css']
})
export class NaInputComponent implements OnInit {

  @Input() data: any;
  @Input() property: any = {};
  @Output() dataChange = new EventEmitter();

  formControl: FormControl;
  constructor() { }

  ngOnInit() {
    this.formControl = new FormControl(this.data);
  }

  onKey(): void {
    if (this.property && this.property.type === 'number') {
      this.dataChange.emit(Number(this.data));
    } else {
      this.dataChange.emit(this.data);
    }
   
  }

}
