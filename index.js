const sharp = require('sharp');

const convertTograyscale = () => {
    sharp('./images/background.jpeg')
        .composite([{input:'./images/foreground.jpeg',left:600,top:100}])
        .toFile(__dirname + '/images/composite1.jpeg')
}

convertTograyscale()
