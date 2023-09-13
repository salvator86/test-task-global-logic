import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VideoListModel, VideoModel} from "../models/video.models";

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {

  apiKey: string = 'AIzaSyBUNQZGaRuelVtGlk--tuTs-b22xLxi9i4';
  urlSearch: string = 'https://www.googleapis.com/youtube/v3/search';
  urlVideos: string = 'https://www.googleapis.com/youtube/v3/videos';
  constQuery: string = '&part=player&type=video&maxHeight=180&maxWidth=320';

  http: HttpClient = inject(HttpClient);

  getVideo(id: string): Observable<VideoModel> {
    return this.http.get<VideoModel>(`${this.urlVideos}?key=${this.apiKey}&id=${id}${this.constQuery}`);
  }

  getListOfVideo(searchValue: string, order: string = 'relevance'): Observable<VideoListModel> {
    return this.http
      .get<VideoListModel>(
        `${this.urlSearch}?key=${this.apiKey}&part=snippet&q=${searchValue}&maxResults=15&order=${order}`
      );
  }
}
