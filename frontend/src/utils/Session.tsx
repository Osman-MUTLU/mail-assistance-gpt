import { Providers } from '@microsoft/mgt-element';
import { ProviderState } from '@microsoft/mgt-element/dist/es6/providers/IProvider';
import { useEffect, useState } from 'react';

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

export function useIsSignedIn(): [boolean] {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    }
  }, []);

  return [isSignedIn];
}
