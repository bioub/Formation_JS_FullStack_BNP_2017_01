'use strict';

import angular from 'angular';
import uiRouterModuleName from '/node_modules/angular-ui-router/release/angular-ui-router.js';
import contactListCtrlModuleName from './contact-list/contact-list.controller';
import contactAddCtrlModuleName from './contact-add/contact-add.controller';
import contactShowCtrlModuleName from './contact-show/contact-show.controller';

const module = angular.module('app.module', [
    uiRouterModuleName,
    contactListCtrlModuleName,
    contactAddCtrlModuleName,
    contactShowCtrlModuleName
]);

module.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider.state('contact-list', {
        url: '/',
        templateUrl: 'app/contact-list/contact-list.template.html',
        controller: 'ContactListCtrl',
        controllerAs: '$ctrl'
    });

    $stateProvider.state('contact-add', {
        url: '/ajouter',
        templateUrl: 'app/contact-add/contact-add.template.html',
        controller: 'ContactAddCtrl',
        controllerAs: '$ctrl'
    });

    // Exercice Angular :
    // 1 - Créer le template app/contact-show/contact-show.template.html avec du HTML fictif
    // 2 - Créer le controller ContactShowCtrl qui recevera $stateParams et $http
    // l'id du contact est accessible via $stateParams.id
    // 3 - Créer la requête AJAX qui retrouve le détail du contact et qui le transmet au template
    // ($ctrl.contact par exemple)
    // 4 - Enregister le controller dans app.module
    // 5 - Faire le lien dans app/contact-list/contact-list.template.html
    // <a ui-sref="contact-show({id: contact._id})">Afficher</a>
    // 6 - Remplacer le HTML Fictif avec des ng-bind ou {{}}, ng-if... 
    $stateProvider.state('contact-show', {
        url: '/contacts/:id',
        templateUrl: 'app/contact-show/contact-show.template.html',
        controller: 'ContactShowCtrl',
        controllerAs: '$ctrl'
    });

}]);