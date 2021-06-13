const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET route: gets input values and comment
router.get('/', (req, res) => {
    // Find all orders and return them
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedback', error);
        res.sendStatus(500);  
    });
})

// POST route: adds a new feedback to the feedback list database
// request must be an object with properties feelings, understanding, support, and comments
router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding New Feedback`, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new feedback`, error);
        res.sendStatus(500);
      });
  });

  // DELETE route --> stretch
module.exports = router;