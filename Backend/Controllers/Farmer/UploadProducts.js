const Product = require("../../Models/Products");
const Notification = require("../../Models/Notifications"); // Corrected model name

// Add Product Controller
const addProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      description,
      price,
      quantity,
      contact,
      image,
      farmerId,
    } = req.body;

    // Basic validation
    if (!name || !category || !price || !quantity || !contact || !farmerId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create new product
    const newProduct = new Product({
      name,
      category,
      description,
      price,
      quantity,
      contact,
      image,
      farmerId,
    });

    // Save product to database
    await newProduct.save();

    // Create a notification after product is added
    const newNotification = new Notification({
      farmerId,
      productId: newProduct.productId, // auto-generated by schema
      message: `Your product "${name}" was added successfully and waiting for admin Approval `,
    });

    // Save the notification
    await newNotification.save();

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = addProduct;
