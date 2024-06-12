import { Schema, model } from 'mongoose';

const wishlistSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    userId: {
        type: String,
        required: true,
        trim: true
    }
});

const Wishlist = model('Wishlist', wishlistSchema);

export default Wishlist;
