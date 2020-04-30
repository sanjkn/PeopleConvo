import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.API_PRODUCTION
    :'http://localhost:8000/api';

export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
? publicRuntimeConfig.DOMAIN_PRODUCTION
: 'http://localhost:8000/';

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;

export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;
