import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-na-link-group',
  templateUrl: './na-link-group.component.html',
  styleUrls: ['./na-link-group.component.css']
})
export class NaLinkGroupComponent implements OnInit {

  @Input() list: any = [];
  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

}
