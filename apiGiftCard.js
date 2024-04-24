import cors from "cors"
import express from "express"

const giftCard = [
    {
        id: 1,
        title: "GiftCard PlayStation",
        order: 'GiftCard',
        discount: 1,
        price: 8.99,
        image_url: "https://gaming-cdn.com/images/products/5533/616x353/playstation-network-card-10eur-10-euros-card-playstation-3-playstation-4-playstation-5-game-playstation-store-italy-cover.jpg?v=1666102544",
    },
    {
        id: 2,
        title: "GiftCard PlayStation",
        order: 'GiftCard',
        discount: 5,
        price: 19.00,
        image_url: "https://gaming-cdn.com/images/products/614/616x353/playstation-network-card-20eur-20-euros-card-playstation-3-playstation-4-playstation-5-game-playstation-store-italy-cover.jpg?v=1666101837",
    },
    {
        id: 3,
        title: "GiftCard PlayStation",
        order: 'GiftCard',
        discount: 3,
        price: 36.99,
        image_url: "https://gaming-cdn.com/images/products/5547/616x353/playstation-network-card-40eur-40-euros-card-playstation-3-playstation-4-playstation-5-game-playstation-store-italy-cover.jpg?v=1666102566",
    },
    {
        id: 4,
        title: "GiftCard PlayStation",
        order: 'GiftCard',
        discount: 3,
        price: 46.99,
        image_url: "https://gaming-cdn.com/images/products/5545/616x353/playstation-network-card-50eur-50-euros-card-playstation-3-playstation-4-playstation-5-game-playstation-store-italy-cover.jpg?v=1666102556",
    },
    {
        id: 5,
        title: "GiftCard PlayStation",
        order: 'GiftCard',
        discount: 4,
        price: 55.99,
        image_url: "https://gaming-cdn.com/images/products/12019/616x353/playstation-network-card-60eur-60-euros-card-playstation-5-playstation-4-game-playstation-store-italy-cover.jpg?v=1697644479",
    },
    {
        id: 6,
        title: "GiftCard PlayStation",
        order: 'GiftCard',
        discount: 5,
        price: 74.99,
        image_url: "https://gaming-cdn.com/images/products/15498/616x353/playstation-network-card-80eur-eur80-card-playstation-4-playstation-5-game-playstation-store-italy-cover.jpg?v=1701699130",
    },
    {
        id: 7,
        title: "GiftCard PlayStation",
        order: 'GiftCard',
        discount: 10,
        price: 89.99,
        image_url: "https://gaming-cdn.com/images/products/12023/616x353/playstation-network-card-100eur-100-euros-card-playstation-5-playstation-4-game-playstation-store-italy-cover.jpg?v=1697644479",
    },
    {
        id: 8,
        title: "GiftCard PlayStation",
        order: 'GiftCard',
        discount: 4,
        price: 114.99,
        image_url: "https://gaming-cdn.com/images/products/12022/616x353/playstation-network-card-120eur-120-euros-card-playstation-5-playstation-4-game-playstation-store-italy-cover.jpg?v=1697644479",
    },
    {
        id: 9,
        title: "GiftCard XBOX",
        order: 'GiftCard',
        discount: 1,
        price: 8.99,
        image_url: "https://gaming-cdn.com/images/products/273/616x353/xbox-gift-card-10eur-euro-area-eur10-card-xbox-one-xbox-series-x-s-game-microsoft-store-europe-cover.jpg?v=1711451788",
    },
    {
        id: 10,
        title: "GiftCard XBOX",
        order: 'GiftCard',
        discount: 2,
        price: 17.99,
        image_url: "https://gaming-cdn.com/images/products/296/616x353/carta-regalo-xbox-live-20eur-zona-euro-eur20-card-xbox-one-xbox-series-x-s-gioco-microsoft-store-europe-cover.jpg?v=1711451809",
    },
    {
        id: 11,
        title: "GiftCard XBOX",
        order: 'GiftCard',
        discount: 5,
        price: 24.99,
        image_url: "https://www.instant-gaming.com/images/products/299/380x218/299.jpg?v=1711451821",
    },
    {
        id: 12,
        title: "GiftCard XBOX",
        order: 'GiftCard',
        discount: 8,
        price: 41.99,
        image_url: "https://www.instant-gaming.com/images/products/4/380x218/4.jpg?v=1711450096",
    },
    {
        id: 13,
        title: "GiftCard XBOX",
        order: 'GiftCard',
        discount: 10,
        price: 64.99,
        image_url: "https://www.instant-gaming.com/images/products/11038/380x218/11038.jpg?v=1711450051",
    },
    {
        id: 14,
        title: "Nintendo EShop Card",
        order: 'GiftCard',
        discount: 4,
        price: 14.39,
        image_url: "https://gaming-cdn.com/images/products/2356/616x353/nintendo-eshop-card-15eur-eur15-card-switch-game-nintendo-eshop-europe-cover.jpg?v=1713517257",
    },
    {
        id: 15,
        title: "Nintendo EShop Card",
        order: 'GiftCard',
        discount: 6,
        price: 23.49,
        image_url: "https://gaming-cdn.com/images/products/2355/616x353/nintendo-eshop-card-25eur-eur25-card-switch-game-nintendo-eshop-europe-cover.jpg?v=1713517254",
    },
    {
        id: 16,
        title: "Nintendo EShop Card",
        order: 'GiftCard',
        discount: 8,
        price: 45.99,
        image_url: "https://gaming-cdn.com/images/products/4931/616x353/nintendo-eshop-card-50eur-eur50-card-switch-game-nintendo-eshop-europe-cover.jpg?v=1713517264",
    },
    {
        id: 17,
        title: "Nintendo EShop Card",
        order: 'GiftCard',
        discount: 8,
        price: 68.99,
        image_url: "https://gaming-cdn.com/images/products/14096/616x353/nintendo-eshop-card-75eur-eur75-card-switch-game-nintendo-eshop-europe-cover.jpg?v=1694007141",
    },
    {
        id: 18,
        title: "Nintendo EShop Card",
        order: 'GiftCard',
        discount: 8,
        price: 91.99,
        image_url: "https://gaming-cdn.com/images/products/14097/616x353/nintendo-eshop-card-100eur-eur100-card-switch-game-nintendo-eshop-europe-cover.jpg?v=1694007138",
    },
    {
        id: 19,
        title: "Steam Gift Card",
        order: 'GiftCard',
        discount: 3,
        price: 19.49,
        image_url: "https://gaming-cdn.com/images/products/808/616x353/steam-gift-card-20eur-20-euros-card-pc-game-steam-cover.jpg?v=1697644479",
    },
    {
        id: 20,
        title: "Steam Gift Card",
        order: 'GiftCard',
        discount: 2,
        price: 24.49,
        image_url: "https://gaming-cdn.com/images/products/13454/616x353/steam-gift-card-25eur-25-euros-card-pc-game-steam-cover.jpg?v=1674549128",
    },
    {
        id: 21,
        title: "Steam Gift Card",
        order: 'GiftCard',
        discount: 2,
        price: 49.25,
        image_url: "https://gaming-cdn.com/images/products/809/616x353/steam-gift-card-50eur-50-euros-card-pc-game-steam-cover.jpg?v=1674143813",
    },
    {
        id: 22,
        title: "Steam Gift Card",
        order: 'GiftCard',
        discount: 1,
        price: 98.99,
        image_url: "https://gaming-cdn.com/images/products/810/616x353/steam-gift-card-100eur-100-euros-card-pc-game-steam-cover.jpg?v=1674143816",
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