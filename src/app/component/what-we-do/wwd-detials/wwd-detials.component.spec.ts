import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwdDetialsComponent } from './wwd-detials.component';

describe('WwdDetialsComponent', () => {
  let component: WwdDetialsComponent;
  let fixture: ComponentFixture<WwdDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwdDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwdDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
