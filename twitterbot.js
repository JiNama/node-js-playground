var Twit = require('Twit');

var T = new Twit({
    consumer_key:           'DENHWjTlPX2qdkEq7TxaFLlRy',
    consumer_secret:        'SHimL7WoZIS51BTi9CGcU6aP6SxyByLLzZNi3drhWSLqvpvIIY',
    access_token:           '303269837-vhlQ0w2ajfq9SMDL2R7z4QLN9rRXmTibK1UB37Ob',
    access_token_secret:    'k1rMngYsp0vyegKERjTXGwvs68SkhDc0ueNG78SlFDAqr',
});

function Tweet(){

    var rand = Math.floor(Math.random()*100);

    T.post('statuses/update', { status: rand }, function(err, data, response){
        if (err){
            console.log("There was an error.");
        }else{
            console.log("It worked!");
        }
    });

}

Tweet();