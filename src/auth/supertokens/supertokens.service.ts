import { Inject, Injectable } from '@nestjs/common';
import supertokens from 'supertokens-node';
import { ConfigInjectionToken, AuthModuleConfig } from '../config.interface';
import { recipeList } from '../../config';

@Injectable()
export class SupertokensService {
  constructor(@Inject(ConfigInjectionToken) private config: AuthModuleConfig) {
    supertokens.init({
      appInfo: {
        appName: 'ST',
        apiDomain: process.env.WEBSITE_DOMAIN,
        websiteDomain: process.env.API_DOMAIN,
        apiBasePath: '/auth',
        websiteBasePath: '/auth',
      },
      supertokens: {
        connectionURI: process.env.CONNECTION_URL,
        apiKey: process.env.API_KEY,
      },
      recipeList: recipeList,
    });
  }
}
