export interface Order {
    userId: { type: String },
    pOrdered: String // product map ordered by user, {"apple"=>"5", "banana"=>"1"}
    pTotalPrice:{type: Number}, // total price of the products ordered
    pQuantity:{type: Number}, // the number of products ordered, total items
    status:{type: String}, // status: delivered, shipped, out for delivery and etc.
    orderPlaced?: String
}