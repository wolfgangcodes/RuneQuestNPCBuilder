ko.bindingHandlers.jqPlus = {
    init: function(element) {
        $(element).button(); // Turns the element into a jQuery UI button
    },
    update: function(element, valueAccessor) {
        console.log(element, valueAccessor())
    }
};