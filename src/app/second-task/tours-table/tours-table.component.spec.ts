import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursTableComponent } from './tours-table.component';

describe('ToursTableComponent', () => {
  let component: ToursTableComponent;
  let fixture: ComponentFixture<ToursTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
