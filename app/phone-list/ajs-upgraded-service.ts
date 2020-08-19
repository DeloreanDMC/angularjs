import { InjectionToken } from "@angular/core";

// Calculate ***********************************************
export const Calculate = new InjectionToken("Calculate");

export function calculateServiceFactory(i: any) {
    return i.get('calculate');
}

export const CalculateProvider = {
    provide:Calculate,
    useFactory: calculateServiceFactory,
    deps: ['$injector']
}

// PhoneDialog ***********************************************
export const PhoneDialog = new InjectionToken("PhoneDialog");

export function phoneDialogFactory(i: any) {
    return i.get('PhoneDialog');
}

export const PhoneDialogProvider = {
    provide: PhoneDialog,
    useFactory: phoneDialogFactory,
    deps: ["$injector"]
}