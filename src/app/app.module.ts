import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './programs/test/indexPage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormQLModule } from '@formql/core';
import { FormQLEditorModule } from '@formql/editor';
import { FormQLMaterialModule } from '@formql/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { EndDataService } from './programs/service/end-data.service';
import { FormQLTestComponent } from './programs/test/formQLTest.component';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { DwComponentsModule } from 'projects/dw-components/src/projects';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    FormQLTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormQLModule,
    FormQLEditorModule,
    FormQLMaterialModule,
    ReactiveFormsModule,
    TextMaskModule,
    FormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,

    DwComponentsModule
  ],

  providers: [
    EndDataService,
    { provide: 'FormQLService', useClass: EndDataService},
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  entryComponents: [
    FormQLTestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
 }
