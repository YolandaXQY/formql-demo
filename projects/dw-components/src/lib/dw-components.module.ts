import { NgModule } from '@angular/core';
import { DwComponentsComponent } from './dw-components.component';
import { NaTableComponent } from './na-table/na-table.component';
import { NaInputComponent } from './na-input/na-input.component';
import { NaAlinkComponent } from './na-alink/na-alink.component';
import { NzTableModule, NzInputModule, NzDividerModule, NzModalServiceModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { NaLabelComponent } from './na-label/na-label.component';
import { FormsModule } from '@angular/forms';
import { NaLinkGroupComponent } from './na-link-group/na-link-group.component';



@NgModule({
  declarations: [
    DwComponentsComponent, 
    NaTableComponent, 
    NaInputComponent, 
    NaAlinkComponent, 
    NaLabelComponent, 
    NaLinkGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputModule,
    NzDividerModule,
    NzModalServiceModule
  ],
  exports: [
    DwComponentsComponent,
    NaTableComponent
  ]
})
export class DwComponentsModule { }
