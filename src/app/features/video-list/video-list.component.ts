import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoItemModel} from "../../core/models/video.models";
import {VideoItemComponent} from "../video-item/video-item.component";

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, VideoItemComponent],
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  @Input() videoList: VideoItemModel[];
}
