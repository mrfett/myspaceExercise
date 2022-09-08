import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Media } from '../media';
import { MediaService } from '../media.service';

@Component({
  selector: '.app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.scss']
})
export class MediaFormComponent implements OnInit {

  newMediaForm = new FormGroup({
    mediaTitle: new FormControl(''),
    mediaAltText: new FormControl(''),
    mediaUrl: new FormControl(''),
  });

  submitMedia() {
    const newDate = new Date();
    const randomNumber = Math.round(Math.random() * 1000);
    console.log("Random Number", randomNumber);
    const newMedia = {...new Media(), ...this.newMediaForm.value, mediaDate: newDate, mediaUrl: "https://loremflickr.com/640/480/time%20travel?" + randomNumber.toString()};
    this.mediaService.addMedia(newMedia);

    this.newMediaForm.reset();
  }

  // mediaTitle: string = "No Title Set";
  //   mediaAltText: string = "No Text Set";
  //   mediaUrl: string;
  //   mediaDate?: Date = null;
  //   rotation?: number;

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
  }

}
