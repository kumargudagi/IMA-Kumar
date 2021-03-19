let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class incidentservices {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'incidentservices';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new incidentservices(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_incidentservices_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: incidentservices');

    //appendnew_flow_incidentservices_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: incidentservices');

    if (!this.swaggerDocument['paths']['/incident']) {
      this.swaggerDocument['paths']['/incident'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/incident']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/incident`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_GETzWDBsfRy21GSi(bh);
          //appendnew_next_sd_wKvM9Afy6EP9xEon
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wKvM9Afy6EP9xEon');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/incident']) {
      this.swaggerDocument['paths']['/incident'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/incident']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/incident`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_z1Hjkb2Xd99e3itH(bh);
          //appendnew_next_sd_B7wZWJbhfXhCosGG
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_B7wZWJbhfXhCosGG');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/incident/{id}']) {
      this.swaggerDocument['paths']['/incident/{id}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/incident/{id}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/incident/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_0PYJvylFYpqcTHdn(bh);
          //appendnew_next_sd_7CCXQCLEO363Mtfr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7CCXQCLEO363Mtfr');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/incident/{id}']) {
      this.swaggerDocument['paths']['/incident/{id}'] = {
        delete: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/incident/{id}']['delete'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['delete'](
      `${this.serviceBasePath}/incident/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_Ec8YRwh8o7QkKkg8(bh);
          //appendnew_next_sd_H1Chrh2kUGYm8rvh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_H1Chrh2kUGYm8rvh');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/userincident']) {
      this.swaggerDocument['paths']['/userincident'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/userincident']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/userincident`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_owxmxnyxlZBb7ogo(bh);
          //appendnew_next_sd_1N3xl9FIVk1nbC7q
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1N3xl9FIVk1nbC7q');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/priorityincident']) {
      this.swaggerDocument['paths']['/priorityincident'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/priorityincident']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/priorityincident`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_qO4vBljoroCk5CZA(bh);
          //appendnew_next_sd_2caXk7XBzHO5Bkke
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2caXk7XBzHO5Bkke');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_incidentservices_HttpIn
  }
  //   service flows_incidentservices

  //appendnew_flow_incidentservices_start

  async sd_GETzWDBsfRy21GSi(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_9VADWofZ1fADDhtS',
        'incident',
        bh.input.body,
        {}
      );
      await this.sd_T9quUcK1Lh5RdMmH(bh);
      //appendnew_next_sd_GETzWDBsfRy21GSi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GETzWDBsfRy21GSi');
    }
  }

  async sd_T9quUcK1Lh5RdMmH(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T9quUcK1Lh5RdMmH');
    }
  }

  async sd_iujweyH8cJG6N3Fb(bh) {
    try {
      console.log('eee', bh.error);
      await this.sd_kQbQYWnDtV6Z6iwD(bh);
      //appendnew_next_sd_iujweyH8cJG6N3Fb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iujweyH8cJG6N3Fb');
    }
  }

  async sd_kQbQYWnDtV6Z6iwD(bh) {
    try {
      bh.web.res.status(500).send(bh.error.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kQbQYWnDtV6Z6iwD');
    }
  }

  async sd_z1Hjkb2Xd99e3itH(bh) {
    try {
      bh.local.query = {};
      bh.local.sort = { incident_date: 1 };
      bh = await this.sd_Y3M4DwOPM2kXLd49(bh);
      //appendnew_next_sd_z1Hjkb2Xd99e3itH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z1Hjkb2Xd99e3itH');
    }
  }

  async sd_Y3M4DwOPM2kXLd49(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_9VADWofZ1fADDhtS',
        'incident',
        bh.input.query,
        bh.local.sort
      );
      await this.sd_n5tVovctj4pd2c2i(bh);
      //appendnew_next_sd_Y3M4DwOPM2kXLd49
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Y3M4DwOPM2kXLd49');
    }
  }

  async sd_n5tVovctj4pd2c2i(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n5tVovctj4pd2c2i');
    }
  }

  async sd_0PYJvylFYpqcTHdn(bh) {
    try {
      const ObjectID = require('mongodb').ObjectID;

      bh.local.filter = { _id: new ObjectID(bh.input.params.id) };
      bh.input.body = { $set: bh.input.body };
      bh.local.options = {
        new: true,
        // upsert: true,
      };
      console.log('bh.local.filter', bh.local.filter);

      console.log('bh.input.body', bh.input.body);
      bh = await this.sd_vDTAlY74FHB2Col0(bh);
      //appendnew_next_sd_0PYJvylFYpqcTHdn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0PYJvylFYpqcTHdn');
    }
  }

  async sd_vDTAlY74FHB2Col0(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_9VADWofZ1fADDhtS',
        'incident',
        bh.local.filter,
        bh.input.body,
        bh.local.options
      );
      await this.sd_uTzcJsC5oEAhSDZD(bh);
      //appendnew_next_sd_vDTAlY74FHB2Col0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vDTAlY74FHB2Col0');
    }
  }

  async sd_uTzcJsC5oEAhSDZD(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uTzcJsC5oEAhSDZD');
    }
  }

  async sd_Ec8YRwh8o7QkKkg8(bh) {
    try {
      const ObjectID = require('mongodb').ObjectID;

      bh.local.filter = { _id: new ObjectID(bh.input.params.id) };

      bh = await this.sd_wvIIcdAmw85CydNm(bh);
      //appendnew_next_sd_Ec8YRwh8o7QkKkg8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ec8YRwh8o7QkKkg8');
    }
  }

  async sd_wvIIcdAmw85CydNm(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_9VADWofZ1fADDhtS',
        'incident',
        bh.local.filter,
        bh.local.options
      );
      await this.sd_j7VEDqNr7TVz9KGv(bh);
      //appendnew_next_sd_wvIIcdAmw85CydNm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wvIIcdAmw85CydNm');
    }
  }

  async sd_j7VEDqNr7TVz9KGv(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_j7VEDqNr7TVz9KGv');
    }
  }

  async sd_owxmxnyxlZBb7ogo(bh) {
    try {
      bh.local.query = [
        {
          $group: {
            _id: '$username',
            count: { $sum: 1 },
          },
        },
      ];

      //  db.incident.aggregate([{"$group": { _id: "$priority", count:{$sum:1} } }])
      bh = await this.sd_fHRYzDTXjKWIgm6m(bh);
      //appendnew_next_sd_owxmxnyxlZBb7ogo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_owxmxnyxlZBb7ogo');
    }
  }

  async sd_fHRYzDTXjKWIgm6m(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().aggregate(
        'sd_9VADWofZ1fADDhtS',
        'incident',
        bh.local.query,
        bh.local.options
      );
      await this.sd_cBlhO5izrmBZNDuO(bh);
      //appendnew_next_sd_fHRYzDTXjKWIgm6m
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fHRYzDTXjKWIgm6m');
    }
  }

  async sd_cBlhO5izrmBZNDuO(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cBlhO5izrmBZNDuO');
    }
  }

  async sd_qO4vBljoroCk5CZA(bh) {
    try {
      bh.local.query = [
        {
          $group: {
            _id: '$priority',
            count: { $sum: 1 },
          },
        },
      ];

      //  db.incident.aggregate([{"$group": { _id: "$priority", count:{$sum:1} } }])
      bh = await this.sd_jEKCirzkt2t1saVg(bh);
      //appendnew_next_sd_qO4vBljoroCk5CZA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qO4vBljoroCk5CZA');
    }
  }

  async sd_jEKCirzkt2t1saVg(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().aggregate(
        'sd_9VADWofZ1fADDhtS',
        'incident',
        bh.local.query,
        bh.local.options
      );
      await this.sd_7A08w31rrko8bFLd(bh);
      //appendnew_next_sd_jEKCirzkt2t1saVg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jEKCirzkt2t1saVg');
    }
  }

  async sd_7A08w31rrko8bFLd(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7A08w31rrko8bFLd');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.catchBolck(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async catchBolck(bh) {
    const catchConnectedNodes = ['sd_iujweyH8cJG6N3Fb', 'sd_kQbQYWnDtV6Z6iwD'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_iujweyH8cJG6N3Fb(bh);
    //appendnew_next_catchBolck
    return true;
  }
  //appendnew_flow_incidentservices_Catch
}
