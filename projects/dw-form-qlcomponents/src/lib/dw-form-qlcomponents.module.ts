import { NgModule } from '@angular/core';
import { DwFormQLComponentsComponent } from './dw-form-qlcomponents.component';
import { FormQLMatButtonComponent2 } from './components/formql-mat-button.component';
import { MaterialUIModule } from './material-ui';
import { TextMaskModule } from 'angular2-text-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DwFormQLComponentsComponent,
    FormQLMatButtonComponent2
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextMaskModule,
    MaterialUIModule
  ],
  entryComponents: [
    FormQLMatButtonComponent2
  ],
  exports: [
    DwFormQLComponentsComponent
  ]
})
export class DwFormQLComponentsModule { }
