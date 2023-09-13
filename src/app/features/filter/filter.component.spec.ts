import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';

describe('FilterComponent', (): void => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
