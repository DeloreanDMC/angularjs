import * as angular from "angular";

const phoneDetailComponent = {
  selector: "phoneDetail",
  templateUrl: "phone-detail/phone-detail.template.html",
  bindings: { phone: "<" },
  controller: class PhoneDetailController {
    public mainImageUrl;
    setImage(imageUrl) {
      this.mainImageUrl = imageUrl;
    }
  },
};

angular
  .module("phoneDetail")
  .component(phoneDetailComponent.selector, phoneDetailComponent);
