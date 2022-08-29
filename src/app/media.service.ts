import { Injectable } from '@angular/core';
import { Media } from "./media";
import { MEDIA } from "./data/initialMedia";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  // mediaList: Media[] = MEDIA;

  private mediaSubject = new BehaviorSubject(MEDIA);
  private mediaAction = this.mediaSubject.asObservable();

  getMediaList(): Observable<Media[]> {
    return this.mediaAction;
  }

  addMedia(newMedia: Media) {
    const newMediaList = [...this.mediaSubject.getValue(), newMedia];
    this.mediaSubject.next(newMediaList);
  }

  constructor() { }
}
