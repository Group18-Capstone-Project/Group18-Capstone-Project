let mongoose = require("mongoose");

mongoose.pluralize(null);

let ticketSchema = mongoose.Schema({
    userId: { type: String },
    description: {type: String} // reason
});

let ticketModel = mongoose.model("Ticket", ticketSchema);

module.exports = ticketModel;