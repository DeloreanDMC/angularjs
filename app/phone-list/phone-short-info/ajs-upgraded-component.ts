import { Directive, Input, ElementRef, Injector } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";


@Directive({
    selector: "short-info"
})
export class ShortInfoComponent extends UpgradeComponent {
    @Input() shortInfo: {name:string, snippet: string};

    constructor(elementRef: ElementRef, injector: Injector) {
        super('shortInfo', elementRef, injector);
    }
}