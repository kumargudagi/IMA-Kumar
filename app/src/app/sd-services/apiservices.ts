/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class apiservices {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_apiservices

  async addincident(incident: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          incident: incident,
        },
        local: {
          apiresult: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.addIncident(bh);
      //appendnew_next_addincident
      return (
        // formatting output variables
        {
          input: {},
          local: {
            apiresult: bh.local.apiresult,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BFZBdHdbVzSMdp8l');
    }
  }

  async getIncList(...others) {
    try {
      var bh = {
        input: {},
        local: {
          apiresult: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getIncident(bh);
      //appendnew_next_getIncList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            apiresult: bh.local.apiresult,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ofEuwokkur2Cs8xl');
    }
  }

  async ls_set(setkey: any = undefined, setvalue: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          setkey: setkey,
          setvalue: setvalue,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_fSRDERp7vogKWum6(bh);
      //appendnew_next_ls_set
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J9z4k6fRdUzLTXU0');
    }
  }

  async ls_get(getkey: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          getkey: getkey,
        },
        local: {
          getvalues: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_ShHbxqVqNKNp3sxl(bh);
      //appendnew_next_ls_get
      return (
        // formatting output variables
        {
          input: {},
          local: {
            getvalues: bh.local.getvalues,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cMyU7LGFreEkpth8');
    }
  }

  async updatencident(incident: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          incident: incident,
        },
        local: {
          apiresult: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.updateIncident(bh);
      //appendnew_next_updatencident
      return (
        // formatting output variables
        {
          input: {},
          local: {
            apiresult: bh.local.apiresult,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eEwJwE8CPB40LCU7');
    }
  }

  async deletencident(id: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          id: id,
        },
        local: {
          apiresult: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.deleteIncident(bh);
      //appendnew_next_deletencident
      return (
        // formatting output variables
        {
          input: {},
          local: {
            apiresult: bh.local.apiresult,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_59jAo0qa1G7skJ5Q');
    }
  }

  async snackbar(obj: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          obj: obj,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_X7vnJ2QLW9ZPUFmH(bh);
      //appendnew_next_snackbar
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fpmuSZheG6X5M6lD');
    }
  }

  async dashboardpicchart(...others) {
    try {
      var bh = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.pie(bh);
      //appendnew_next_dashboardpicchart
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WQxvLxothCD5I6F1');
    }
  }

  async dashboardprioritychart(...others) {
    try {
      var bh = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.prioritypie(bh);
      //appendnew_next_dashboardprioritychart
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CBELPYYEHsNRhT31');
    }
  }

  async dashboardsubjectchart(...others) {
    try {
      var bh = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.subjectpie(bh);
      //appendnew_next_dashboardsubjectchart
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mLbJCdXrKwB5MN0w');
    }
  }

  //appendnew_flow_apiservices_start

  async addIncident(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `incident/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.incident,
      };
      bh.local.apiresult = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_6dSzyRLfwVAI3yFd(bh);
      //appendnew_next_addIncident
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jE7TquS3VQgYq6vA');
    }
  }

  async sd_6dSzyRLfwVAI3yFd(bh) {
    try {
      console.log('addIncident service called', bh.input);

      console.log('addIncident service ===', bh);
      bh.local.apiresult = 'recieved';
      //appendnew_next_sd_6dSzyRLfwVAI3yFd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6dSzyRLfwVAI3yFd');
    }
  }

  async getIncident(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `incident/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.apiresult = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_kJcsmGU197djynFc(bh);
      //appendnew_next_getIncident
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NDdTizZJNVFVFx1K');
    }
  }

  async sd_kJcsmGU197djynFc(bh) {
    try {
      console.log('get incident service called', bh.input);
      console.log('get incident====', bh);
      //appendnew_next_sd_kJcsmGU197djynFc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kJcsmGU197djynFc');
    }
  }

  async sd_fSRDERp7vogKWum6(bh) {
    try {
      console.log('bh', bh.input);
      bh = await this.localstorageset(bh);
      //appendnew_next_sd_fSRDERp7vogKWum6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fSRDERp7vogKWum6');
    }
  }

  async localstorageset(bh) {
    try {
      localStorage.setItem(bh.input.setkey, JSON.stringify(bh.input.setvalue));
      //appendnew_next_localstorageset
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RFBTVnxZBMW5p9kw');
    }
  }

  async sd_ShHbxqVqNKNp3sxl(bh) {
    try {
      bh.local.getvalues = JSON.parse(localStorage.getItem(bh.input.getkey));
      bh = await this.sd_ZiFVzfj3irt4iaGx(bh);
      //appendnew_next_sd_ShHbxqVqNKNp3sxl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ShHbxqVqNKNp3sxl');
    }
  }

  async sd_ZiFVzfj3irt4iaGx(bh) {
    try {
      console.log('bbbbbbbb', bh);
      //appendnew_next_sd_ZiFVzfj3irt4iaGx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZiFVzfj3irt4iaGx');
    }
  }

  async updateIncident(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `incident/${bh.input.incident.incidentId}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'put',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.incident,
      };
      bh.local.apiresult = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_updateIncident
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_At5uhHHR7J8nNr2y');
    }
  }

  async deleteIncident(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `incident/${bh.input.id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'delete',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.apiresult = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_PrFkTkFTmw1mYQcK(bh);
      //appendnew_next_deleteIncident
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VUB8EMZeBI442q4M');
    }
  }

  async sd_PrFkTkFTmw1mYQcK(bh) {
    try {
      console.log('addIncident service called', bh.input);

      console.log('addIncident service ===', bh);
      bh.local.apiresult = 'recieved';
      //appendnew_next_sd_PrFkTkFTmw1mYQcK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PrFkTkFTmw1mYQcK');
    }
  }

  async sd_X7vnJ2QLW9ZPUFmH(bh) {
    try {
      this.matSnackBar.open(bh.input.obj.message, 'close', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_X7vnJ2QLW9ZPUFmH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X7vnJ2QLW9ZPUFmH');
    }
  }

  async pie(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `userincident/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_nAimGDk9za2T0Qf7(bh);
      //appendnew_next_pie
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U5gDegdfRrgeFP6C');
    }
  }

  async sd_nAimGDk9za2T0Qf7(bh) {
    try {
      console.log('incideclient', bh);
      //appendnew_next_sd_nAimGDk9za2T0Qf7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nAimGDk9za2T0Qf7');
    }
  }

  async prioritypie(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `priorityincident/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_hktrfuGj1YU7NbEL(bh);
      //appendnew_next_prioritypie
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KNhjdUqM0o2s49bo');
    }
  }

  async sd_hktrfuGj1YU7NbEL(bh) {
    try {
      console.log('incideclient', bh);
      //appendnew_next_sd_hktrfuGj1YU7NbEL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hktrfuGj1YU7NbEL');
    }
  }

  async subjectpie(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `subjectincident/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_nMpHwCPicUqFW6i4(bh);
      //appendnew_next_subjectpie
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_000mNZUvXWW0rrvE');
    }
  }

  async sd_nMpHwCPicUqFW6i4(bh) {
    try {
      console.log('incideclient', bh);
      //appendnew_next_sd_nMpHwCPicUqFW6i4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nMpHwCPicUqFW6i4');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_apiservices_Catch
}
