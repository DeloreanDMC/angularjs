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

@NgModule({
  imports: [BrowserModule, UpgradeModule, FormsModule, ReactiveFormsModule],
  providers: [],
  declarations: [ProfileComponent],
  entryComponents: [ProfileComponent],
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
