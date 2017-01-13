'use strict';

class ContactListCtrl {
    constructor($http) {
        this.$http = $http;

        $http.get('/api/contacts')
            .then(res => {
                this.contacts = res.data
            });
    }
    supprimer(i) {
        var contact = this.contacts[i];

        this.$http.delete(`/api/contacts/${contact._id}`)
            .then(res => {
                this.contacts.splice(i, 1);
            })
    }
}

const module = angular.module('contact-list.controller', []);
module.controller('ContactListCtrl', ContactListCtrl);

export default module.name;