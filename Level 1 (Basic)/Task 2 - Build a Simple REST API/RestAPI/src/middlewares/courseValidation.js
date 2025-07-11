const validate = (req, res, next) => {
  const { category, title, author, duration, price } = req.body;

  if (!category || !title || !author || !duration || !price) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  next();
};

module.exports = validate;
