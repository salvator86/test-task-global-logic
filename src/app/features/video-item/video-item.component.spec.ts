import {ComponentFixture, TestBed} from '@angular/core/testing';
import {VideoItemComponent} from './video-item.component';
import {YoutubeService} from '../../core/services/youtube.service';
import {VideoModel} from '../../core/models/video.models';
import {of} from 'rxjs';

describe('VideoItemComponent', () => {
  let component: VideoItemComponent;
  let fixture: ComponentFixture<VideoItemComponent>;
  let youtubeService: jasmine.SpyObj<YoutubeService>;

  beforeEach((): void => {
    const youtubeServiceSpy = jasmine.createSpyObj('YoutubeService', ['getVideo']);
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        { provide: YoutubeService, useValue: youtubeServiceSpy },
      ]
    });
    fixture = TestBed.createComponent(VideoItemComponent);
    component = fixture.componentInstance;
    youtubeService = TestBed.inject(YoutubeService) as jasmine.SpyObj<YoutubeService>;

    component.videoItem = {
      id: {videoId: '1234'},
      snippet: {
        title: 'Marvel Video',
        thumbnails: {
          medium: {
            url: 'https://',
            width: 240,
            height: 180
          }
        }
      }
    };
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  it('should initialize isVideoActive as false', (): void => {
    expect(component.isVideoActive).toBe(false);
  });

  it('should call getVideo on onGetVideo', (): void => {
    const videoId: string = '1234';

    youtubeService
      .getVideo.and.returnValue(of({ items: [{ player: { embedHtml: '<iframe></iframe>' } }] } as VideoModel));

    component.onGetVideo();

    expect(youtubeService.getVideo).toHaveBeenCalledWith(videoId);
  });

  it('should set video and isVideoActive on successful getVideo', (): void => {
    const mockEmbedHtml: string = '<iframe></iframe>';
    youtubeService.getVideo.and.returnValue(of({ items: [{ player: { embedHtml: mockEmbedHtml } }] } as VideoModel));

    component.onGetVideo();

    expect(component.isVideoActive).toBe(true);
    expect(component.video).toEqual(component.sanitizer.bypassSecurityTrustHtml(mockEmbedHtml));
  });
});
