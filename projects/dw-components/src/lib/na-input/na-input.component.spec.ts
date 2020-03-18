import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaInputComponent } from './na-input.component';

describe('NaInputComponent', () => {
  let component: NaInputComponent;
  let fixture: ComponentFixture<NaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
