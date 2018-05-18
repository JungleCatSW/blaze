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
1. Settings
1. Help/ Info
1. Rate/ Share/ Feedback TBD
1. Sign Out (just a button)

## Promotional Feed
Displays a a list of full width banner image, and smaller half width tiles.

The banner images will be set by the server and will link to a tag such as 'summer-sale'
The images will be full width and auto height.

The tiles images will be set by the server and will link to a tag. But generally these are used to link to normal tags (not time limited).
They may be used to act as a short cut to popular tags.
These images will be portrait, landscape or square. (image ratios should to be defined for your app for a consistent UX)




Tags
Tags form the category system
top level and second levels tags form the browseable menu ?
the whole tag tree can't be collected by gql in one go.

so the top two levels are collected,

Product detail screen are driven by a tag,
when the user opens the screen, the next level of sub tags will be gotten.
and if a user selects one of those sub tags for filtering, the ext level of sub tags for that tag can be retreived and displayed.