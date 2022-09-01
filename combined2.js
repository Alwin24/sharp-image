const sharp = require('sharp');

const addText = async () => {
    try {
        const width = 2400;
        const height = 1350;
        const text = "@winster";
        // change x and y percentage to position the text
        const svgText = `<svg width="${width}" height="${height}">
    <style>
      .title { fill: white; font-size: 100px; font-family:'kanit medium'; font-weight: bold}
    </style>
    <text x="20%" y="60%" text-anchor="middle" class="title">${text}</text>
  </svg>`

        const svgText1 = `<svg width="${width}" height="${height}"></svg>`

        const svgBuffer = Buffer.from(svgText);
        const svgBuffer1 = Buffer.from(svgText1);

        await sharp(svgBuffer1)
            .composite([
                { input: './images/foreground.jpeg', left: 160, top: 160 },
                { input: './images/map.png', left: 0, top: 0 },
                { input: svgBuffer, left: 0, top: 0 }
            ])
            .toFile(__dirname + '/output/result2.jpeg');
    } catch (error) {
        console.log(error);
    }
}

addText()