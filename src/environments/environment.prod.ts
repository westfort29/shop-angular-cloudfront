import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://a0gnzu1g01.execute-api.us-east-1.amazonaws.com/prod',
    order: 'https://a0gnzu1g01.execute-api.us-east-1.amazonaws.com/prod',
    import: 'https://a0gnzu1g01.execute-api.us-east-1.amazonaws.com/prod',
    bff: 'https://a0gnzu1g01.execute-api.us-east-1.amazonaws.com/prod',
    cart: 'https://a0gnzu1g01.execute-api.us-east-1.amazonaws.com/prod',
  },
  apiEndpointsEnabled: {
    product: true,
    order: true,
    import: false,
    bff: true,
    cart: false,
  },
};
