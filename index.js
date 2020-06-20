const sharp = require("sharp");
const path = require("path");

const mxImg = (image, option, output) => {
  const selectedImage = sharp(image);
  selectedImage.resize(option).toFile(output, (err, info) => {
    console.log(`Image Resize succesful! - "${output}"`);
  });
};

const validateInputs = (photopath, optionParam) => {
  const imageFullPath = path.resolve(process.cwd(), photopath);
  let outputPath;
  for (let i = photopath.length - 1; i > 0; i--) {
    if (photopath[i] === ".") {
      const filename = photopath.slice(0, i);
      const ext = photopath.slice(i);
      outputPath = path.resolve(
        process.cwd(),
        filename + "_output_" + optionParam + ext
      );
      break;
    }
  }

  const option = {};
  const size = parseInt(optionParam.substr(1));

  if (optionParam[0] === "h") {
    option.height = size;
  } else {
    option.width = size;
  }

  mxImg(imageFullPath, option, outputPath);
};

if (!process.argv[3]) {
  console.log("Wrong Input Paramters");
  return "";
}

validateInputs(process.argv[2], process.argv[3]);