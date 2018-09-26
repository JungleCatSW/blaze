import gql from 'graphql-tag';

export default gql`
query ProductQuery($slug: String){
    catalogItemProduct(slugOrId: $slug) {
    product {
        _id
        title
        description
        height
        isDeleted
        isSoldOut
        isVisible
        isBackorder
        isLowQuantity
        length
        media {
            priority
            variantId
            URLs {
                large
                small
                medium
                thumbnail
            }
        }
        minOrderQuantity
        pageTitle
        pricing {
            currency {
                code
                symbol
            }
            displayPrice
            maxPrice
            minPrice
            price
        }
        primaryImage {
            variantId
            URLs {
                small
                medium
                large
            }
        }
        sku
        vendor
        weight
        width
        variants {
            variantId
            title
            isLowQuantity
            isSoldOut
            optionTitle
            pricing {
                currency {
                    code
                    symbol
                }
                displayPrice
                maxPrice
                minPrice
                price
            }
            primaryImage {
                variantId
                URLs {
                    small
                    medium
                    large
                }
            }
            sku
            options {
                variantId
                title
                isLowQuantity
                isSoldOut
                optionTitle
                pricing {
                    currency {
                        code
                        symbol
                    }
                    displayPrice
                    maxPrice
                    minPrice
                    price
                }
            }
        }
    }
}
}`;
