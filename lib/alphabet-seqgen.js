var AlphabetSeqGen =  {
    currVal: 0,
    next: function() {
        this.currVal = this.currVal + 1;
        return this.toAlphabet(this.currVal);
    },
    startAt: function(startVal) {
    	this.currVal=startVal;
    },
    toAlphabet(num) {
        var mod = num % 26,
            pow = num / 26 | 0,
            out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
        return pow ? this.toAlphabet(pow) + out : out;
    },
        
};

module.exports = AlphabetSeqGen;
