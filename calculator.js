/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 var calculatorModule = function ( ) {
        var memory = 0;
        var total = 0;
        var validate = function ( x ) {
                if ( typeof x !== 'number' ) {
                        throw error;

                }

        }
        var calculatorObject = {

                load: function ( x ) {
                        validate ( x );
                        total = x;
                        return total;

                },

                getTotal: function ( ) {
                        return total;

                },
                add: function ( x ) {
                        validate ( x );
                        total += x;
                        return total;

                },
                subtract: function ( x ) {
                        validate ( x );
                        total -= x;
                        return total;

                },
                multiply: function ( x ) {
                        validate ( x );
                        total *= x;
                        return total;

                },
                divide: function ( x ) {
                        validate ( x );
                        total /= x;
                        return total;

                },
                recallMemory: function ( ) {
                        return memory;

                },
                saveMemory: function ( ) {
                        memory = total;
                        return memory;

                },
                clearMemory: function ( ) {
                        memory = 0;
                        return memory;

                },



        }
        return calculatorObject;

 }
 
 /**    ✔️  load
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */



  /**   ✔️ getTotal
   * Return the value of `total`
   * @return { Number }
   */


  /**   ✔️ add
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**   ✔️ subtract
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**   ✔️ multiply
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**   ✔️ divide
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**   ✔️ recallMemory
   * Return the value stored at `memory`
   * @return { Number }
   */


  /** ✔️ saveMemory
   * Stores the value of `total` to `memory`
   */


  /** ✔️ clearMemory
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */