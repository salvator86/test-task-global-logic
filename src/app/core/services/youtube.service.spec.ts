import { TestBed } from '@angular/core/testing';
import { YoutubeService } from './youtube.service';
import {VideoListModel, VideoModel} from "../models/video.models";
import {HttpClientTestingModule, HttpTestingController, TestRequest} from "@angular/common/http/testing";

describe('YoutubeService', (): void => {
  let service: YoutubeService;
  let httpTestingController: HttpTestingController;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [YoutubeService]
    });
    service = TestBed.inject(YoutubeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  it('should get video by ID', (): void => {
    const videoId: string = '1';
    const dummyVideo: VideoModel  = { items: [{player: {embedHtml: '<video></video>'}}] };

    service.getVideo(videoId).subscribe((video: VideoModel): void => {
      expect(video).toEqual(dummyVideo);
    });

    const req: TestRequest = httpTestingController
      .expectOne(`${service.urlVideos}?key=${service.apiKey}&id=${videoId}${service.constQuery}`);
    expect(req.request.method).toBe('GET');

    req.flush(dummyVideo);
  });

  it('should get list of videos', (): void => {
    const searchValue: string = 'marvel';
    const order: string = 'relevance';
    const dummyVideoList: VideoListModel = {items: []};

    service.getListOfVideo(searchValue, order).subscribe((videoList: VideoListModel): void => {
      expect(videoList).toEqual(dummyVideoList);
    });

    const req: TestRequest = httpTestingController
      .expectOne(`${service.urlSearch}?key=${service.apiKey}&part=snippet&q=${searchValue}&maxResults=15&order=${order}`);
    expect(req.request.method).toBe('GET');

    req.flush(dummyVideoList)
  });
});
