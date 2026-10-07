const products = [
    {
        id: 1,
        name: "Premium Kitchen Storage Container",
        slug: "premium-kitchen-storage-container",
        category: "kitchen",
        image:
            "https://99wholesale.com/cdn/shop/files/Plastic_Oil_Spill_Spoon_Resting_Tray.png?v=1762340811&width=600",
        price: 99,
        rating: 4.5,
        reviews: 120,
        description:
            "Premium kitchen storage container designed to keep your kitchen essentials organized and easily accessible. Its compact and practical design makes it suitable for everyday kitchen use.",
    },

    {
        id: 2,
        name: "Multipurpose Kitchen Organizer",
        slug: "multipurpose-kitchen-organizer",
        category: "kitchen",
        image:
            "https://99wholesale.com/cdn/shop/files/Plastic_Oil_Spill_Spoon_Resting_Tray.png?v=1762340811&width=600",

        price: 99,
        rating: 4.2,
        reviews: 86,
        description:
            "A multipurpose kitchen organizer that helps you arrange your kitchen accessories neatly. Perfect for keeping frequently used items organized and saving valuable kitchen space.",
    },

    {
        id: 3,
        name: "Kitchen Utility Tool",
        slug: "kitchen-utility-tool",
        category: "kitchen",
        image:
            "https://99wholesale.com/cdn/shop/files/Plastic_Oil_Spill_Spoon_Resting_Tray.png?v=1762340811&width=600",
        price: 99,
        rating: 4.4,
        reviews: 92,
        description:
            "Useful kitchen utility tool made for convenient everyday cooking and kitchen tasks. Its lightweight and practical design makes kitchen work easier and more comfortable.",
    },

    {
        id: 4,
        name: "Cosmetic Organizer For Women",
        slug: "cosmetic-organizer-for-women",
        category: "for-women",
        image:
            "https://99wholesale.com/cdn/shop/files/16_Cavity_Cosmetic_Organiser.png?v=1763642075&width=533",
        price: 99,
        rating: 4.5,
        reviews: 95,
        description:
            "Stylish cosmetic organizer designed to keep makeup, beauty products and accessories neatly arranged. Its compact design is perfect for everyday use at home or while travelling.",
    },

    {
        id: 5,
        name: "Makeup Storage Organizer",
        slug: "makeup-storage-organizer",
        category: "for-women",
        image:
            "https://99wholesale.com/cdn/shop/files/16_Cavity_Cosmetic_Organiser.png?v=1763642075&width=533",
        price: 99,
        rating: 4.3,
        reviews: 78,
        description:
            "Convenient makeup storage organizer that keeps cosmetics and beauty essentials in one place. It helps maintain a clean and organized dressing table while making products easy to find.",
    },

    {
        id: 6,
        name: "Men Travel Duffle Bag",
        slug: "men-travel-duffle-bag",
        category: "for-men",
        image:
            "https://99wholesale.com/cdn/shop/collections/WD0348-1-Folding-Shopping-Bag-Duffle-Bag-Style_All_951_1_ec5e9abe-389d-4e68-8bb5-284ba06da665.jpg?v=1742297161&width=270",
        price: 99,
        rating: 4.6,
        reviews: 145,
        description:
            "Spacious and practical travel duffle bag designed for carrying clothes, accessories and other travel essentials. Ideal for short trips, gym visits and everyday travel needs.",
    },

    {
        id: 7,
        name: "Men Fashion Accessories",
        slug: "men-fashion-accessories",
        category: "for-men",
        image:
            "https://99wholesale.com/cdn/shop/collections/WD0348-1-Folding-Shopping-Bag-Duffle-Bag-Style_All_951_1_ec5e9abe-389d-4e68-8bb5-284ba06da665.jpg?v=1742297161&width=270",
        price: 99,
        rating: 4.3,
        reviews: 64,
        description:
            "Useful and stylish men's fashion accessories designed to complement everyday outfits. A practical collection for adding convenience and style to your daily lifestyle.",
    },

    {
        id: 8,
        name: "Foldable Shopping Bag",
        slug: "foldable-shopping-bag",
        category: "bags",
        image:
            "https://99wholesale.com/cdn/shop/files/BAG_COVER.png?v=1765944487&width=360",

        price: 99,
        rating: 4.4,
        reviews: 91,
        description:
            "Lightweight foldable shopping bag designed for convenient everyday shopping. It can be easily folded and stored when not in use, making it a practical reusable bag.",
    },

    {
        id: 9,
        name: "Travel Storage Bag",
        slug: "travel-storage-bag",
        category: "bags",
        image:
            "https://99wholesale.com/cdn/shop/files/BAG_COVER.png?v=1765944487&width=360",
        price: 99,
        rating: 4.5,
        reviews: 73,
        description:
            "Practical travel storage bag designed to organize clothes, accessories and other travel essentials. Its convenient design makes packing and carrying your belongings easier.",
    },

    {
        id: 10,
        name: "Wireless Bluetooth Speaker",
        slug: "wireless-bluetooth-speaker",
        category: "electronics",
        image:
            "https://99wholesale.com/cdn/shop/files/Untitled_design_35_1d929437-dff1-46f7-864e-84c9f88a523e.png?v=1765364200&width=600",
        price: 99,
        rating: 4.3,
        reviews: 210,
        description:
            "Compact wireless Bluetooth speaker designed for enjoying music, podcasts and entertainment anywhere. Its portable design makes it suitable for home, travel and outdoor use.",
    },

    {
        id: 11,
        name: "Smart Electronic Gadget",
        slug: "smart-electronic-gadget",
        category: "electronics",
        image:
            "https://99wholesale.com/cdn/shop/files/Untitled_design_35_1d929437-dff1-46f7-864e-84c9f88a523e.png?v=1765364200&width=600",
        price: 99,
        rating: 4.5,
        reviews: 164,
        description:
            "Useful smart electronic gadget designed to make everyday activities more convenient. Its compact and modern design makes it a practical addition to your daily tech collection.",
    },

    {
        id: 12,
        name: "Personal Care Product",
        slug: "personal-care-product",
        category: "personal-care",
        image:
            "https://99wholesale.com/cdn/shop/files/ice1.webp?v=1762846344&width=533",
        price: 99,
        rating: 4.4,
        reviews: 82,
        description:
            "Everyday personal care product designed to support your daily grooming and self-care routine. Convenient to use and suitable for regular personal care needs.",
    },

    {
        id: 13,
        name: "Daily Grooming Product",
        slug: "daily-grooming-product",
        category: "personal-care",
        image:
            "https://99wholesale.com/cdn/shop/files/ice1.webp?v=1762846344&width=533",
        price: 99,
        rating: 4.2,
        reviews: 65,
        description:
            "Practical daily grooming product made for convenient personal care. Its easy-to-use design makes it suitable for maintaining a simple and comfortable grooming routine.",
    },

    {
        id: 14,
        name: "Office Stationery Set",
        slug: "office-stationery-set",
        category: "office-stationery",
        image:
            "https://99wholesale.com/cdn/shop/files/61tTZ2F3pfL.jpg?v=1785991391&width=533",
        price: 99,
        rating: 4.5,
        reviews: 58,
        description:
            "Useful office stationery set containing everyday essentials for office, school and home use. A convenient choice for keeping your writing and work supplies organized.",
    },

    {
        id: 15,
        name: "Baby Care Essential",
        slug: "baby-care-essential",
        category: "baby-care",
        image:
            "https://99wholesale.com/cdn/shop/files/81M8Ko1ueoL._SL1500.jpg?v=1760435183&width=1426",
        price: 99,
        rating: 4.6,
        reviews: 112,
        description:
            "Useful baby care essential designed to provide convenience for parents and everyday baby needs. Its practical design makes it suitable for regular baby care routines.",
    },

    {
        id: 16,
        name: "Artificial Jewelry Set",
        slug: "artificial-jewelry-set",
        category: "jewelry",
        image:
            "https://99wholesale.com/cdn/shop/files/Untitled_design_23_c157c417-0c3f-450a-ab17-fb252dbd9066.png?v=1770097181&width=713",
        price: 99,
        rating: 4.5,
        reviews: 118,
        description:
            "Elegant artificial jewelry set designed to add a stylish touch to your everyday and special occasion outfits. A beautiful and affordable accessory choice.",
    },

    {
        id: 17,
        name: "Stylish Necklace Set",
        slug: "stylish-necklace-set",
        category: "jewelry",
        image:
            "https://99wholesale.com/cdn/shop/files/Untitled_design_23_c157c417-0c3f-450a-ab17-fb252dbd9066.png?v=1770097181&width=713",
        price: 99,
        rating: 4.4,
        reviews: 83,
        description:
            "Stylish necklace set designed to enhance your look with an elegant and fashionable touch. Perfect for everyday styling as well as special occasions.",
    },

    {
        id: 18,
        name: "Sports Fitness Product",
        slug: "sports-fitness-product",
        category: "sports",
        image:
            "https://99wholesale.com/cdn/shop/files/61EipzdgiLL._SL1500.jpg?v=1765001335&width=533",
        price: 99,
        rating: 4.5,
        reviews: 104,
        description:
            "Useful sports and fitness product designed to support your active lifestyle. Suitable for workouts, exercise sessions and everyday fitness activities.",
    },
];

export default products;