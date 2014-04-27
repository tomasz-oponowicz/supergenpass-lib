var supergenpass = require('../supergenpass');

exports.testSimple = function(test){
    var data = [
        ['w9UbG0NEk7', 'test', 'example.com'],
        ['sJfoZg3nU8', 'test', 'example.com', { method: 'sha512' }],
        ['aC81', 'test', 'example.com', { length: 4, method: 'sha512' }],
        ['zPQSNhTzs9fS', 'test', 'https://www.google.com/', { length: 12, salt: 'test' }],
        ['q8ZWYccWDt', 'test', 'https://www.google.com/', { disableTLD: true, method: 'sha512' }],
        ['aRFG84Gim9', 'test', 'example.co.uk'],
        ['hSF8nTst4A', 'test', 'example.gov.ac']
    ];

    data.forEach(function(c){
        test.equal(supergenpass(c[1], c[2], c[3]), c[0]);
    });

    test.done();
};
