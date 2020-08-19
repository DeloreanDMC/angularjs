import { InjectionToken } from "@angular/core";

export const Timeout = new InjectionToken("Timeout");

export function TimeoutServiceFactory(i: any) {
    return i.get('$timeout');
}

export const TimeoutProvider = {
    provide:Timeout,
    useFactory: TimeoutServiceFactory,
    deps: ['$injector']
}