appDirectives.directive('currencyMask', function () {
    return {
        restrict: 'A',
        require: '^ngModel',
        scope: true,
        link: function (scope, el, attrs, ngModelCtrl) {
            var money = {
                decimals: 2,
                thousandSeparator: ' ',
                decimalSeparator: ','
            };

            function formatter(value) {
                var properValue = value.toString().replace(',', '.');
                value = parseFloat(properValue.replace(/[^0-9,.-]/g, ''));
                var formattedValue = accounting.formatMoney(value, '', money.decimals, money.thousandSeparator, money.decimalSeparator);
                el.val(formattedValue);
                return formattedValue;
            }

            ngModelCtrl.$formatters.push(formatter);

            el.bind('focus', function() {
            });

            el.bind('blur', function() {
                formatter(el.val());
            });
        }
    };
});