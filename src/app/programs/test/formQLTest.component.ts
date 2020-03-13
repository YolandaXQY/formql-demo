import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormQLMode } from '@formql/core';
import { HttpClient } from '@angular/common/http';
import { EndDataService } from '../service/end-data.service';
import { zip } from 'rxjs';
// import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-formql',
    templateUrl: './formQLTest.component.html',
})
export class FormQLTestComponent implements OnInit {

    title = 'app';
    mode: FormQLMode = FormQLMode.View;
    ids: Array<string>;
    formName: string;
    formResponse: any;
    dataResponse: any;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private service: EndDataService,
        // private message: NzMessageService
    ) {
        const routeSnap = this.route.snapshot;
        if (this.isEditMode(routeSnap)) {
            this.mode = FormQLMode.Edit;
        }

        if (this.formName == null) {
            this.formName = routeSnap.params.name;
        }

        if (routeSnap.params.id) {
            this.ids = [routeSnap.params.id];
        }


    }

    ngOnInit(): void {
        // 第一种: API mock
        // const param = {
        //     name: this.formName
        // };
        // this.service.getForm(param).subscribe(res => {
        //     this.formResponse = res.data;
        //     this.service.getFormData(param).subscribe(data => {
        //         this.dataResponse = data.data;
        //     });
        // });

        // 第二种: Assets mock
        this.service.getFormStructureByAssets(this.formName).subscribe(res => {
            this.formResponse = res;
            this.service.getFormDataByAssets(this.formName).subscribe(data => {
                this.dataResponse = data;
            });
        })
    }

    saveData(event) {
        if (event) {
            this.service.saveData(event.form.dataSource, event.ids, event.data).subscribe((result) => {
                // this.message.success('保存成功');
            });
        }
    }

    switchForm(event) {
        if (event === true) {
            this.service.getForm('contactInfo2').subscribe((result) => {
                this.formResponse = result;
            });
        }
    }

    private isEditMode(routeSnap) {
        // tslint:disable-next-line:max-line-length
        return (routeSnap.url.join('/').indexOf('/edit') !== -1 || (routeSnap.parent != null && routeSnap.parent.url.join('/').indexOf('/edit') !== -1));
    }

}
