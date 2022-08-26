import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Angular CLI Template";

  myArray = new BehaviorSubject(["One", "Two", "Three"]);
  myArrayAction = this.myArray.asObservable();
}