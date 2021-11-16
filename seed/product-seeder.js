var Product = require('../models/product');

var mongoose = require('mongoose');
const { exists } = require('../models/product');

mongoose.connect('mongodb://127.0.0.1:27017/shopping');

var products = [
    new Product({
    imagePath: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/GTA_6_Release_Rockstar_Games.jpg',
    title: 'GTA 6',
    description: 'Stealing and Killing',
    price: 50
    }),
    new Product({
        imagePath: 'https://assets-prd.ignimgs.com/2021/07/16/nba-2k22-button-1626419630756.jpg',
        title: 'NBA 2K22',
        description: 'Basketball',
        price: 50
    }),
    new Product({
        imagePath: 'https://d1gn39i7bbaawp.cloudfront.net/images/detailed/3067/Modern_warfarfe.jpg?t=1602520326',
        title: 'Call of Duty Modern Warfare',
        description: 'Shooting',
        price: 60
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/510Xjw4h8kS._AC_.jpg',
        title: 'World of Warcraft',
        description: 'MMORPG game',
        price: 15
    }),
    new Product({
        imagePath: 'https://images.livemint.com/img/2020/06/03/1600x900/Valorant_1591218052835_1591218061187.jpg',
        title: 'Valorant',
        description: 'Shooting and skills',
        price: 0
    }),
    new Product({
        imagePath: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7',
        title: 'God of War',
        description: 'Action packed story game',
        price: 20
    })

];

var done = 0;
for(var i = 0; i < products.length;i++){
    products[i].save(function(err,result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
