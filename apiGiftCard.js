import cors from "cors"
import express from "express"

const giftCard = [
    {
        id: 1,
        title: "Gift Card 10€",
        order: 'GiftCard',
        discount: 1,
        price: 8.99,
        image_url: "https://media.direct.playstation.com/is/image/psdglobal/IT_ps_store_gift_card_10?$TwoColumn_Large$",
    },
    {
        id: 2,
        title: "Gift Card 20€",
        order: 'GiftCard',
        discount: 2,
        price: 17.99,
        image_url: "https://media.direct.playstation.com/is/image/psdglobal/IT_ps_store_gift_card_20?$TwoColumn_Large$",
    },
    {
        id: 3,
        title: "Gift Card 40€",
        order: 'GiftCard',
        discount: 3,
        price: 36.99,
        image_url: "https://media.direct.playstation.com/is/image/psdglobal/IT_ps_store_gift_card_40?$TwoColumn_Large$",
    },
    {
        id: 4,
        title: "Gift Card 50€",
        order: 'GiftCard',
        discount: 3,
        price: 46.99,
        image_url: "https://media.direct.playstation.com/is/image/psdglobal/IT_ps_store_gift_card_50?$TwoColumn_Large$$",
    },
    {
        id: 5,
        title: "Gift Card 60€",
        order: 'GiftCard',
        discount: 4,
        price: 55.99,
        image_url: "https://media.direct.playstation.com/is/image/psdglobal/IT_ps_store_gift_card_60_V2?$TwoColumn_Large$",
    },
    {
        id: 6,
        title: "Gift Card 80€",
        order: 'GiftCard',
        discount: 5,
        price: 74.99,
        image_url: "https://media.direct.playstation.com/is/image/psdglobal/IT_ps_store_gift_card_80_V2?$TwoColumn_Large$",
    },
    {
        id: 7,
        title: "Gift Card 100€",
        order: 'GiftCard',
        discount: 10,
        price: 89.99,
        image_url: "https://media.direct.playstation.com/is/image/psdglobal/IT_ps_store_gift_card_100?$TwoColumn_Large$",
    },
    {
        id: 8,
        title: "Gift Card 160€",
        order: 'GiftCard',
        discount: 15,
        price: 144.99,
        image_url: "https://media.direct.playstation.com/is/image/psdglobal/IT_ps_store_gift_card_160_V2?$TwoColumn_Large$",
    },

    {
        id: 9,
        title: "XBOX Gift Card 10€",
        order: 'GiftCard',
        discount: 1,
        price: 8.99,
        image_url: "https://cdn.cdkeys.com/700x700/media/catalog/product/1/0/10euro.jpg",
    },
    {
        id: 10,
        title: "XBOX Gift Card 20€",
        order: 'GiftCard',
        discount: 2,
        price: 17.99,
        image_url: "https://gaming-cdn.com/images/products/296/616x353/carta-regalo-xbox-live-20eur-zona-euro-eur20-card-xbox-one-xbox-series-x-s-gioco-microsoft-store-europe-cover.jpg?v=1711451809",
    },
    {
        id: 11,
        title: "XBOX Gift Card 30€",
        order: 'GiftCard',
        discount: 5,
        price: 24.99,
        image_url: "https://www.instant-gaming.com/images/products/299/380x218/299.jpg?v=1711451821",
    },
    {
        id: 12,
        title: "XBOX Gift Card 50€",
        order: 'GiftCard',
        discount: 8,
        price: 41.99,
        image_url: "https://www.instant-gaming.com/images/products/4/380x218/4.jpg?v=1711450096",
    },
    {
        id: 13,
        title: "XBOX Gift Card 75€",
        order: 'GiftCard',
        discount: 10,
        price: 64.99,
        image_url: "https://www.instant-gaming.com/images/products/11038/380x218/11038.jpg?v=1711450051",
    },
    {
        id: 14,
        title: "Nintendo EShop Card 15€",
        order: 'GiftCard',
        discount: 4,
        price: 14.39,
        image_url: "https://gaming-cdn.com/images/products/2356/616x353/nintendo-eshop-card-15eur-eur15-card-switch-game-nintendo-eshop-europe-cover.jpg?v=1713517257",
    },
    {
        id: 15,
        title: "Nintendo EShop Card 25€",
        order: 'GiftCard',
        discount: 6,
        price: 23.49,
        image_url: "https://gaming-cdn.com/images/products/2355/616x353/nintendo-eshop-card-25eur-eur25-card-switch-game-nintendo-eshop-europe-cover.jpg?v=1713517254",
    },
    {
        id: 16,
        title: "Nintendo EShop Card 50€",
        order: 'GiftCard',
        discount: 8,
        price: 45.99,
        image_url: "https://gaming-cdn.com/images/products/4931/616x353/nintendo-eshop-card-50eur-eur50-card-switch-game-nintendo-eshop-europe-cover.jpg?v=1713517264",
    },
    {
        id: 17,
        title: "Nintendo EShop Card 75€",
        order: 'GiftCard',
        discount: 8,
        price: 68.99,
        image_url: "https://gaming-cdn.com/images/products/14096/616x353/nintendo-eshop-card-75eur-eur75-card-switch-game-nintendo-eshop-europe-cover.jpg?v=1694007141",
    },
    {
        id: 18,
        title: "Nintendo EShop Card 100€",
        order: 'GiftCard',
        discount: 8,
        price: 91.99,
        image_url: "https://gaming-cdn.com/images/products/14097/616x353/nintendo-eshop-card-100eur-eur100-card-switch-game-nintendo-eshop-europe-cover.jpg?v=1694007138",
    }
];

const app = express();
app.use(cors());

app.get('/api/giftCard', (req, res) => {
    res.json(giftCard);
});

const port = 5002;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});