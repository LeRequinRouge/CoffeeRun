(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var PAYMENT_SELECTOR = '[payment-title-name="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var truck = new Truck('ncc-1701', new DataStore());
    window.truck = truck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    var formHandler = new FormHandler(FORM_SELECTOR);
    var paymentHandler = new FormHandler(PAYMENT_SELECTOR);

    paymentHandler.addSubmitHandler(function(data) {
        // I DON'T KNOW WHAT TO PUT HERE!!!
        // THE CODE IS BREAKING.
    });

    formHandler.addSubmitHandler(function(data) { 
        truck.createOrder.call(truck, data);
        checkList.addRow.call(checkList, data);
    });
    console.log(formHandler);
})(window);
