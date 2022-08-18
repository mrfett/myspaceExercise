import { newArray } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, from, of, Subject } from "rxjs";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-test-component",
  templateUrl: "./test-component.component.html",
  styleUrls: ["./test-component.component.scss"],
})
export class TestComponent implements OnInit {
  numArray = [
    { num: 1, name: "" },
    { num: 2, name: "" },
    { num: 3, name: "" },
    { num: 4, name: "" },
    { num: 5, name: "" },
    { num: 6, name: "" },
  ];
  numSubject = new BehaviorSubject(this.numArray);
  numAction$ = this.numSubject.asObservable().pipe(
    map((numArray) => {
      return numArray.map((obj) => {
        let newObj = { ...obj };
        if (newObj.hasOwnProperty("other")) {
          return obj;
        } else {
          return {
            ...obj,
            name: "test",
            other: "Other " + Math.floor(Math.random() * 10).toString(),
          };
        }
      });
    })
  );

  // constructor() {}

  addNum = () => {
    const newNum = { num: Math.floor(Math.random() * 10), name: "" };
    console.log("Random Number", newNum);
    const currentValues = this.numSubject.getValue();
    const newArray = [...currentValues, newNum];
    console.log("New Array", newArray);
    this.numSubject.next(newArray);
  };

  ngOnInit(): void {}
}