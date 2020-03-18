import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwComponentsComponent } from './dw-components.component';

describe('DwComponentsComponent', () => {
  let component: DwComponentsComponent;
  let fixture: ComponentFixture<DwComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
