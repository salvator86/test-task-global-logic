import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', (): void => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
