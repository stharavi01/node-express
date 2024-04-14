const path = require('path');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const uploadProductImage = async (req, res) => {
    if (!req.files) {
        throw new CustomError.BadRequestError('No files Uploaded');
    }
    const productImage = req.files.image;

    if (!productImage.mimetype.startsWith('image')) {
        throw new CustomError.BadRequestError("Please upload an image");
    }

    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize) {
        throw new CustomError.BadRequestError("Image size should be smaller than 1MB");
    }

    const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`);

    await productImage.mv(imagePath);
    return res.status(StatusCodes.OK).json({ image: { src: `/uploads/${productImage.name}` } });
};


module.exports = {
    uploadProductImage,
};