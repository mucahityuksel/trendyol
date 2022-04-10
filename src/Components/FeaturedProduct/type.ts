export interface Products {
    id: Number,
    name: String,
    price: Number,
    brand: String,
    basketDiscount: Boolean,
    image: [],
    star: Number,
    smallImages: [],
    cargo: Boolean,
    productInformation: [],
    mostSales: Boolean,
    category: Number,
    Seller: {
        score: Number,
        followers: Number
    },
    rating: Number,
    comment: Number,
    question: Number,
    like: Number,
    productQuestion: Number
}