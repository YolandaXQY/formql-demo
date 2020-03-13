import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwFormQLComponentsComponent } from './dw-form-qlcomponents.component';

describe('DwFormQLComponentsComponent', () => {
  let component: DwFormQLComponentsComponent;
  let fixture: ComponentFixture<DwFormQLComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwFormQLComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwFormQLComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
