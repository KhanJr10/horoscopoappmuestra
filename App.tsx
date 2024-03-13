import React, {memo} from 'react';
import Navigation from './src/Navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default memo(App);
