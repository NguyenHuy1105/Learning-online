const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://nguyenhuy:huy110501@cluster0.ionqlpk.mongodb.net/`
    );
    console.log("success");
  } catch (error) {
    console.log("Not Connect");
  }
}
module.exports = { connect };
