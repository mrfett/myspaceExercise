import { Injectable } from '@angular/core';
import { Media } from "./media";
import { MEDIA } from "./data/initialMedia";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  // mediaList: Media[] = MEDIA;

  private mediaSubject;
  private mediaAction;

  getMediaList(): Observable<Media[]> {
    return this.mediaAction;
  }

  addMedia(newMedia: Media) {
    // get random rotation
    const randomNumber = Math.round(Math.random() * 1000);
    const rotationScale = 2;

    // get random image url
    const randomImageUrl = "https://loremflickr.com/640/480/time%20travel?" + randomNumber.toString()
    
    const randomRotation = Math.random() * (rotationScale - (0 - rotationScale)) + (0 - rotationScale);
    const newMediaList = [...this.mediaSubject.getValue(), {...newMedia, rotation: randomRotation, mediaUrl: randomImageUrl}];
    this.mediaSubject.next(newMediaList);
  }

  constructor() {
    const storedMediaList = localStorage.getItem('mediaList');
    if ( storedMediaList === null) {
      this.mediaSubject = new BehaviorSubject(MEDIA);
      this.mediaAction = this.mediaSubject.asObservable();
    } else {
      let mediaList = JSON.parse(storedMediaList).map((media) => {
        media.postDate = new Date(media.postDate);
      });
      this.mediaSubject = new BehaviorSubject(mediaList);
      this.mediaAction = this.mediaSubject.asObservable();
    }
  }
}
