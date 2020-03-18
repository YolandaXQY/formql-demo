import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaLinkGroupComponent } from './na-link-group.component';

describe('NaLinkGroupComponent', () => {
  let component: NaLinkGroupComponent;
  let fixture: ComponentFixture<NaLinkGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaLinkGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaLinkGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
