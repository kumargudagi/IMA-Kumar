let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as httpStatusCodes from 'http-status-codes'; //_splitter_
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
import * as sd_fhM4IqVxsdAxIphN from './idsutil'; //_splitter_
//append_imports_end

export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_qpN0MQHvB6oTjmA6(bh);
          //appendnew_next_sd_erR4AYrtZ1Gtw2YM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_erR4AYrtZ1Gtw2YM');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_7ghvN28YKhj7irsz(bh);
          //appendnew_next_sd_zCUlSVwKO9Earpb5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zCUlSVwKO9Earpb5');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_7rV4SADNkoj9MZHN(bh);
          //appendnew_next_sd_69MrTohXcRNvsGmt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_69MrTohXcRNvsGmt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
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
          bh = await this.sd_7WSrDK1Fosye6y2p(bh);
          //appendnew_next_sd_W0N7XG2RnPtKqAp3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_W0N7XG2RnPtKqAp3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
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
          bh = await this.sd_HOIq7cRBQCOmqZH9(bh);
          //appendnew_next_sd_sqfTYruDSvtUiNNP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sqfTYruDSvtUiNNP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
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
          bh = await this.sd_7oyG2WC3IfANx7Gb(bh);
          //appendnew_next_sd_sxalSyKcSL2oOWMb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sxalSyKcSL2oOWMb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
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
          bh = await this.sd_2HyEl1QLEmHcta1E(bh);
          //appendnew_next_sd_UmXTLw4Dv8OkJxOy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_UmXTLw4Dv8OkJxOy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_7rV4SADNkoj9MZHN(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_o6ulbqt3Kn6pGIeY(bh);
      //appendnew_next_sd_7rV4SADNkoj9MZHN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7rV4SADNkoj9MZHN');
    }
  }

  async sd_o6ulbqt3Kn6pGIeY(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_PtTtHljW2R030VEx(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_FTRQcbfcp8QjlDWW(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o6ulbqt3Kn6pGIeY');
    }
  }

  async sd_PtTtHljW2R030VEx(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo
      };
      bh = await this.sd_j8oGptcCy9yo5D3a(bh);
      //appendnew_next_sd_PtTtHljW2R030VEx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PtTtHljW2R030VEx');
    }
  }

  async sd_j8oGptcCy9yo5D3a(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_apBB9Wpna0F3fHxb(bh);
      //appendnew_next_sd_j8oGptcCy9yo5D3a
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_j8oGptcCy9yo5D3a');
    }
  }

  async sd_apBB9Wpna0F3fHxb(bh) {
    try {
      const sd_fhM4IqVxsdAxIphNInstance: sd_fhM4IqVxsdAxIphN.idsutil = sd_fhM4IqVxsdAxIphN.idsutil.getInstance();
      let outputVariables = await sd_fhM4IqVxsdAxIphNInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_R6mDmfoiaBTmOmsc(bh);
      //appendnew_next_sd_apBB9Wpna0F3fHxb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_apBB9Wpna0F3fHxb');
    }
  }

  async sd_R6mDmfoiaBTmOmsc(bh) {
    try {
      const sd_fhM4IqVxsdAxIphNInstance: sd_fhM4IqVxsdAxIphN.idsutil = sd_fhM4IqVxsdAxIphN.idsutil.getInstance();
      let outputVariables = await sd_fhM4IqVxsdAxIphNInstance.getAuthorizationParams(
        null
      );
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_IohkewSLYvjKvrvi(bh);
      //appendnew_next_sd_R6mDmfoiaBTmOmsc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_R6mDmfoiaBTmOmsc');
    }
  }

  async sd_IohkewSLYvjKvrvi(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0]
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest)
      };

      await this.sd_6vlccvXl41Udffre(bh);
      //appendnew_next_sd_IohkewSLYvjKvrvi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IohkewSLYvjKvrvi');
    }
  }

  async sd_6vlccvXl41Udffre(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6vlccvXl41Udffre');
    }
  }

  async sd_FTRQcbfcp8QjlDWW(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again'
      };
      await this.sd_mBy0FcDrBWDh9Wj1(bh);
      //appendnew_next_sd_FTRQcbfcp8QjlDWW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FTRQcbfcp8QjlDWW');
    }
  }

  async sd_mBy0FcDrBWDh9Wj1(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mBy0FcDrBWDh9Wj1');
    }
  }

  async sd_qpN0MQHvB6oTjmA6(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_8e1ahEqtnfjhASuf(bh);
      //appendnew_next_sd_qpN0MQHvB6oTjmA6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qpN0MQHvB6oTjmA6');
    }
  }

  async sd_8e1ahEqtnfjhASuf(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8e1ahEqtnfjhASuf');
    }
  }

  async sd_7WSrDK1Fosye6y2p(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_99eYpCOclQpYSq3q(bh);
      //appendnew_next_sd_7WSrDK1Fosye6y2p
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7WSrDK1Fosye6y2p');
    }
  }

  async sd_99eYpCOclQpYSq3q(bh) {
    try {
      const sd_fhM4IqVxsdAxIphNInstance: sd_fhM4IqVxsdAxIphN.idsutil = sd_fhM4IqVxsdAxIphN.idsutil.getInstance();
      let outputVariables = await sd_fhM4IqVxsdAxIphNInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_buFnssUShXMXI37c(bh);
      //appendnew_next_sd_99eYpCOclQpYSq3q
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_99eYpCOclQpYSq3q');
    }
  }

  async sd_buFnssUShXMXI37c(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token'])
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_NT3PsTCzy30OgJPw(bh);
      //appendnew_next_sd_buFnssUShXMXI37c
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_buFnssUShXMXI37c');
    }
  }

  async sd_NT3PsTCzy30OgJPw(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_rNKtGtYCDQPsdrh9(bh);
      //appendnew_next_sd_NT3PsTCzy30OgJPw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NT3PsTCzy30OgJPw');
    }
  }

  async sd_rNKtGtYCDQPsdrh9(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_8tfPO9F4B3JKDjd5(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_agfltkfPPpW5ZvyN(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rNKtGtYCDQPsdrh9');
    }
  }

  async sd_8tfPO9F4B3JKDjd5(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_ySkU4R8wrr8mhI0m(bh);
      //appendnew_next_sd_8tfPO9F4B3JKDjd5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8tfPO9F4B3JKDjd5');
    }
  }

  async sd_ySkU4R8wrr8mhI0m(bh) {
    try {
      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ySkU4R8wrr8mhI0m');
    }
  }

  async sd_agfltkfPPpW5ZvyN(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo
      };
      await this.sd_40FAwx84c0ygLMtn(bh);
      //appendnew_next_sd_agfltkfPPpW5ZvyN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_agfltkfPPpW5ZvyN');
    }
  }

  async sd_40FAwx84c0ygLMtn(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_40FAwx84c0ygLMtn');
    }
  }

  async sd_HOIq7cRBQCOmqZH9(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_boKwfEf5YIUwpQtY(bh);
      //appendnew_next_sd_HOIq7cRBQCOmqZH9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HOIq7cRBQCOmqZH9');
    }
  }

  async sd_boKwfEf5YIUwpQtY(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_boKwfEf5YIUwpQtY');
    }
  }

  async sd_p2LuGZibQQ9Fm8VR(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_p2LuGZibQQ9Fm8VR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p2LuGZibQQ9Fm8VR');
    }
  }

  async sd_7oyG2WC3IfANx7Gb(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_0yPbiqcX9aKZDrwV(bh);
      //appendnew_next_sd_7oyG2WC3IfANx7Gb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7oyG2WC3IfANx7Gb');
    }
  }

  async sd_0yPbiqcX9aKZDrwV(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_zm3ot1AAiRqQ1eMc(bh);
      //appendnew_next_sd_0yPbiqcX9aKZDrwV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0yPbiqcX9aKZDrwV');
    }
  }

  async sd_zm3ot1AAiRqQ1eMc(bh) {
    try {
      const sd_fhM4IqVxsdAxIphNInstance: sd_fhM4IqVxsdAxIphN.idsutil = sd_fhM4IqVxsdAxIphN.idsutil.getInstance();
      let outputVariables = await sd_fhM4IqVxsdAxIphNInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_ktSofN3tDCjgORPl(bh);
      //appendnew_next_sd_zm3ot1AAiRqQ1eMc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zm3ot1AAiRqQ1eMc');
    }
  }

  async sd_ktSofN3tDCjgORPl(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rnOfB9Di6D6TGKzc(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_YpiI8eVhyfCUkPBp(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ktSofN3tDCjgORPl');
    }
  }

  async sd_rnOfB9Di6D6TGKzc(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id']
              }
            }
          )
        ),
        sessionExists: true
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh);
      //appendnew_next_sd_rnOfB9Di6D6TGKzc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rnOfB9Di6D6TGKzc');
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      await this.sd_b6XRU913cXZ7X6DZ(bh);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dCWCI7Lqpk6tk1KJ');
    }
  }

  async sd_b6XRU913cXZ7X6DZ(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b6XRU913cXZ7X6DZ');
    }
  }

  async sd_YpiI8eVhyfCUkPBp(bh) {
    try {
      bh.local.res = {
        sessionExists: false
      };
      await this.sd_b6XRU913cXZ7X6DZ(bh);
      //appendnew_next_sd_YpiI8eVhyfCUkPBp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YpiI8eVhyfCUkPBp');
    }
  }

  async sd_2HyEl1QLEmHcta1E(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_RePFW4alY76N3ztB(bh);
      //appendnew_next_sd_2HyEl1QLEmHcta1E
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2HyEl1QLEmHcta1E');
    }
  }

  async sd_RePFW4alY76N3ztB(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function() {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function(error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_wq3JzBKm4cjFJBHo(bh);
      //appendnew_next_sd_RePFW4alY76N3ztB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RePFW4alY76N3ztB');
    }
  }

  async sd_wq3JzBKm4cjFJBHo(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_H55jF2nPQNROFVAN(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_InpxrCYO4NiIcKuk(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wq3JzBKm4cjFJBHo');
    }
  }

  async sd_H55jF2nPQNROFVAN(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_yqT4S8YGXsqOwLRN(bh);
      //appendnew_next_sd_H55jF2nPQNROFVAN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H55jF2nPQNROFVAN');
    }
  }

  async sd_yqT4S8YGXsqOwLRN(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yqT4S8YGXsqOwLRN');
    }
  }

  async sd_InpxrCYO4NiIcKuk(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo
      };
      await this.sd_pGyJ0mgAfiIPHQp7(bh);
      //appendnew_next_sd_InpxrCYO4NiIcKuk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_InpxrCYO4NiIcKuk');
    }
  }

  async sd_pGyJ0mgAfiIPHQp7(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pGyJ0mgAfiIPHQp7');
    }
  }

  async sd_7ghvN28YKhj7irsz(bh) {
    try {
      bh.local = {};
      bh = await this.sd_l5TD0uNzW0fXMlqF(bh);
      //appendnew_next_sd_7ghvN28YKhj7irsz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7ghvN28YKhj7irsz');
    }
  }

  async sd_l5TD0uNzW0fXMlqF(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_BGZnOA4mEh6qxyvv(bh);
      //appendnew_next_sd_l5TD0uNzW0fXMlqF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l5TD0uNzW0fXMlqF');
    }
  }

  async sd_BGZnOA4mEh6qxyvv(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_ACkPflXkdCi3uZ97(bh);
      //appendnew_next_sd_BGZnOA4mEh6qxyvv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BGZnOA4mEh6qxyvv');
    }
  }

  async sd_ACkPflXkdCi3uZ97(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_W2WcLwEkEHPMDfcY(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_NoJKVaF0RyQn7UTT(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ACkPflXkdCi3uZ97');
    }
  }

  async sd_W2WcLwEkEHPMDfcY(bh) {
    try {
      const sd_fhM4IqVxsdAxIphNInstance: sd_fhM4IqVxsdAxIphN.idsutil = sd_fhM4IqVxsdAxIphN.idsutil.getInstance();
      let outputVariables = await sd_fhM4IqVxsdAxIphNInstance.handleTokenExpiry(
        bh.local.sessionData,
        null
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_rEvCA8O6gJ3juy5i(bh);
      //appendnew_next_sd_W2WcLwEkEHPMDfcY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W2WcLwEkEHPMDfcY');
    }
  }

  async sd_rEvCA8O6gJ3juy5i(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yZ6ohiRhFAp9Zg8N(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_fSzUnBqMwJkkAzs5(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rEvCA8O6gJ3juy5i');
    }
  }

  async sd_yZ6ohiRhFAp9Zg8N(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function() {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function(error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_fa6NwprKMKk5Ueh2(bh);
      //appendnew_next_sd_yZ6ohiRhFAp9Zg8N
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yZ6ohiRhFAp9Zg8N');
    }
  }

  async sd_fa6NwprKMKk5Ueh2(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked'
      };
      await this.sd_4MBTjKXFmf77bf4x(bh);
      //appendnew_next_sd_fa6NwprKMKk5Ueh2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fa6NwprKMKk5Ueh2');
    }
  }

  async sd_4MBTjKXFmf77bf4x(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4MBTjKXFmf77bf4x');
    }
  }

  async sd_fSzUnBqMwJkkAzs5(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_HeiTQxdqKYgiivTC(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XhxuURl6vYkYas5q(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fSzUnBqMwJkkAzs5');
    }
  }

  async sd_HeiTQxdqKYgiivTC(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_yaAqofnZDEN5S99r(bh);
      //appendnew_next_sd_HeiTQxdqKYgiivTC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HeiTQxdqKYgiivTC');
    }
  }

  async sd_yaAqofnZDEN5S99r(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_XhxuURl6vYkYas5q(bh);
      //appendnew_next_sd_yaAqofnZDEN5S99r
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yaAqofnZDEN5S99r');
    }
  }

  async sd_XhxuURl6vYkYas5q(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XhxuURl6vYkYas5q');
    }
  }

  async sd_NoJKVaF0RyQn7UTT(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7f2ON9cwyurfVRrk(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Nt9jAw0rUNFlQMOR(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NoJKVaF0RyQn7UTT');
    }
  }

  async sd_7f2ON9cwyurfVRrk(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_4MBTjKXFmf77bf4x(bh);
      //appendnew_next_sd_7f2ON9cwyurfVRrk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7f2ON9cwyurfVRrk');
    }
  }

  async sd_Nt9jAw0rUNFlQMOR(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_4MBTjKXFmf77bf4x(bh);
      //appendnew_next_sd_Nt9jAw0rUNFlQMOR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Nt9jAw0rUNFlQMOR');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_DiTtPtp6w27JHFcc(bh)) ||
      (await this.sd_ZfWhCCzuhae67ba4(bh))
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
  async sd_DiTtPtp6w27JHFcc(bh) {
    const nodes = [
      'sd_R6mDmfoiaBTmOmsc',
      'sd_W0N7XG2RnPtKqAp3',
      'sd_99eYpCOclQpYSq3q',
      'sd_buFnssUShXMXI37c',
      'sd_7WSrDK1Fosye6y2p',
      'sd_rNKtGtYCDQPsdrh9',
      'sd_8tfPO9F4B3JKDjd5',
      'sd_agfltkfPPpW5ZvyN',
      'sd_ySkU4R8wrr8mhI0m',
      'sd_40FAwx84c0ygLMtn'
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_p2LuGZibQQ9Fm8VR(bh);
      //appendnew_next_sd_DiTtPtp6w27JHFcc
      return true;
    }
    return false;
  }
  async sd_ZfWhCCzuhae67ba4(bh) {
    const nodes = ['sd_W2WcLwEkEHPMDfcY'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_fa6NwprKMKk5Ueh2(bh);
      //appendnew_next_sd_ZfWhCCzuhae67ba4
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
