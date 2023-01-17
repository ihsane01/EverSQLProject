import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogQueryComponent } from './dialog-query.component';

describe('DialogQueryComponent', () => {
  let component: DialogQueryComponent;
  let fixture: ComponentFixture<DialogQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
