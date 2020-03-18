import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaLabelComponent } from './na-label.component';

describe('NaLabelComponent', () => {
  let component: NaLabelComponent;
  let fixture: ComponentFixture<NaLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
