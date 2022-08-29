import { Component, OnInit } from '@angular/core';
import { MediaService  } from '../media.service';
import { Media } from "../media";
import { take } from "rxjs/operators";

@Component({
  selector: '.app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {
  mediaList: Media[] = [];

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.getMedia();
  }

  getMedia(): void {
    this.mediaService.getMediaList().pipe(
      take(4)
    )
    .subscribe(mediaList => this.mediaList = mediaList);
  }

  addMedia(): void {
    const rotationScale = 2;
    const rotation = Math.random() * (rotationScale - (0 - rotationScale)) + (0 - rotationScale);
    const newMedia = {
      mediaTitle: "New Photo",
      mediaAltText: "New Photo",
      mediaUrl: "../assets/images/photos",
      mediaDate: new Date(),
      rotation: 0.56
    }

    this.mediaService.addMedia(newMedia);
  }

}
