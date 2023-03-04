const mongoose = require("mongoose");

mongoose.connect(
"mongodb+srv://mariamab8:Sadio224@socialmb.aw4tiel.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;
