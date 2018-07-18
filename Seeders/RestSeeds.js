const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jwtAuth');
var Restaurant = require('../models/Restaurant');
//We require mongoose.
//We connect to the local host under jwt so the different users can access different seeds.
//We require the model, so the data is populated in the db.

//Set the Array of objects to a const.
const restSeeds = [
  {
    name: 'The Capital Grille',
    address: '1301 4th Ave',
    img: 'https://media.thecapitalgrille.com/images/site/ext/locations/TCG-8030-Seattle-WA-Ext-574x250.jpg',
    reward: 'Double Fries on 5th burger!',
    genre: 'Upscale Steakhouse',
    lat: 47.608258,
    lng: -122.335159,
    rewardCode: '5309',
    reqPunches: 5
  },
  {
    name: 'Purple Cafe and Wine Bar',
    address: '1225 4th Ave',
    img: 'http://media0.trover.com/T/4db9f1648926e30b7b000004/fixedw_large_4x.jpg',
    reward: 'Get a purple scarf when you spend $300 or more!',
    genre: 'Happy-Hour',
    lat: 47.608001,
    lng: -122.335087,
    rewardCode: 'GODAWGS',
    reqPunches: 7
  },
  {
    name: 'Shuckers Restaurant',
    address: '411 University St.',
    img: 'https://i.pinimg.com/originals/a9/5b/b4/a95bb480c846ce9e9f49203bc03e8755.jpg',
    reward: 'Shucking Shuck, a book of oyster poems, with purchase of your 20th oyster.',
    genre: 'Happy-Hour',
    lat: 47.607771,
    lng: -122.334065,
    rewardCode: 'OYSTER',
    reqPunches: 8
  },
  {
    name: 'Lecosho',
    address: '89 University St.',
    img: 'https://i.pinimg.com/originals/bb/05/89/bb0589c559566b8e78529bb1f034ec2d.jpg',
    reward: 'Free pork suckling, with purchase of 50lbs of deep-fried funnel-cake bacon.',
    genre: 'Happy-Hour',
    lat: 47.606553,
    lng: -122.338592,
    rewardCode: 'PORKYS4U',
    reqPunches: 10
  },
  {
    name: 'Tulio',
    address: '1100 5th Ave',
    img: 'http://dun6irwnoloqf.cloudfront.net/images/venues/4427/Tulio-Ristorante-Wedding-Seattle-WA-9.1434404363.jpg',
    reward: 'Skip the wait on your 8th visit in a month.',
    genre: 'Italian',
    lat: 47.607493,
    lng: -122.332452,
    rewardCode: 'ITALSTAL',
    reqPunches: 8
  },
  {
    name: 'PokeWorks',
    address: '1200 3rd Ave #100',
    img: 'https://s3-media2.fl.yelpcdn.com/bphoto/LwnJUCYo_kcG1lVeCHjR7Q/o.jpg',
    reward: 'Free fish-shaped hat, with purchase of enough Poke to make a whole fish.',
    genre: 'Casual',
    lat: 47.607278,
    lng: -122.335252,
    rewardCode: 'FISH',
    reqPunches: 6
  },
  {
    name: 'Red Robin Gourmet Burgers',
    address: '1101 Alaskan Way',
    img: 'https://cheapbastardseattle.files.wordpress.com/2015/06/photo-4.jpg',
    reward: 'All you can eat fries, if you can eat all the fries 10 times.',
    genre: 'Happy Hour',
    lat: 47.604892,
    lng: -122.340320,
    rewardCode: 'BATMAN',
    reqPunches: 10
  },
  {
    name: 'Hard Rock Cafe',
    address: '116 Pike St.',
    img: 'https://media1.fdncms.com/stranger/imager/u/original/23945989/3.jpeg',
    reward: 'Free chance to take a picture, when you drink your 8th LI-IT.',
    genre: 'Happy Hour',
    lat: 47.609242,
    lng: -122.339474,
    rewardCode: 'ROCKIT',
    reqPunches: 5
  },
  {
    name: 'Red Mill Burgers',
    address: '1613 W Dravus St.',
    img: 'https://i0.wp.com/images1.apartments.com/i2/LqDbF2KagMv4HfDrq_jG12fk1MsX-tnnqhjI-hY03eg/110/interbay-seattle-wa-neighborhood-photo.jpg?resize=665%2C443&ssl=1',
    reward: 'Add bacon to 10 burgers, get a free heart consultation with our cardiologist!',
    genre: 'Burgers',
    lat: 47.648315,
    lng: -122.378206,
    rewardCode: 'IHEARTBACON',
    reqPunches: 10
  },
  {
    name: "Olaf's",
    address: '6301 24th Ave. NW',
    img: 'https://b.zmtcdn.com/data/pictures/7/16730057/c3f27f9096d181560d64717827f1439a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
    reward: 'Buy 25 Rainiers, get a shot of bourbon and a stick-on beard.',
    genre: 'Bar',
    lat: 47.674724,
    lng: -122.387878,
    rewardCode: 'BEARDME',
    reqPunches: 25
  },
  {
    name: "Dick's Drive-in",
    address: '12325 30th Ave.',
    img: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,w_594,x_0,y_0/c_fit,h_640,w_960/Screen_Shot_2016-05-31_at_12.15.39_PM_x74c6x',
    reward: "Get a free shake with the purchase of 10 Dick's cheeseburgers.",
    genre: 'Burgers',
    lat: 47.718248,
    lng: -122.296905,
    rewardCode: 'BAGODICKS',
    reqPunches: 10
  },
  {
    name: "Salty's on Alki",
    address: '1936 Harbor Ave. SW',
    img: 'https://wheelchairjimmy.com/seattle/wp-content/uploads/sites/2/2015/09/2970691720_b814ec45ef1.jpg',
    reward: 'Spend more than $100 5 times, skip the wait!',
    genre: 'Upscale',
    lat: 47.586569,
    lng: -122.376415,
    rewardCode: 'OYSTER',
    reqPunches: 5
  },
  {
    name: 'Sushi Samuri',
    address: '1817 Queene Anne Ave. N',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/e6/73/75/sushi-samurai.jpg',
    reward: 'Spend more than $15 when you visit 8 times, get a roll free.',
    genre: 'Sushi',
    lat: 47.635387,
    lng: -122.357382,
    rewardCode: 'TOPKNOT',
    reqPunches: 8
  },
  {
    name: 'Blue Moon Burgers',
    address: '523 Broadway E.',
    img: 'http://bluemoonburgers.com/wp-content/uploads/blue_moon_google_places_event_099-300x180.jpg',
    reward: 'Free fries on your 10th burger.',
    genre: 'Burgers',
    lat: 47.623714,
    lng: -122.321197,
    rewardCode: 'FEELINGBLUE',
    reqPunches: 10
  }
];

Restaurant.create(restSeeds, (err, docs) => {
  console.log(err);
  console.log(docs);
})
