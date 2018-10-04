import gql from 'graphql-tag';


const VIEWER = 'viewer {\n  name\n  note\n  preferences\n}';
const ACCOUNT_CART_ID
export default gql`
query ProductQuery($slug: String){
    catalogItemProduct(slugOrId: $slug) {
    product {
    
    {
viewer {
  name
  note
  preferences
}
}`;

// retreive anonymous cart
// retreive account cart
// retreive account/ signed in

// mutate reconcile carts

// create a cart ?
// or do that oon add item
