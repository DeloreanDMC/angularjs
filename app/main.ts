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

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ProfileComponent } from "./user/user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";
import { CheckmarkPipe } from "./core/checkmark/checkmark.filter";
import { TimeoutProvider } from "./ajs-upgraded-providers";
import { ShortInfoComponent } from "./phone-list/phone-short-info/ajs-upgraded-component";
import { PhoneDialogProvider, CalculateProvider } from "./phone-list/ajs-upgraded-service";
import { PhoneListComponent } from "./phone-list/phone-list.component";

@NgModule({
  imports: [BrowserModule, UpgradeModule, FormsModule, ReactiveFormsModule],
  providers: [TimeoutProvider, PhoneDialogProvider, CalculateProvider],
  declarations: [ProfileComponent, PhoneDetailComponent, CheckmarkPipe, ShortInfoComponent, PhoneListComponent],
  entryComponents: [ProfileComponent, PhoneDetailComponent, PhoneListComponent],
})
export class AppModule {
  ngDoBootstrap() {}
}

// Запускаем, используя Upgrade
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    console.log("Работают Angular & AngularJS");
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ["phonecatApp"]);
  });
