import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'

import {addOne, removeOne} from './controllers/cart'

class App {
  public express;

  constructor () {
    this.express = express();
    this.express.use(cors());
    this.express.use(bodyParser.json({type: '*/*'}));
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/test', (req, res) => {
      res.json({
        message: 'pong'
      });
    });

    router.post('/addOne', addOne);
    router.post('/removeOne', removeOne);

    this.express.use('/', router);
  }
}

export default new App().express;