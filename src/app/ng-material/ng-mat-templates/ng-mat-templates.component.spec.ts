import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatTemplatesComponent } from './ng-mat-templates.component';

describe('NgMatTemplatesComponent', () => {
  let component: NgMatTemplatesComponent;
  let fixture: ComponentFixture<NgMatTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgMatTemplatesComponent]
    });
    fixture = TestBed.createComponent(NgMatTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
