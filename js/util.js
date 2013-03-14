ko.numericObservable = function (initialValue) {
    var _actual = ko.observable(initialValue);

    var result = ko.dependentObservable({
        read:function () {
            return _actual();
        },
        write:function (newValue) {
            var parsedValue = parseFloat(newValue);
            _actual(isNaN(parsedValue) ? newValue : parsedValue);
        }
    });

    return result;
};

function intersect(a, b) {
    a = a.sort()
    b = b.sort()
    var ai = 0, bi = 0;
    var result = new Array();

    while (ai < a.length && bi < b.length) {
        if (a[ai] < b[bi]) {
            ai++;
        }
        else if (a[ai] > b[bi]) {
            bi++;
        }
        else /* they're equal */
        {
            result.push(a[ai]);
            ai++;
            bi++;
        }
    }
    return result;
}

function sum(arr, accessor) {
    var total = 0;
    if (accessor == undefined) {
        accessor = function (v) {
            if (v != undefined) {
                return v;
            } else return 0;
        };
    }
    for (i in arr) {
        var val = accessor(arr[i])
        total += val
    }
    return total;
}

function getVal(val) {
    if (val().value() != undefined)
        return Math.abs(val().value());
    else
        return 0;
}
