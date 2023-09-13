import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {of} from "rxjs";
import {VideoListModel} from "./core/models/video.models";

describe('AppComponent', (): void => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let httpTestingController: HttpTestingController;
  beforeEach((): void => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  it('should create the app', (): void => {
    expect(app).toBeTruthy();
  });

  it('should initialize searchValue as an empty string', (): void => {
    expect(app.searchValue).toBe('');
  });

  it('should initialize chosenOrder as "relevance"', (): void => {
    expect(app.chosenOrder).toBe('relevance');
  });

  it('should set chosenOrder and call getVideoListBySearch', (): void => {
    spyOn(app, 'getVideoListBySearch');

    const order: string = 'rating';
    app.searchValue = 'value';
    app.setOrder(order);

    expect(app.chosenOrder).toBe(order);
    expect(app.getVideoListBySearch).toHaveBeenCalled();
  });

  it('should set chosenOrder and not to call getVideoListBySearch when searchValue is empty',
    (): void => {
      spyOn(app, 'getVideoListBySearch');

      const order: string = 'rating';
      app.searchValue = '';
      app.setOrder(order);

      expect(app.chosenOrder).toBe(order);
      expect(app.getVideoListBySearch).not.toHaveBeenCalled();
    });

  it('should get video list by search', (): void => {
    const searchValue: string = 'marvel';
    const mockVideoList: VideoListModel = {items: []};
    spyOn(app.youtubeService, 'getListOfVideo').and.returnValue(of(mockVideoList));

    app.getVideoListBySearch(searchValue);

    expect(app.videoList).toEqual(mockVideoList.items);
    expect(app.youtubeService.getListOfVideo).toHaveBeenCalledWith(searchValue, app.chosenOrder);
  });

});
