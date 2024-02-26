var express = require('express');
var router = express.Router();

/* GET facts */
router.get('/fact', async function(req, res) {
    const fact = await fetch('https://catfact.ninja/fact')
    .then(res => res.json());
    res.render('cat/fact', { catFact: fact.fact });

});

module.exports = router;
