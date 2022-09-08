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
    const newMediaList = [...this.mediaSubject.getValue(), newMedia];
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
