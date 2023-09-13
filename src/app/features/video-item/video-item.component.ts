import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoItemModel, VideoModel} from "../../core/models/video.models";
import {YoutubeService} from "../../core/services/youtube.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-video-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent {
  @Input() videoItem: VideoItemModel;

  isVideoActive: boolean = false;
  video: SafeHtml;

  youtubeService: YoutubeService = inject(YoutubeService);
  sanitizer: DomSanitizer = inject(DomSanitizer);

  onGetVideo(): void {
    this.youtubeService.getVideo(this.videoItem.id.videoId)
      .subscribe((data: VideoModel): void => {
        this.video = this.sanitizer.bypassSecurityTrustHtml(data.items[0]?.player.embedHtml);
        this.isVideoActive = true;
    })
  }
}
