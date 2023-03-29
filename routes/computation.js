var express = require('express');
var router = express.Router();

let x;
let y;

router.get('/', function(req, res,next) {
    if(req.query.x==undefined){
        x=Math.floor(Math.random()*10);

        let y1=Math.atan(x);
        let y2=Math.exp(x);
        let y3=Math.expm1(x);

        res.send(`Math.atan() applied to `+x+` is ` +y1+ "<br>" + `Math.exp() applied to `+x+` is ` +y2+ "<br>" + `Math.expm1() applied to `+x+` is ` +y3+ "<br>")
    }

    else{

        x=req.query.x;

        let y1=Math.atan(x);
        let y2=Math.exp(y);
        let y3=Math.expm1(x);

        res.send(`Math.atan() applied to `+x+` is ` +y1+ "<br>" + `Math.exp() applied to `+x+` is ` +y2+ "<br>" + `Math.expm1() applied to `+x+` is ` +y3+ "<br>")
    }
    }
    );

    module.exports = router;