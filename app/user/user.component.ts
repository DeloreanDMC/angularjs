import * as angular from "angular";
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { downgradeComponent } from "@angular/upgrade/static";

@Component({
  selector: "profile",
  templateUrl: "user/user.template.html",
})
export class ProfileComponent {
  public myform: FormGroup;
  public hello: string;
  constructor() {
    this.hello = "Hello Angular";
    this.myform = new FormGroup({
      name: new FormControl("Jhon"),
      age: new FormControl(35),
    });
  }
  output() {
    console.log(this.myform);
  }
}

angular
  .module("compileExample")
  .directive("profile", downgradeComponent({ component: ProfileComponent }));

// const profileComponent = {
//   selector: "profileComponent",
//   template: `
//       <div>
//         <input ng-model="$ctrl.name"><br/>
//         <input ng-model="$ctrl.age"><br/>
//         <div>Name:{{$ctrl.name}}</div>
//         <div>Age:{{$ctrl.age}}</div>
//       </div>`,
//   controller: class ProfileComponent {
//     public name: string;
//     public age: number;
//     constructor() {
//       this.name = "John";
//       this.age = 35;
//     }
//   },
// };
