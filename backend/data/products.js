// product.js:

const products =[
  {
    "name": "Urban Threads Top 1",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 0,
    "sku": "UR-001",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.5,
    "numReviews": 0
  },
  {
    "name": "Metro Mode Bottom 2",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 3,
    "sku": "ME-002",
    "category": "Bottom Wear",
    "brand": "Metro Mode",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 3.6,
    "numReviews": 7
  },
  {
    "name": "Style Hub Top 3",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 6,
    "sku": "ST-003",
    "category": "Top Wear",
    "brand": "Style Hub",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.7,
    "numReviews": 14
  },
  {
    "name": "Bold Edge Bottom 4",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 9,
    "sku": "BO-004",
    "category": "Bottom Wear",
    "brand": "Bold Edge",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 3.8,
    "numReviews": 21
  },
  {
    "name": "Elegance Wear Top 5",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 12,
    "sku": "EL-005",
    "category": "Top Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.9,
    "numReviews": 28
  },
  {
    "name": "Urban Threads Bottom 6",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 15,
    "sku": "UR-006",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.0,
    "numReviews": 35
  },
  {
    "name": "Metro Mode Top 7",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 18,
    "sku": "ME-007",
    "category": "Top Wear",
    "brand": "Metro Mode",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 4.1,
    "numReviews": 42
  },
  {
    "name": "Style Hub Bottom 8",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 21,
    "sku": "ST-008",
    "category": "Bottom Wear",
    "brand": "Style Hub",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.2,
    "numReviews": 49
  },
  {
    "name": "Bold Edge Top 9",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 24,
    "sku": "BO-009",
    "category": "Top Wear",
    "brand": "Bold Edge",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 4.3,
    "numReviews": 56
  },
  {
    "name": "Elegance Wear Bottom 10",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 27,
    "sku": "EL-010",
    "category": "Bottom Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.4,
    "numReviews": 63
  },
  {
    "name": "Urban Threads Top 11",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 30,
    "sku": "UR-011",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.5,
    "numReviews": 70
  },
  {
    "name": "Metro Mode Bottom 12",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 33,
    "sku": "ME-012",
    "category": "Bottom Wear",
    "brand": "Metro Mode",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 3.6,
    "numReviews": 77
  },
  {
    "name": "Style Hub Top 13",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 36,
    "sku": "ST-013",
    "category": "Top Wear",
    "brand": "Style Hub",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.7,
    "numReviews": 84
  },
  {
    "name": "Bold Edge Bottom 14",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 39,
    "sku": "BO-014",
    "category": "Bottom Wear",
    "brand": "Bold Edge",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 3.8,
    "numReviews": 91
  },
  {
    "name": "Elegance Wear Top 15",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 42,
    "sku": "EL-015",
    "category": "Top Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.9,
    "numReviews": 98
  },
  {
    "name": "Urban Threads Bottom 16",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 45,
    "sku": "UR-016",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.0,
    "numReviews": 5
  },
  {
    "name": "Metro Mode Top 17",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 48,
    "sku": "ME-017",
    "category": "Top Wear",
    "brand": "Metro Mode",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 4.1,
    "numReviews": 12
  },
  {
    "name": "Style Hub Bottom 18",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 1,
    "sku": "ST-018",
    "category": "Bottom Wear",
    "brand": "Style Hub",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.2,
    "numReviews": 19
  },
  {
    "name": "Bold Edge Top 19",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 4,
    "sku": "BO-019",
    "category": "Top Wear",
    "brand": "Bold Edge",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 4.3,
    "numReviews": 26
  },
  {
    "name": "Elegance Wear Bottom 20",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 7,
    "sku": "EL-020",
    "category": "Bottom Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.4,
    "numReviews": 33
  },
  {
    "name": "Urban Threads Top 21",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 10,
    "sku": "UR-021",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.5,
    "numReviews": 40
  },
  {
    "name": "Metro Mode Bottom 22",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 13,
    "sku": "ME-022",
    "category": "Bottom Wear",
    "brand": "Metro Mode",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 3.6,
    "numReviews": 47
  },
  {
    "name": "Style Hub Top 23",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 16,
    "sku": "ST-023",
    "category": "Top Wear",
    "brand": "Style Hub",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.7,
    "numReviews": 54
  },
  {
    "name": "Bold Edge Bottom 24",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 19,
    "sku": "BO-024",
    "category": "Bottom Wear",
    "brand": "Bold Edge",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 3.8,
    "numReviews": 61
  },
  {
    "name": "Elegance Wear Top 25",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 22,
    "sku": "EL-025",
    "category": "Top Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.9,
    "numReviews": 68
  },
  {
    "name": "Urban Threads Bottom 26",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 25,
    "sku": "UR-026",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.0,
    "numReviews": 75
  },
  {
    "name": "Metro Mode Top 27",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 28,
    "sku": "ME-027",
    "category": "Top Wear",
    "brand": "Metro Mode",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 4.1,
    "numReviews": 82
  },
  {
    "name": "Style Hub Bottom 28",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 31,
    "sku": "ST-028",
    "category": "Bottom Wear",
    "brand": "Style Hub",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.2,
    "numReviews": 89
  },
  {
    "name": "Bold Edge Top 29",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 34,
    "sku": "BO-029",
    "category": "Top Wear",
    "brand": "Bold Edge",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 4.3,
    "numReviews": 96
  },
  {
    "name": "Elegance Wear Bottom 30",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 37,
    "sku": "EL-030",
    "category": "Bottom Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.4,
    "numReviews": 3
  },
  {
    "name": "Urban Threads Top 31",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 40,
    "sku": "UR-031",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.5,
    "numReviews": 10
  },
  {
    "name": "Metro Mode Bottom 32",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 43,
    "sku": "ME-032",
    "category": "Bottom Wear",
    "brand": "Metro Mode",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 3.6,
    "numReviews": 17
  },
  {
    "name": "Style Hub Top 33",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 46,
    "sku": "ST-033",
    "category": "Top Wear",
    "brand": "Style Hub",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.7,
    "numReviews": 24
  },
  {
    "name": "Bold Edge Bottom 34",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 49,
    "sku": "BO-034",
    "category": "Bottom Wear",
    "brand": "Bold Edge",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 3.8,
    "numReviews": 31
  },
  {
    "name": "Elegance Wear Top 35",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 2,
    "sku": "EL-035",
    "category": "Top Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.9,
    "numReviews": 38
  },
  {
    "name": "Urban Threads Bottom 36",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 5,
    "sku": "UR-036",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.0,
    "numReviews": 45
  },
  {
    "name": "Metro Mode Top 37",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 8,
    "sku": "ME-037",
    "category": "Top Wear",
    "brand": "Metro Mode",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 4.1,
    "numReviews": 52
  },
  {
    "name": "Style Hub Bottom 38",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 11,
    "sku": "ST-038",
    "category": "Bottom Wear",
    "brand": "Style Hub",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.2,
    "numReviews": 59
  },
  {
    "name": "Bold Edge Top 39",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 14,
    "sku": "BO-039",
    "category": "Top Wear",
    "brand": "Bold Edge",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 4.3,
    "numReviews": 66
  },
  {
    "name": "Elegance Wear Bottom 40",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 17,
    "sku": "EL-040",
    "category": "Bottom Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.4,
    "numReviews": 73
  },
  {
    "name": "Urban Threads Top 41",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 20,
    "sku": "UR-041",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.5,
    "numReviews": 80
  },
  {
    "name": "Metro Mode Bottom 42",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 23,
    "sku": "ME-042",
    "category": "Bottom Wear",
    "brand": "Metro Mode",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 3.6,
    "numReviews": 87
  },
  {
    "name": "Style Hub Top 43",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 26,
    "sku": "ST-043",
    "category": "Top Wear",
    "brand": "Style Hub",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.7,
    "numReviews": 94
  },
  {
    "name": "Bold Edge Bottom 44",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 29,
    "sku": "BO-044",
    "category": "Bottom Wear",
    "brand": "Bold Edge",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 3.8,
    "numReviews": 1
  },
  {
    "name": "Elegance Wear Top 45",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 32,
    "sku": "EL-045",
    "category": "Top Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.9,
    "numReviews": 8
  },
  {
    "name": "Urban Threads Bottom 46",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 35,
    "sku": "UR-046",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.0,
    "numReviews": 15
  },
  {
    "name": "Metro Mode Top 47",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 38,
    "sku": "ME-047",
    "category": "Top Wear",
    "brand": "Metro Mode",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 4.1,
    "numReviews": 22
  },
  {
    "name": "Style Hub Bottom 48",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 41,
    "sku": "ST-048",
    "category": "Bottom Wear",
    "brand": "Style Hub",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.2,
    "numReviews": 29
  },
  {
    "name": "Bold Edge Top 49",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 44,
    "sku": "BO-049",
    "category": "Top Wear",
    "brand": "Bold Edge",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 4.3,
    "numReviews": 36
  },
  {
    "name": "Elegance Wear Bottom 50",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 47,
    "sku": "EL-050",
    "category": "Bottom Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.4,
    "numReviews": 43
  },
  {
    "name": "Urban Threads Top 51",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 0,
    "sku": "UR-051",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.5,
    "numReviews": 50
  },
  {
    "name": "Metro Mode Bottom 52",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 3,
    "sku": "ME-052",
    "category": "Bottom Wear",
    "brand": "Metro Mode",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 3.6,
    "numReviews": 57
  },
  {
    "name": "Style Hub Top 53",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 6,
    "sku": "ST-053",
    "category": "Top Wear",
    "brand": "Style Hub",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.7,
    "numReviews": 64
  },
  {
    "name": "Bold Edge Bottom 54",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 9,
    "sku": "BO-054",
    "category": "Bottom Wear",
    "brand": "Bold Edge",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 3.8,
    "numReviews": 71
  },
  {
    "name": "Elegance Wear Top 55",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 12,
    "sku": "EL-055",
    "category": "Top Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.9,
    "numReviews": 78
  },
  {
    "name": "Urban Threads Bottom 56",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 15,
    "sku": "UR-056",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.0,
    "numReviews": 85
  },
  {
    "name": "Metro Mode Top 57",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 18,
    "sku": "ME-057",
    "category": "Top Wear",
    "brand": "Metro Mode",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 4.1,
    "numReviews": 92
  },
  {
    "name": "Style Hub Bottom 58",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 21,
    "sku": "ST-058",
    "category": "Bottom Wear",
    "brand": "Style Hub",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.2,
    "numReviews": 99
  },
  {
    "name": "Bold Edge Top 59",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 24,
    "sku": "BO-059",
    "category": "Top Wear",
    "brand": "Bold Edge",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 4.3,
    "numReviews": 6
  },
  {
    "name": "Elegance Wear Bottom 60",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 27,
    "sku": "EL-060",
    "category": "Bottom Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.4,
    "numReviews": 13
  },
  {
    "name": "Urban Threads Top 61",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 30,
    "sku": "UR-061",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.5,
    "numReviews": 20
  },
  {
    "name": "Metro Mode Bottom 62",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 33,
    "sku": "ME-062",
    "category": "Bottom Wear",
    "brand": "Metro Mode",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 3.6,
    "numReviews": 27
  },
  {
    "name": "Style Hub Top 63",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 36,
    "sku": "ST-063",
    "category": "Top Wear",
    "brand": "Style Hub",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.7,
    "numReviews": 34
  },
  {
    "name": "Bold Edge Bottom 64",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 39,
    "sku": "BO-064",
    "category": "Bottom Wear",
    "brand": "Bold Edge",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 3.8,
    "numReviews": 41
  },
  {
    "name": "Elegance Wear Top 65",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 42,
    "sku": "EL-065",
    "category": "Top Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.9,
    "numReviews": 48
  },
  {
    "name": "Urban Threads Bottom 66",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 45,
    "sku": "UR-066",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.0,
    "numReviews": 55
  },
  {
    "name": "Metro Mode Top 67",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 48,
    "sku": "ME-067",
    "category": "Top Wear",
    "brand": "Metro Mode",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 4.1,
    "numReviews": 62
  },
  {
    "name": "Style Hub Bottom 68",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 1,
    "sku": "ST-068",
    "category": "Bottom Wear",
    "brand": "Style Hub",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.2,
    "numReviews": 69
  },
  {
    "name": "Bold Edge Top 69",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 4,
    "sku": "BO-069",
    "category": "Top Wear",
    "brand": "Bold Edge",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 4.3,
    "numReviews": 76
  },
  {
    "name": "Elegance Wear Bottom 70",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 7,
    "sku": "EL-070",
    "category": "Bottom Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.4,
    "numReviews": 83
  },
  {
    "name": "Urban Threads Top 71",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 10,
    "sku": "UR-071",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.5,
    "numReviews": 90
  },
  {
    "name": "Metro Mode Bottom 72",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 13,
    "sku": "ME-072",
    "category": "Bottom Wear",
    "brand": "Metro Mode",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 3.6,
    "numReviews": 97
  },
  {
    "name": "Style Hub Top 73",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 16,
    "sku": "ST-073",
    "category": "Top Wear",
    "brand": "Style Hub",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.7,
    "numReviews": 4
  },
  {
    "name": "Bold Edge Bottom 74",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 19,
    "sku": "BO-074",
    "category": "Bottom Wear",
    "brand": "Bold Edge",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 3.8,
    "numReviews": 11
  },
  {
    "name": "Elegance Wear Top 75",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 22,
    "sku": "EL-075",
    "category": "Top Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.9,
    "numReviews": 18
  },
  {
    "name": "Urban Threads Bottom 76",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 25,
    "sku": "UR-076",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.0,
    "numReviews": 25
  },
  {
    "name": "Metro Mode Top 77",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 28,
    "sku": "ME-077",
    "category": "Top Wear",
    "brand": "Metro Mode",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 4.1,
    "numReviews": 32
  },
  {
    "name": "Style Hub Bottom 78",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 31,
    "sku": "ST-078",
    "category": "Bottom Wear",
    "brand": "Style Hub",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.2,
    "numReviews": 39
  },
  {
    "name": "Bold Edge Top 79",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 34,
    "sku": "BO-079",
    "category": "Top Wear",
    "brand": "Bold Edge",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 4.3,
    "numReviews": 46
  },
  {
    "name": "Elegance Wear Bottom 80",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 37,
    "sku": "EL-080",
    "category": "Bottom Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.4,
    "numReviews": 53
  },
  {
    "name": "Urban Threads Top 81",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 40,
    "sku": "UR-081",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.5,
    "numReviews": 60
  },
  {
    "name": "Metro Mode Bottom 82",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 43,
    "sku": "ME-082",
    "category": "Bottom Wear",
    "brand": "Metro Mode",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 3.6,
    "numReviews": 67
  },
  {
    "name": "Style Hub Top 83",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 46,
    "sku": "ST-083",
    "category": "Top Wear",
    "brand": "Style Hub",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.7,
    "numReviews": 74
  },
  {
    "name": "Bold Edge Bottom 84",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 49,
    "sku": "BO-084",
    "category": "Bottom Wear",
    "brand": "Bold Edge",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 3.8,
    "numReviews": 81
  },
  {
    "name": "Elegance Wear Top 85",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 2,
    "sku": "EL-085",
    "category": "Top Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.9,
    "numReviews": 88
  },
  {
    "name": "Urban Threads Bottom 86",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 5,
    "sku": "UR-086",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.0,
    "numReviews": 95
  },
  {
    "name": "Metro Mode Top 87",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 8,
    "sku": "ME-087",
    "category": "Top Wear",
    "brand": "Metro Mode",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 4.1,
    "numReviews": 2
  },
  {
    "name": "Style Hub Bottom 88",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 11,
    "sku": "ST-088",
    "category": "Bottom Wear",
    "brand": "Style Hub",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.2,
    "numReviews": 9
  },
  {
    "name": "Bold Edge Top 89",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 14,
    "sku": "BO-089",
    "category": "Top Wear",
    "brand": "Bold Edge",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 4.3,
    "numReviews": 16
  },
  {
    "name": "Elegance Wear Bottom 90",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 17,
    "sku": "EL-090",
    "category": "Bottom Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.4,
    "numReviews": 23
  },
  {
    "name": "Urban Threads Top 91",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 20,
    "sku": "UR-091",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.5,
    "numReviews": 30
  },
  {
    "name": "Metro Mode Bottom 92",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 23,
    "sku": "ME-092",
    "category": "Bottom Wear",
    "brand": "Metro Mode",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 3.6,
    "numReviews": 37
  },
  {
    "name": "Style Hub Top 93",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 26,
    "sku": "ST-093",
    "category": "Top Wear",
    "brand": "Style Hub",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 3.7,
    "numReviews": 44
  },
  {
    "name": "Bold Edge Bottom 94",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 29,
    "sku": "BO-094",
    "category": "Bottom Wear",
    "brand": "Bold Edge",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 3.8,
    "numReviews": 51
  },
  {
    "name": "Elegance Wear Top 95",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 32,
    "sku": "EL-095",
    "category": "Top Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Red"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 3.9,
    "numReviews": 58
  },
  {
    "name": "Urban Threads Bottom 96",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 29.99,
    "discountPrice": 29.99,
    "countInStock": 35,
    "sku": "UR-096",
    "category": "Bottom Wear",
    "brand": "Urban Threads",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Red",
      "Black"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.0,
    "numReviews": 65
  },
  {
    "name": "Metro Mode Top 97",
    "description": "Cotton top wear item designed for men under the Business Casual line.",
    "price": 39.99,
    "discountPrice": 38.49,
    "countInStock": 38,
    "sku": "ME-097",
    "category": "Top Wear",
    "brand": "Metro Mode",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Black",
      "Blue"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1560464024-54e05c1cb0fe?auto=format&fit=crop&w=500",
        "altText": "Man wearing a blue button-down Oxford shirt"
      }
    ],
    "rating": 4.1,
    "numReviews": 72
  },
  {
    "name": "Style Hub Bottom 98",
    "description": "Denim bottom wear item designed for men under the Weekend Vibes line.",
    "price": 49.99,
    "discountPrice": 46.99,
    "countInStock": 41,
    "sku": "ST-098",
    "category": "Bottom Wear",
    "brand": "Style Hub",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blue",
      "White"
    ],
    "collections": "Weekend Vibes",
    "material": "Denim",
    "gender": "Men",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1531966668630-d7a99b27f590?auto=format&fit=crop&w=500",
        "altText": "Woman wearing a white fashion blouse"
      }
    ],
    "rating": 4.2,
    "numReviews": 79
  },
  {
    "name": "Bold Edge Top 99",
    "description": "Polyester top wear item designed for women under the Summer Essentials line.",
    "price": 59.99,
    "discountPrice": 55.49,
    "countInStock": 44,
    "sku": "BO-099",
    "category": "Top Wear",
    "brand": "Bold Edge",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige"
    ],
    "collections": "Summer Essentials",
    "material": "Polyester",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1583007971185-b7ef5a7a35d0?auto=format&fit=crop&w=500",
        "altText": "Pair of slim-fit men's chinos"
      }
    ],
    "rating": 4.3,
    "numReviews": 86
  },
  {
    "name": "Elegance Wear Bottom 100",
    "description": "Linen Blend bottom wear item designed for women under the Formal Attire line.",
    "price": 69.99,
    "discountPrice": 63.99,
    "countInStock": 47,
    "sku": "EL-100",
    "category": "Bottom Wear",
    "brand": "Elegance Wear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Gray"
    ],
    "collections": "Formal Attire",
    "material": "Linen Blend",
    "gender": "Women",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1585386959984-a415522c12f0?auto=format&fit=crop&w=500",
        "altText": "Woman wearing flowy palazzo pants"
      }
    ],
    "rating": 4.4,
    "numReviews": 93
  }
]

module.exports = products;
