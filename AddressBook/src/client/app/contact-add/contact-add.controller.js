'use strict';

class ContactAddCtrl {
    constructor($http, $state) {
        this.$http = $http;
        this.$state = $state;
    }
    ajouter() {
        this.$http.post('/api/contacts', this.contact)
            .then(res => {
                this.$state.go('contact-list');
            });
    }
}

const module = angular.module('contact-add.controller', []);
module.controller('ContactAddCtrl', ContactAddCtrl);

export default module.name;