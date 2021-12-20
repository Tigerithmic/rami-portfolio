import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/dashboard.js';
import theme from '../lib/theme-config.js';
import Fonts from '../components/fonts';

const App = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
