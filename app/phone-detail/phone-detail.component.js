angular.
    module('phoneDetail').
    component('phoneDetail', {
        templateUrl: 'phone-detail/phone-detail.template.html',
        bindings: { phone: '<' },
        controller: 
            function PhoneDetailController() {
                const self = this;
                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                };
            }
    
});