import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-na-table',
  templateUrl: './na-table.component.html',
  styleUrls: ['./na-table.component.css']
})
export class NaTableComponent implements OnInit {
  
  /* 数据源 */
  @Input() data: NaTableData;

  /* 布局 */
  @Input() layout: NaComponent;

  constructor() { }

  ngOnInit() {
    // console.log(this.data);
    // console.log(this.layout);
  }
  
  public valueIsArray(val: any) {
    if (typeof val === 'object') {
      if (Object.prototype.toString.call(val) === '[object Array]') {
        return true;
      }
    }
    return false;
  }

  onckickBtn(): void {
    console.log(this.data);
  }
}

class NaTableData {
   total: number;
   size: number;
   tableHead: Array<TableHeadItem> = [];
   tableBody: Array<TableBodyItem> = [];
}

class NaComponent {
  componentName: string;
  label: string;
  componentProperty: any = {};
  childComponent: childComponent;
  dataSource: any;
}

interface childComponent {
  [key: string]: any;
}

interface TableHeadItem {
  key: string;
  name: string;
}

interface TableBodyItem {
  [key: string]: any;
}