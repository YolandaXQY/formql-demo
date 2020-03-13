import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntComponentsComponent } from './ant-components.component';

describe('AntComponentsComponent', () => {
  let component: AntComponentsComponent;
  let fixture: ComponentFixture<AntComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
