import gql from 'graphql-tag';
// https://github.com/reactioncommerce/reaction/blob/master/imports/plugins/core/graphql/lib/queries/getCatalogItems.js
export default gql`
query CatalogItemsQuery($shopId: [ID]!){
    catalogItems(shopIds:$shopId) {
    edges {
        node {
            createdAt
            updatedAt
            _id
            __typename
        ... on CatalogItemProduct {
                product {
                    _id
                    title
                    pageTitle
                    slug
                    description
                    vendor
                    isLowQuantity
                    isSoldOut
                    isBackorder
                    pricing {
                        currency {
                            code
                        }
                        displayPrice
                        minPrice
                        maxPrice
                    }
                    primaryImage {
                        URLs {
                            thumbnail
                            small
                        }
                    }
                }
            }
        }
    }
}
}
`;
