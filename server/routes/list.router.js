const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
router.use(express.urlencoded({ extended: true }));
// TODO - Add routes here...


//GET: Gettting all the groceries from the database
router.get('/', (req, res) => {
    // get ordered by ascending items
    const sqlText = `SELECT * FROM groceries ORDER BY item ASC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got groceries back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


// POST: posting for adding a new item to the database
router.post('/', (req, res) => {
    const grocery = req.body;
    console.log(`this is req body contents! ${req.body}`);
    const sqlText = `INSERT INTO groceries ("item", "quantity", "unit")
                     VALUES ($1, $2, $3)`;
    pool.query(sqlText, [grocery.item, grocery.quantity, grocery.unit])
        .then((result) => {
            console.log(`Added some grocery data to the database`, grocery);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})









module.exports = router;