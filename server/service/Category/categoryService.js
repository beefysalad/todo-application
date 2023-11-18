const { Category } = require("../../models/Category");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({ user: req.user });
    return res.status(200).json({
      data: categories,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const { color, icon, isEditable, name } = req.body;
    const { user } = req;
    const category = await Category.create({
      color,
      icon,
      isEditable,
      name,
      user,
    });
    return res.status(201).json({
      message: "Category created!",
      data: category,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.deleteMany({ _id: id });
    return res.status(200).json({
      message: "Deleted!",
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { color, icon, isEditable, name } = req.body;
    const category = await Category.updateOne(
      { _id: id },
      {
        $set: {
          name,
          isEditable,
          color,
          icon,
        },
      }
    );
    return res.status(201).json({
      message: "Category Updated!",
      data: category,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};
