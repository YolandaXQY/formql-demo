import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormControl } from '@angular/forms';
import { FormComponent, FormValidator } from '@formql/core';

@Component({
    selector: 'formql-mat-datepicker',
    styles: [
        `.mat-form-field { display: block;}`
    ],
    template: `<div *ngIf="formControl!=null">
  <mat-form-field>
    <input [id]="field.componentId" matInput [matDatepicker]="picker" [formControl]="formControl" [placeholder]="field.label" >
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker [touchUi]="params.touchUi" [startView]="params.startView" [startAt]="params.startAt"></mat-datepicker>
  </mat-form-field>
</div>`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormQLMatDatepickerComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => FormQLMatDatepickerComponent),
            multi: true
        }]
})
export class FormQLMatDatepickerComponent implements ControlValueAccessor, OnInit {
    static componentName = 'FormQLMatDatepickerComponent';
    static formQLComponent = true;

    static validators = [
        <FormValidator>{
            name: 'Required',
            validator: Validators.required,
            key: 'required'
        }
    ];

    @Input() field: FormComponent<any>;
    @Input() formControl: FormControl;

    private _value: string;
    private _propagateChange = (_: any) => { };

    public params: any = {
        startAt: null,
        startView: null,
        touchUi: false
    };
    constructor() {
    }

    ngOnInit(): void {
        if (this.field.params) {
            if (this.field.params.startAt) {
                this.params.startAt = new Date(this.field.params.startAt);
            }
            if (this.field.params.startView) {
                this.params.startView = this.field.params.startView;
            }
            if (this.field.params.touchUi) {
                this.params.touchUi = this.field.params.touchUi;
            }
        }
    }

    get value(): any {

        return this._value;
    }

    set value(value: any) {
        this._value = value;
        this._propagateChange(this._value);
    }

    writeValue(value: string): void {
        if (value)
            this._value = value;
    }

    registerOnChange(fn: any): void {
        this._propagateChange = fn;
    }

    registerOnTouched(fn: any): void { }
}
