import gql from 'graphql-tag';
// From RC
// The cart id for an anonymous cart @type string
const anonymousCartId = null;
// The token for an anonymous cart @type string
const anonymousCartToken = null;
// The cart id for an account cart @type string
const accountCartId = null;

// Is the cart currently in the process of being reconcoled @type bool
const isReconcilingCarts = false;

// The Stripe token that stores encrypted user payment data @type Object

const stripeToken = null;

export const clientState = {
  defaults: {
    isConnected: true,
  },
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        console.log('resolver', isConnected);
        cache.writeData({
          data: {
            networkStatus: {
              __typename: 'NetworkStatus',
              isConnected,
            },
          },
        });
        return null;
      },
    },
  },
  defaults: {
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: 'poop',
    },
  },
};

export const UPDATE_NETWORK_STATUS = gql`
  mutation updateNetworkStatus($isConnected: Boolean) {
    updateNetworkStatus(isConnected: $isConnected) @client
  }
`;

export const GET_NETWORK_STATUS = gql`
  query {
    networkStatus @client {
      isConnected
    }
  }
`;
