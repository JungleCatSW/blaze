// first two levels of tags are grabbed
import gql from 'graphql-tag';

export default gql`
{
    tags(shopId: "cmVhY3Rpb24vc2hvcDpKOEJocTN1VHRkZ3daeDNyeg==", isTopLevel: true) {
    edges {
        cursor
        node {
            _id
            name
            position
            slug
            subTags {
                edges {
                    node {
                        _id
                        name
                        position
                        slug
                    }
                }
            }
        }
    }
}
}`;

// {
//     tags(shopId:"cmVhY3Rpb24vc2hvcDpKOEJocTN1VHRkZ3daeDNyeg==", isTopLevel:true) {
//     pageInfo {
//         endCursor
//         startCursor
//     }
//     edges {
//         cursor
//         node {
//             position
//             slug
//             subTags {
//                 edges {
//                     node {
//                         position
//                         slug
//                     }
//                 }
//             }
//         }
//     }
// }
// }
