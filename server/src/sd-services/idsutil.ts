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
//append_imports_end

export class idsutil {
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
    this.serviceName = 'idsutil';
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
      instance = new idsutil(
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
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(clientInstance = null, ...others) {
    try {
      var bh = {
        input: {
          clientInstance: clientInstance
        },
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_ykVay4lRMAH2YGEJ(bh);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance
          },
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WyPio7qwYw2MXA68');
    }
  }

  async getAuthorizationParams(authParams = null, ...others) {
    try {
      var bh = {
        input: {
          authParams: authParams
        },
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_GrNzdfBVEi15mTq9(bh);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams
          },
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_prTOys1k2ZwCXa9x');
    }
  }

  async handleTokenExpiry(existingSession = '', newSession = '', ...others) {
    try {
      var bh = {
        input: {
          existingSession: existingSession,
          newSession: newSession
        },
        local: {}
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_0q6VsfjQafpsAF6c(bh);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession
          },
          local: {}
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q4YFcUpKm9EZFOIR');
    }
  }

  //appendnew_flow_idsutil_start

  //__server_service_designer_class_variable_declaration__client
  client: any;
  async sd_ykVay4lRMAH2YGEJ(bh) {
    try {
      bh.local.client = this.client;
      bh = await this.sd_52OrJgpUitm690U2(bh);
      //appendnew_next_sd_ykVay4lRMAH2YGEJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ykVay4lRMAH2YGEJ');
    }
  }

  async sd_52OrJgpUitm690U2(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_OMxU4h1KtfbE5ZrP(bh);
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
        bh = await this.sd_w0LDyNAhlzM4BLhm(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_52OrJgpUitm690U2');
    }
  }

  async sd_OMxU4h1KtfbE5ZrP(bh) {
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret']
      });
      client[custom.clock_tolerance] = process.env.CLOCK_TOLERANCE;
      log.info('Client connected...');
      bh.input.clientInstance = client;
      bh = await this.sd_5vsYUbCuPZBXGmgF(bh);
      //appendnew_next_sd_OMxU4h1KtfbE5ZrP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OMxU4h1KtfbE5ZrP');
    }
  }

  async sd_5vsYUbCuPZBXGmgF(bh) {
    try {
      this.client = bh.input.clientInstance;
      //appendnew_next_sd_5vsYUbCuPZBXGmgF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5vsYUbCuPZBXGmgF');
    }
  }

  async sd_w0LDyNAhlzM4BLhm(bh) {
    try {
      bh.input.clientInstance = this.client;
      //appendnew_next_sd_w0LDyNAhlzM4BLhm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w0LDyNAhlzM4BLhm');
    }
  }

  async sd_GrNzdfBVEi15mTq9(bh) {
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent'
      };
      //appendnew_next_sd_GrNzdfBVEi15mTq9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GrNzdfBVEi15mTq9');
    }
  }

  async sd_0q6VsfjQafpsAF6c(bh) {
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      bh = await this.sd_pKgMSn9i3TuuhyKP(bh);
      //appendnew_next_sd_0q6VsfjQafpsAF6c
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0q6VsfjQafpsAF6c');
    }
  }

  async sd_pKgMSn9i3TuuhyKP(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_apR0iPp4M7p5TwN9(bh);
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
        bh = await this.sd_k1qK6HGX5jCLqEVl(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pKgMSn9i3TuuhyKP');
    }
  }

  async sd_apR0iPp4M7p5TwN9(bh) {
    try {
      bh.input.newSession = bh.input.existingSession.data;
      //appendnew_next_sd_apR0iPp4M7p5TwN9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_apR0iPp4M7p5TwN9');
    }
  }

  async sd_k1qK6HGX5jCLqEVl(bh) {
    try {
      let outputVariables = await this.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_YrXtqm8ZHcRZLwuH(bh);
      //appendnew_next_sd_k1qK6HGX5jCLqEVl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k1qK6HGX5jCLqEVl');
    }
  }

  async sd_YrXtqm8ZHcRZLwuH(bh) {
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      bh = await this.sd_38AYIl5fLxMhFszh(bh);
      //appendnew_next_sd_YrXtqm8ZHcRZLwuH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YrXtqm8ZHcRZLwuH');
    }
  }

  async sd_38AYIl5fLxMhFszh(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DAnMSvYuimq9LkYU(bh);
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
        bh = await this.sd_QXRT6Lf5xAXiZ6Sc(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_38AYIl5fLxMhFszh');
    }
  }

  async sd_DAnMSvYuimq9LkYU(bh) {
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      //appendnew_next_sd_DAnMSvYuimq9LkYU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DAnMSvYuimq9LkYU');
    }
  }

  async sd_QXRT6Lf5xAXiZ6Sc(bh) {
    try {
      bh.input.newSession = false;
      //appendnew_next_sd_QXRT6Lf5xAXiZ6Sc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QXRT6Lf5xAXiZ6Sc');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_NgkDKbWKrQsG3gP0(bh))
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
  async sd_NgkDKbWKrQsG3gP0(bh) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_QXRT6Lf5xAXiZ6Sc(bh);
      //appendnew_next_sd_NgkDKbWKrQsG3gP0
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
