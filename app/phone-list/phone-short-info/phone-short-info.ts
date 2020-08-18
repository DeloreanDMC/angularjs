import * as angular from "angular";

angular.module("phoneList").component("shortInfo", {
  bindings: {
    shortInfo: "<",
  },
  template: `
    <div class="col-md-5" style="position:fixed; right:0">
        <h1> {{$ctrl.shortInfo.name}} </h1>
        <p> {{$ctrl.shortInfo.snippet}} </p>
    </div>`,
});
