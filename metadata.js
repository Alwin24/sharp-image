const sharp = require('sharp')

const imageMetadata = async () => {
  const metadata = await sharp('./images/map.png').metadata()

  console.log(metadata)
}

imageMetadata()