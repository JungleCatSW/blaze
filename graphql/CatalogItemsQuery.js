// https://github.com/reactioncommerce/reaction/blob/master/imports/plugins/core/graphql/lib/queries/getCatalogItems.js
{
    catalogItems(shopIds: ["cmVhY3Rpb24vc2hvcDpKOEJocTN1VHRkZ3daeDNyeg=="]) {
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
                    slug
                    description
                    vendor
                    isLowQuantity
                    isSoldOut
                    isBackorder
                    shop {
                        currency {
                            code
                        }
                    }
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
                            medium
                            large
                        }
                    }
                }
            }
        }
    }
}

}
