/*global appServices, $*/
appServices.factory('dateUtils', function () {
    "use strict";

    var convertDate = function(date) {
        return moment(date).toDate();
    };

    var getActualDate = function() {
        return convertDate(new Date());
    };

    var lastDayOfTheMonth = function(year, month) {
        var date = new Date(year, month-1, 1);
        return moment(date).endOf('month');
    };

    var getDate = function(year, month, day) {
        var date = new Date(year, month-1, day);
        return moment(date);
    };

    return {
        getActualDate: getActualDate,
        convertDate: convertDate,
        lastDayOfTheMonth: lastDayOfTheMonth,
        getDate: getDate
    };
});
