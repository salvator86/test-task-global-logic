import {Component, inject} from '@angular/core';
import {YoutubeService} from "./core/services/youtube.service";
import {VideoItemModel, VideoListModel} from "./core/models/video.models";
import {Order} from "./core/models/order";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  youtubeService: YoutubeService = inject(YoutubeService);

  searchValue: string = '';
  videoList: VideoItemModel[] = [];
  orders: Order[] = [Order.Date, Order.Default, Order.Rating, Order.ViewCount];
  chosenOrder: string = 'relevance';

  setOrder(order: string): void {
    this.chosenOrder = order;
    if (this.searchValue) {
      this.getVideoListBySearch(this.searchValue);
    }
  }

  getVideoListBySearch(searchValue: string): void {
    this.youtubeService.getListOfVideo(searchValue, this.chosenOrder)
      .subscribe((data: VideoListModel): void => {
        this.videoList = data.items;
    })
  }
}
