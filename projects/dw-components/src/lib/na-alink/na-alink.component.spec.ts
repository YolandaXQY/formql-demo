import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaAlinkComponent } from './na-alink.component';

describe('NaAlinkComponent', () => {
  let component: NaAlinkComponent;
  let fixture: ComponentFixture<NaAlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaAlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaAlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
