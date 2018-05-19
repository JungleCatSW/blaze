This is a WIP just a brief overview, each point will be specified and stories added.
# Splash/ Loading Screen
TBD

# Sign In/ Sign Up Auth Screen
The app will not require authentication for browsing or adding to basket.
Placing orders, CRUD Saved, Account Details, Order History will require Auth 
Sign Up
Sign In
Forgot Password 
Possibly supporting Facebook/Twitter/ G+ 

# Home Screen
The home screen will feature:
1. A Navigation Drawer
1. A Promotional tags feed
1. A top level tags browser

## Navigation Drawer
Will provide route to:
1. Sign In
1. Home
1. Basket
1. Saved Items
1. Account
1. Settings (probably not needed)
1. Help/ Info (TDB) possible external web link
1. Rate/ Share/ Feedback TBD
1. Sign Out (just a button)

## Promotional Feed
Displays a a list of full width banner image, and smaller half width tiles.

The banner images will be set by the server and will link to a tag such as 'summer-sale'
The images will be full width and auto height.

The tiles images will be set by the server and will link to a tag. But generally these are used to link to normal tags (not time limited).
They may be used to act as a short cut to popular tags.
These images will be portrait, landscape or square. (image ratios should to be defined for your app for a consistent UX)

## Top level tags browser (category list)
This will provide a list of tags at the top level, to form a hierarchical browsing system, although in reaction tags 
and products aren't forced into a systematic hierarchy so they can be any number of layers deep, or products may occur 
only at the top level. 

So the list item component will need to have two options, one to view every thing at the top level, and one to go 
further down to the next level. Although, it is quite likely that the app will only support two levels (top and second),
and that further filtering should be done in the filter drawer on the ProductsListScreen.

GQL tags: the whole tag tree can't be collected by gql in one go. so the top two levels are queried and used to build the menu.


# Product List Screen (List Products by Tag)
The params for this screen will take a tag object, the tag id will be used to query the api for a list of products.

The screen will display a list of products in a 2 column grid. This will need to support view recycling, 
and pagination triggered by scrolling down.

The screen requires a filtering and sorting of products. The filtering is likely to involve selecting tags that are 
children of the original tag passed in by params. The api supports multiple tag selection.

## Filter Drawer
This will some how provide UX for tag filtering.
if a user selects one of those sub tags for filtering, the next level of sub tags for that tag can be retrieved and displayed.
TBD...

# Product Detail Screen
Support a swipe gallery of images,
Contain details, product variants etc...
Share link, add to saved, add to cart etc..

# Basket Screen
Lists all products added to basket.
Can move to saved, view ProductDetail, delete, update quantity.
Checkout

# Saved Items Screen
Lists all products added to saved.
Can move to basket, view ProductDetail, delete,

# Account Screen
Provides a menu to other areas:
1. Order History
1. My info / name / email etc..
1. Password update ?
1. Address(es)
1. Payment Methods


## Order History List
List of order overviews -> navs to order detail screen
## Order Detail Screen
List of ordered items,
Address sent to
Payment method
Date / Status

# Checkout Flow SC
TBD..

#Marketing
## Analytics
- events nav to screen, view/filter tag, search, save item, add to basket, checkout, open app,

## Push Notifications
configurable from plugin...

