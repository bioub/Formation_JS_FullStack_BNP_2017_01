'use strict';

import uiRouterModuleName from '/node_modules/angular-ui-router/release/angular-ui-router.js';

class ContactShowCtrl {
    constructor($http, $state) {
        $http.get(`/api/contacts/${$state.params.id}`)
            .then(res => this.contact = res.data);
    }
}

const module = angular.module('contact-show.controller', [
    uiRouterModuleName
]);
module.controller('ContactShowCtrl', ContactShowCtrl);

export default module.name;