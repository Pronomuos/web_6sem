import EmailPassword from 'supertokens-node/recipe/emailpassword';
import Session from 'supertokens-node/recipe/session';

export const appInfo = {
  // Learn more about this on https://supertokens.com/docs/thirdpartypasswordless/appinfo
  appName: 'ST',
  apiDomain: process.env.API_DOMAIN,
  websiteDomain: process.env.WEBSITE_DOMAIN,
  apiBasePath: '/auth',
  websiteBasePath: '/auth',
};

export const connectionUri = process.env.CONNECTION_URL;
export const apikey = process.env.API_KEY;

export const recipeList = [EmailPassword.init(), Session.init()];
