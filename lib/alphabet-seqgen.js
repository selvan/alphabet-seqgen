'use strict'
let excludes = {};
let AlphabetSeqGen =  {
    currVal: 0,
    next: function() {
        let aVal;
        let generateFlag = true;
        while(generateFlag) {
            this.currVal = this.currVal + 1;
            aVal = this.toAlphabet(this.currVal);
            generateFlag = excludes.hasOwnProperty(aVal);
        }
        return aVal;
    },
    startAt: function(startVal) {
    	this.currVal=startVal;
    },
    toAlphabet(num) {
        let mod = num % 26,
            pow = num / 26 | 0,
            out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
        return pow ? this.toAlphabet(pow) + out : out;
    },
    exclude(val) {
        excludes[val] = val;
    }, 
};

module.exports = AlphabetSeqGen;
