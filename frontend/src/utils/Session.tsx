import { Providers } from '@microsoft/mgt-element';

export const getBearerToken = async ()=> {
  try {
    return await Providers.globalProvider.getAccessToken();
  } catch (error) {
    return null;
  }
}

export const getGlobalProvider = () => {
  return Providers.globalProvider;
}

// session'a dair bilgiler burda