var Utility;
(function (Utility) {
    /** Export class can be accesable from any files */
    var Useful = (function () {
        function Useful() {
        }
        /** [Function] */
        Useful.prototype.timeTwo = function (n) {
            return n * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
