let express = require('express'),
    router = express.Router();

router.route('/create').post((req, res) => {
    return res.json({ "created": req.body });
});

router.route('/').get((req, res) => {
    return res.json({ "users" : [{_id: "123", name: "lewis", email: "lewis@myapp.com"}] });
})

module.exports = router;