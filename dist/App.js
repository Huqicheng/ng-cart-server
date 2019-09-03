"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cart_1 = require("./controllers/cart");
class App {
    constructor() {
        this.express = express();
        this.express.use(cors());
        this.express.use(bodyParser.json({ type: '*/*' }));
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/test', (req, res) => {
            res.json({
                message: 'pong'
            });
        });
        router.post('/addOne', cart_1.addOne);
        router.post('/removeOne', cart_1.removeOne);
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map