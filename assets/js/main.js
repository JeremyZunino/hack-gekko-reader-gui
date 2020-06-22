var app = new Vue({
    el: '#app',
    data: {
        converterDec  : 0,
        converterHex  : 0,
        converterBin  : 0,
        converterSaved: [],
    },

    watch: {
        converterDec: function(v) {
            this.converterHex = this.decToHex(v);
            this.converterBin = this.decToBin(v);
        },

        converterHex: function(v) {
            this.converterDec = this.hexToDec(v);
            this.converterBin = this.hexToBin(v);
        },

        converterBin: function(v) {
            this.converterDec = this.binToDec(v);
            this.converterHex = this.binToHex(v);
        }
    },

    methods: {

        converterSave: function() {
            this.converterSaved.push({
                dec: this.converterDec,
                hex: this.converterHex,
                bin: this.binFormat( this.converterBin ),
            });
        },

        binFormat: function(v) {
            v = v.replace(/ /, "");
            if( v.length % 4 !== 0 ) {
                v = "0".repeat( 4 - v.length % 4 ) + v;
            }

            let rst = "";
            for( let i = 0 ; i<v.length ; i+=4 ) {
                rst += v.substr(i, 4) + " ";
            }

            return rst.trim();
        },

        decToBin: function(v) {
            return Number(v).toString(2);
        },

        decToHex: function(v) {
            return Number(v).toString(16);
        },

        hexToDec: function(v) {
            return parseInt(v, 16);
        },

        hexToBin: function(v) {
            return parseInt(v, 16).toString(2);
        },

        binToDec: function(v) {
            return parseInt(v, 2);
        },

        binToHex: function(v) {
            return parseInt(v, 2).toString(16);
        },

    }
});