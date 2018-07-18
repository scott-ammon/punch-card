# punch-card

## Description
Many restaurants provide punchcards to increase customer loyalty. For example if you purchase 9 entrees at a specific restaurant the 10th purchase will be 50% off. However, these physical punchcards are easy to lose. With the punch card application, you won't have to keep track of all your different punch cards or worry about losing them. All your punch cards can be used and stored on your user account. This will be beneficial for participating restaurants as well because their guests will be more likely to redeem their punch cards, which will increase loyalty to the restaurant.

## User Stories
As a frequent restaurant guest, I want to remember to redeem my punchcards, so I can receive my discounts at my favorite restaurants.

## Technologies used
1. HTML
2. CSS
3. JavaScript
4. React
5. Material-UI
6. MongoDB
7. ExpressJS
8. Axios
9. NodeJS
10. NPM
11. Heroku

## Approach
The first thing that we did in our group was a appoint a git master. We all decided Scott was best suited for that position. After that our whole group got together and we started brainstorming on what kind of project we would make. A lot of the ideas were based off of what kind of API's were out there. When we decided what our idea was, the next step was to begin wireframing.

### Wireframes
We built wireframes in Adobe XD, linked here: [wireframes](https://xd.adobe.com/view/f35c8478-fcf1-4373-5be1-50391b61f632-856d/?hints=off)

After we wireframed all of our pages and then proceeded to map out the server side routes as well as the client side routes.

| METHOD        | PATH          |
|:-------------:|:-------------:|
| POST          | /auth/login   |
| POST          | /auth/signup  |
| POST          | /auth/me/from/token |
| GET           | /restaurant     |
| POST          | /user/cards     |
| POST          | /user/cards/all |
| PUT           | /user/cards/:id |
| DELETE        | /user/cards/:id |


Client-side Routing

| METHOD        | PATH          |
|:-------------:|:-------------:|
|               | /home         |
|               | /login        |
|               | /signup       |
|               | /cards        |
|               | /cards/:id    |
|               | /restaurant/:id |

In addition to that, we also planned as much as possible for how the models would look for our database.

## Models
Here is our original map of our models:

![punch-card-model](https://user-images.githubusercontent.com/34433863/42727157-415f56fa-8756-11e8-811d-a19c2ae031d1.png)

Here is our final models map:

<img width="837" alt="screen shot 2018-07-18 at 4 12 49 pm" src="https://user-images.githubusercontent.com/34433863/42912696-9565faae-8aa5-11e8-9b66-41453709cb8d.png">

We have 3 models including the user, card, and restaurant model. The user model collects all sign up and login data. The card model collects data associated with how many punches a card has. Finally, the restaurant model displays data about the name, location and other information about each restaurant. Each card is associated with 1 restaurant. Each user is associated with many restaurants. Each restaurant is associated with 1 card. Each user can have many cards.

Once we got all of that initial planning done for the project, our next step was setting up our model files using MongoDB. This proved to be somewhat difficult because creating associations in Mongoose is a bit of a challenge. Next, we divided up the rest of the tasks including building: React components, Express routes, UX-Design, and continuing to update data in our databases. In addition, to keep us organized while progressing through our tasks, we used a trello board. [Trello Board](https://trello.com/b/fe0emLn3/ga-project-3)

### Early Progress Screen Shots

<img width="1438" alt="screen shot 2018-07-16 at 3 05 38 pm" src="https://user-images.githubusercontent.com/34433863/42786329-aa20c01a-890a-11e8-9e3a-1a14d60e9216.png">

<img width="1440" alt="screen shot 2018-07-16 at 3 05 20 pm" src="https://user-images.githubusercontent.com/34433863/42786334-abee6bf4-890a-11e8-8714-d7dcc6fc3877.png">


## Minimum Viable Product
The main goal of the application is to allow users to put all of their restaurant punch cards together on one platform. MVP will include a main page with a map to find a restaurant, A restaurant page that will let you add their punch card to your profile, a profile page that shows all of your cards, and finally a card page that shows the whole card with punch details.

## Adding More Features
There's still a lot more we can add to this application. Some other features will include other promotions restaurants want to give out like limited time only discounts.

1. Add unique code for each punch (right now there's just one code for all punches).
2. Let restaurants be able to add there punch card to the app by making an easy sign up form to input restaurant promotions and how many punches are needed to achieve the promotion.
3. Be able to search a restaurant.
4. Be able search to your city and view which restaurants participate.
5. Tracking the date of last punch for a specific restaurant and being able to remind a user that they have not visited a location in a while.
6. Earning punches by referring friends to sign up for the app.

## Acknowledgements

Steven Peters
Kyle Van Bergen
