const express = require('express');
const router = express.Router();
const fetchDatabaseData = require('../db.js');

router.post('/foodData', async (req, res) => {
    try {
        const { SampleData, FoodCategoryData } = await fetchDatabaseData();
        res.send({ SampleData, FoodCategoryData });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
