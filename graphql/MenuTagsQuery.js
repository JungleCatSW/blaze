// first two levels of tags are grabbed
import gql from 'graphql-tag';

export default gql`
query MenuTagsQuery($shopId: ID!){
    tags(shopId: $shopId, isTopLevel: true)
    {
        edges
        {
            cursor
            node
            {
                _id
                name
                position
                slug
                subTags
                {
                    edges
                    {
                        node
                        {
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