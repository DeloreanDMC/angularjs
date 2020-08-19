import * as angular from "angular";
import { Component, Input, Inject, OnInit} from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";
import { PhoneDialog, Calculate } from "./ajs-upgraded-service"; 
import { Timeout } from "../ajs-upgraded-providers";
// downgrade
@Component({
  selector: "phone-list",
  templateUrl: "phone-list/phone-list.template.html"
})
export class PhoneListComponent implements OnInit {
  @Input("phones") phonesPromise;
  @Input() orderProp;
  
  public phones:any[];

  private worker:any;
  public openDialog:Function;
  public query:string;

  constructor(
    @Inject(PhoneDialog) public phoneDialog, 
    @Inject(Calculate) private calculate, 
    @Inject(Timeout) private $timeout) {
    this.openDialog = phoneDialog(this);
  }
  
  ngOnInit(): void {
    this.phonesPromise.then(data=>{
      this.phones = data;
      this.worker = this.calculate(data);
    })
    
  }

  asyncPhonesSetter = (data) => {
    this.$timeout(() => {
      this.phones.length = 0;
      for (let i = 0; i < data.length; ++i) {
        this.phones[i] = data[i];
      }
      this.phones.length = data.length;
     
    });
  }

  orderPropHandler() {
    this.worker.sort(this.orderProp).then(this.asyncPhonesSetter);
  };

  queryHandler() {
    this.worker.filter(this.query).then(this.asyncPhonesSetter);
  };
}

angular.module("phoneList").directive("phoneList", downgradeComponent({component:PhoneListComponent, inputs:["phones","orderProp"]}));
// Register `phoneList` component, along with its associated controller and template
// angular.module("phoneList").component("phoneList", {
//   bindings: {
//     phones: "<",
//     orderProp: "<",
//   },
//   templateUrl: "phone-list/phone-list.template.html",
//   controller: [
//     "PhoneDialog",
//     "calculate",
//     "$timeout",
//     function (PhoneDialog, calculate, $timeout) {
//       const self = this;

//       function asyncPhonesSetter(data) {
//         $timeout(function setPhones() {
//           self.phones.length = 0;
//           for (let i = 0; i < data.length; ++i) {
//             self.phones[i] = data[i];
//           }
//         });
//       }

//       self.openDialog = PhoneDialog(self);

//       self.$onInit = function () {
//         self.$worker = calculate(self.phones);
//       };

//       self.orderPropHandler = function () {
//         self.$worker.sort(self.orderProp).then(asyncPhonesSetter);
//       };

//       self.queryHandler = function () {
//         self.$worker.filter(self.query).then(asyncPhonesSetter);
//       };
//     },
//   ],
// });


