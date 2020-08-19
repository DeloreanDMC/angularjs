import "angular";
import "angular-ui-router";
import "angular-animate";
import "angular-resource";
import "angular-route";
import "angular-messages";
import "ng-dialog";

import "./app.module";
import "./app.config";
import "./app.animations";
import "./core";
import "./user";
import "./phone-dialog";
import "./phone-list";
import "./phone-detail";

import "./polyfills";

import { NgModule, NgZone, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ProfileComponent } from "./user/user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";
import { CheckmarkPipe } from "./core/checkmark/checkmark.filter";
import { TimeoutProvider } from "./ajs-upgraded-providers";
import { ShortInfoComponent, Wrapper } from "./phone-list/phone-short-info/ajs-upgraded-component";
import { PhoneDialogProvider, CalculateProvider } from "./phone-list/ajs-upgraded-service";
import { PhoneListComponent } from "./phone-list/phone-list.component";
import { UIRouterUpgradeModule } from "@uirouter/angular-hybrid";
import { jsmodule } from './app.module';
import { UrlService, UIRouter } from "@uirouter/core";
import { visualizer } from '@uirouter/visualizer';
import { Ng2StateDeclaration } from "@uirouter/angular";


resolvePhones.$inject = ['Phone'];
export function resolvePhones(Phone) {
  return Phone.query().$promise;
}

// New UI-Router states
const phonesState: Ng2StateDeclaration = {
  name: "phones",
  url: "/phones",
  component: PhoneListComponent,
  resolve: {
    phones: resolvePhones
  }
};


resolveDetails.$inject = ['Phone','$transition$'];
export function resolveDetails(Phone,$transition$) {
  return Phone.get({phoneId:$transition$.params().phoneId });
}

const phoneDetailState: Ng2StateDeclaration = {
  name: "details",
  url: '/phones/:phoneId',
  resolve: {
    phone: resolveDetails
  },
  component: PhoneDetailComponent
};


resolveShortInfo.$inject = ['phones','$stateParams'];
function resolveShortInfo(phones, $stateParams) {
  return phones.find((el) => el.id === $stateParams.phoneId);
}



const shortInfo: Ng2StateDeclaration = {
  name: "phones.phoneDetail",
  url: "/:phoneId",
  component: Wrapper,
  resolve: {
    shortInfo: resolveShortInfo
  },
};

// const phoneDetailState =
// {
//   name: "phoneDetail",
//   url: "/phones/{phoneId}",
//   template:"<phone-detail [phone]='phone_' ></phone-detail>",
//   controller: [
//   "$scope",  
//   "Phone",
//   "$transition$", function ($scope,Phone, $transition$) {
//     $scope.phone_ = Phone.get({ phoneId: $transition$.params().phoneId });
//   }]
// };

@NgModule({
  imports: [
    BrowserModule, 
    UpgradeModule, 
    FormsModule, 
    ReactiveFormsModule,
    UIRouterUpgradeModule.forRoot({states:[phonesState, phoneDetailState, shortInfo]})
  ],
  providers: [
    TimeoutProvider, 
    PhoneDialogProvider, 
    CalculateProvider],
  declarations: [
    ProfileComponent, 
    PhoneDetailComponent, 
    CheckmarkPipe,
    ShortInfoComponent,
    Wrapper,
    PhoneListComponent],
  entryComponents: [ProfileComponent, PhoneDetailComponent, PhoneListComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [jsmodule.name]);
  }
}

// Отложить начальную синхронизацию URL-адресов (до завершения всей начальной загрузки)
jsmodule.config([ '$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept() ]);

// Запускаем, используя Upgrade
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    console.log("Работают Angular & AngularJS");

    // Initialize the Angular Module
    // get() the UIRouter instance from DI to initialize the router
    const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

    // Instruct UIRouter to listen to URL changes
    function startUIRouter() {
      urlService.listen();
      urlService.sync();
    }

    platformRef.injector.get(NgZone).run(startUIRouter);
  });


  //Show ui-router-visualizer
jsmodule.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);