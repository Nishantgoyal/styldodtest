(function(exports) {
    "use strict";
  
    function Calculator(type) {
      this.type = type || "Decimal";
    }
    exports.Calculator = Calculator;
  
    Calculator.prototype = {
      addNumbers: function(x,y) {
        return x + y ; 
      },
      mulNumbers: function(x,y) {
        return x * y ; 
      }
    };

  })(this);