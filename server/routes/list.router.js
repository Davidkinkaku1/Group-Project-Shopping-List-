const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

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
    const sqlText = `INSERT INTO groceries ("item", "quantity", "unit")
                     VALUES ($1, $2, $3)`;
    pool.query(sqlText, [grocery.item, grocery.quantity, grocery.unit])
        .then((result) => {
            console.log(`Added some grocery data to the database`, guest);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

router.put('/:groceriesid', (req, res) => {
    // set the re.params to a variable
    let groceriesid = req.params.groceriesid;
    console.log(`Checking out groceries with id ${groceriesid}`);
    // toggel the true or false value
    const queryText = `UPDATE "groceries" 
    SET "purchased" = NOT "purchased"
    WHERE id=$1;`;
    pool.query(queryText, [groceriesid])
        .then(() => {
            res.sendStatus(200); // successful update
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
})

//Delete item from groceries
router.delete('/deleteAll', (req, res) => {
    console.log(`Deleting groceries`);
    const queryText = `DELETE FROM "groceries";`;
    pool.query(queryText)
    .then(() => {
        res.sendStatus(204); // successful delete
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
 });


module.exports = router;