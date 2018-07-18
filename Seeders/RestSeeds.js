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
    reward: 'Get a purple scarf when you purchase 7th glass of wine',
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
    reward: 'Shucking Shuck, a book of oyster poems, with purchase of your 8th oyster.',
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
    reward: 'Free pork suckling, with your 10th purchase of deep-fried funnel-cake bacon.',
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
    reward: 'Free fish-shaped hat, with your 6th Poke Bowl purchase',
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
    reward: 'Free chance to take a picture, when you drink your 5th LI-IT.',
    genre: 'Happy Hour',
    lat: 47.609242,
    lng: -122.339474,
    rewardCode: 'ROCKIT',
    reqPunches: 5
  }
];

Restaurant.create(restSeeds, (err, docs) => {
  console.log(err);
  console.log(docs);
})