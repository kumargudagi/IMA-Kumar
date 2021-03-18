export default {
  logger: {
    level: 'debug',
    logFile: 'logs/console.log',
    exceptionFile: 'logs/exception.log',
    transport: ['file', 'console']
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' }
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } }
  },
  ids: {
    client_id: 'P3DWX0QVs6NyIjcWtT5rQ',
    client_secret:
      'x0gBkUVdNLVeceJ8C50WmVwFyG7Ma5Phr9tXcoXdp3dwlEJRhNPQyt_xCRl007StHQsX2Rn2Vo9Tp-Q0Y157Cw',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true
  }
};
