const sharp = require('sharp')

const imageMetadata = async () => {
  const metadata = await sharp('./images/background.jpeg').metadata()

  console.log(metadata)
}

imageMetadata()