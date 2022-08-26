import { Injectable } from '@angular/core';
import { MEDIA } from "./data/initialMedia";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  mediaList: string[] = MEDIA;

  add(media: string) {
    this.mediaList.push(media);
  }

  clear() {
    this.mediaList = [];
  }

  constructor() { }
}
