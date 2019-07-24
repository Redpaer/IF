let express = require('express');

let app = express();

var Alex = {
    1: " 1921-1989 , жил с Алешей и не тужил",
    2:"1703-1789,  умер",
    3:"1703-1739,  умер",
    4:"1703-1759,  умер",
    }

app.get('/api/list/:id', (req,res) =>{
    console.log (req.params)
    res.end(Alex[req.params.id]);
});



app.listen(8888);
console.log('GG');