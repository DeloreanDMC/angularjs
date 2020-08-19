import * as angular from "angular";
import { Component, Input} from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

@Component({
  selector: "phone-detail",
  templateUrl: "phone-detail/phone-detail.template.html"
})
export class PhoneDetailComponent {
  @Input() phone: any;
  public mainImageUrl;
  
  public setImage(imageUrl) {
    console.log(imageUrl);
    this.mainImageUrl = imageUrl;
  }
}

angular
  .module("phoneDetail")
  .directive("phoneDetail", downgradeComponent({component:PhoneDetailComponent, inputs: ['phone'],}));
