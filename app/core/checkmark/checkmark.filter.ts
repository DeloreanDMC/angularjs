import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:"checkmark"
})
export class CheckmarkPipe implements PipeTransform {
  transform(input) {
    return input ? "\u2713" : "\u2718"
  }
}


// angular.module("core").filter("checkmark", function () {
//   return function (input) {
//     return input ? "\u2713" : "\u2718";
//   };
// });
