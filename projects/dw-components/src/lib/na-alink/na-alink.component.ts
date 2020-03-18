import { Component, OnInit, Input } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { EndDataService } from 'src/app/programs/service/end-data.service';
import { FormQLTestComponent } from 'src/app/programs/test/formQLTest.component';

@Component({
  selector: 'lib-na-alink',
  templateUrl: './na-alink.component.html',
  styleUrls: ['./na-alink.component.css']
})
export class NaAlinkComponent implements OnInit {

  @Input() data: any;
  constructor(
    private modalService: NzModalService,
    private endService: EndDataService
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  goNext(): void {
      // this.modalService.confirm({
      //   nzTitle: 'ddd'
      // });
      this.modalService.create({
        nzTitle: 'dd',
        nzContent: FormQLTestComponent,
        nzComponentParams: {
          formName: 'register',
          ids: ['xuu']
        }
      })
  }

}
