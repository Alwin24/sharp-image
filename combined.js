const sharp = require('sharp');

const addText = async () => {
  try {
    const width = 1024;
    const height = 575;
    const text = "All hail @winster";
    // change x and y percentage to position the text
    const svgText = `<svg width="${width}" height="${height}">
    <style>
      .title { fill: black; font-size: 60px}
    </style>
    <text x="25%" y="50%" text-anchor="middle" class="title">${text}</text>
  </svg>`

    const svgBuffer = Buffer.from(svgText);

    await sharp('./images/foreground.jpeg')
    .resize(320,320)
    .toFile(__dirname+'/output/resized_foreground.jpeg');
    
    await sharp('./images/background.jpeg')
      .composite([
        { input: './output/resized_foreground.jpeg', left: 600, top: 100 },
        { input: svgBuffer, left: 0, top: 0 }
      ])
      .toFile(__dirname + '/output/combined.jpeg')
  } catch (error) {
    console.log(error);
  }
}

addText()