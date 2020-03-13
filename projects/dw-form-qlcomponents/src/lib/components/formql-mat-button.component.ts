import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
import { FormComponent, FormAction, FormActionType, ActionHandlerService } from '@formql/core';

@Component({
    selector: 'formql-mat-button-2',
    styleUrls: ['./formql-mat-button.component.less'],
    template:
    `<button mat-flat-button color="primary" class="float-right"
                [type]="field.type" (click)="onClick()"
                [disabled]="formControl.disabled ||
                    (field.type === 'submit' && formControl.parent.parent.parent.invalid) ? true : null">{{field.label}}</button>`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormQLMatButtonComponent2),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => FormQLMatButtonComponent2),
            multi: true
        }]
})

export class FormQLMatButtonComponent2 implements ControlValueAccessor {
    static componentName = 'FormQLMatButtonComponent2';
    static formQLComponent = true;
    static validators = [];
    static actions = [
        {
            key: FormActionType.Save
        } as FormAction
    ];

    @Input() field: FormComponent<any>;
    @Input() formControl: FormControl;

    private _value: string;
    private _propagateChange = (_: any) => { };

    constructor(
        private actionHandlerService: ActionHandlerService
    ) {
    }

    get value(): any {

        return this._value;
    }

    set value(value: any) {
        this._value = value;
        this._propagateChange(this._value);
    }

    writeValue(value: string): void {
        if (value) {
            this._value = value;
        }
    }

    registerOnChange(fn: any): void {
        this._propagateChange = fn;
    }

    registerOnTouched(fn: any): void { }

    onClick() {
        if (this.field.action) {
            this.actionHandlerService.send(this.field.action);
        }
    }

}
