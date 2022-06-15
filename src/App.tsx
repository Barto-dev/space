import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '@app/apollo';
import Pages from '@app/routes';
import '@app/styles/variables.css';
import '@app/styles/main.css';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Pages />
    </ApolloProvider>
  );
};

export default App;
