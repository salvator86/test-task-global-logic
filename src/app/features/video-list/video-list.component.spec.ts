import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListComponent } from './video-list.component';

describe('VideoListComponent', (): void => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [ VideoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
