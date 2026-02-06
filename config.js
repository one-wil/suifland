
// =============================================================================
// ⚙️ Fichier de paramètres principal du magasin
// =============================================================================

const STORE_CONFIG = {
  "PRODUCTS": {},
  "DELIVERY_PRICES": {
    "01 - أدرار": {
      "home": 1100,
      "desk": 600
    },
    "02 - الشلف": {
      "home": 700,
      "desk": 400
    },
    "03 - الأغواط": {
      "home": 1000,
      "desk": 600
    },
    "04 - أم البواقي": {
      "home": 650,
      "desk": 400
    },
    "05 - باتنة": {
      "home": 700,
      "desk": 400
    },
    "06 - بجاية": {
      "home": 700,
      "desk": 400
    },
    "07 - بسكرة": {
      "home": 900,
      "desk": 500
    },
    "08 - بشار": {
      "home": 1100,
      "desk": 600
    },
    "09 - البليدة": {
      "home": 500,
      "desk": 250
    },
    "10 - البويرة": {
      "home": 700,
      "desk": 400
    },
    "11 - تمنراست": {
      "home": 1300,
      "desk": 800
    },
    "12 - تبسة": {
      "home": 700,
      "desk": 400
    },
    "13 - تلمسان": {
      "home": 800,
      "desk": 400
    },
    "14 - تيارت": {
      "home": 800,
      "desk": 400
    },
    "15 - تيزي وزو": {
      "home": 700,
      "desk": 400
    },
    "16 - الجزائر": {
      "home": 500,
      "desk": 250
    },
    "17 - الجلفة": {
      "home": 900,
      "desk": 500
    },
    "18 - جيجل": {
      "home": 700,
      "desk": 400
    },
    "19 - سطيف": {
      "home": 700,
      "desk": 400
    },
    "20 - سعيدة": {
      "home": 800,
      "desk": 400
    },
    "21 - سكيكدة": {
      "home": 600,
      "desk": 400
    },
    "22 - سيدي بلعباس": {
      "home": 700,
      "desk": 400
    },
    "23 - عنابة": {
      "home": 700,
      "desk": 400
    },
    "24 - قالمة": {
      "home": 600,
      "desk": 400
    },
    "25 - قسنطينة": {
      "home": 600,
      "desk": 400
    },
    "26 - المدية": {
      "home": 700,
      "desk": 400
    },
    "27 - مستغانم": {
      "home": 700,
      "desk": 400
    },
    "28 - المسيلة": {
      "home": 800,
      "desk": 400
    },
    "29 - معسكر": {
      "home": 700,
      "desk": 400
    },
    "30 - ورقلة": {
      "home": 900,
      "desk": 500
    },
    "31 - وهران": {
      "home": 800,
      "desk": 400
    },
    "32 - البيض": {
      "home": 800,
      "desk": 500
    },
    "33 - إليزي": {
      "home": 1300,
      "desk": 600
    },
    "34 - برج بوعريريج": {
      "home": 700,
      "desk": 400
    },
    "35 - بومرداس": {
      "home": 700,
      "desk": 400
    },
    "36 - الطارف": {
      "home": 700,
      "desk": 400
    },
    "37 - تندوف": {
      "home": 1300,
      "desk": 600
    },
    "38 - تيسمسيلت": {
      "home": 800,
      "desk": 400
    },
    "39 - الوادي": {
      "home": 900,
      "desk": 500
    },
    "40 - خنشلة": {
      "home": 700,
      "desk": 500
    },
    "41 - سوق أهراس": {
      "home": 700,
      "desk": 400
    },
    "42 - تيبازة": {
      "home": 700,
      "desk": 400
    },
    "43 - ميلة": {
      "home": 700,
      "desk": 450
    },
    "44 - عين الدفلى": {
      "home": 700,
      "desk": 400
    },
    "45 - النعامة": {
      "home": 800,
      "desk": 500
    },
    "46 - عين تموشنت": {
      "home": 800,
      "desk": 400
    },
    "47 - غرداية": {
      "home": 900,
      "desk": 500
    },
    "48 - غليزان": {
      "home": 700,
      "desk": 400
    },
    "49 - تيميمون": {
      "home": 1100,
      "desk": 600
    },
    "50 - برج باجي مختار": {
      "home": 1200,
      "desk": 650
    },
    "51 - أولاد جلال": {
      "home": 900,
      "desk": 500
    },
    "52 - بني عباس": {
      "home": 1100,
      "desk": 600
    },
    "53 - عين صالح": {
      "home": 1300,
      "desk": 700
    },
    "54 - عين قزام": {
      "home": 1300,
      "desk": 700
    },
    "55 - توقرت": {
      "home": 950,
      "desk": 550
    },
    "56 - جانت": {
      "home": 1100,
      "desk": 500
    },
    "57 - المغير": {
      "home": 950,
      "desk": 550
    },
    "58 - المنيعة": {
      "home": 900,
      "desk": 400
    }
  },
  "FREE_DELIVERY": {
    "desk": {
      "enabled": true,
      "minAmount": 0,
      "wilayas": [],
      "minQuantity": 1
    },
    "home": {
      "enabled": false,
      "minAmount": 0,
      "wilayas": [],
      "minQuantity": 1
    },
    "freeDeliveryProducts": [
      1765137505304,
      1765145035052,
      1765145814607
    ]
  },
  "DISCOUNTS": {
    "enableQuantityDiscount": false,
    "minQuantityForDiscount": 0,
    "discountPerItem": 0,
    "discountScope": "selected",
    "discountProducts": [],
    "enablePromotionalDiscount": false,
    "promotionalDiscountPercent": 0,
    "promotionalDiscountedPrice": null,
    "promoDiscountScope": "selected",
    "promoDiscountProducts": []
  },
  "STORE_INFO": {
    "name": "",
    "storeIcon": "-",
    "storeTitle": "-",
    "tagline": "",
    "phoneNumbers": [],
    "logo": "",
    "facebookUrl": "",
    "instagramUrl": "",
    "messengerUrl": "",
    "viberNumber": "",
    "whatsappNumber": "",
    "whatsappUrl": "",
    "tiktokUrl": ""
  },
  "GOOGLE_SHEETS": {
    "url": "https://docs.google.com/spreadsheets/d/1B6um1tNw0Uh4NJvLjF5zUX6palzubXv1UeH5gSIt_Go/edit?gid=774585379#gid=774585379",
    "description": "  جدول الطلبات",
    "autoUpdate": true
  },
  "AVAILABLE_COLORS": [
    "أبيض",
    "أسود",
    "أحمر",
    "أزرق",
    "أخضر",
    "وردي",
    "رمادي",
    "أصفر",
    "vert motard",
    "Vert pistache",
    "Beige clair",
    "Marron",
    "Marron clair",
    "Vert  Kaki"
  ],
  "AVAILABLE_SIZES": [
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "38-40",
    "42-44",
    "46-48"
  ],
  "SIZE_GUIDE": {
    "38": {
      "heightFrom": 150,
      "heightTo": 160,
      "weightFrom": 50,
      "weightTo": 70,
      "enabled": false
    },
    "39": {
      "heightFrom": 152,
      "heightTo": 162,
      "weightFrom": 53,
      "weightTo": 74,
      "enabled": false
    },
    "40": {
      "heightFrom": 154,
      "heightTo": 164,
      "weightFrom": 56,
      "weightTo": 78,
      "enabled": false
    },
    "41": {
      "heightFrom": 156,
      "heightTo": 166,
      "weightFrom": 59,
      "weightTo": 82,
      "enabled": false
    },
    "42": {
      "heightFrom": 158,
      "heightTo": 168,
      "weightFrom": 62,
      "weightTo": 86,
      "enabled": false
    },
    "43": {
      "heightFrom": 160,
      "heightTo": 170,
      "weightFrom": 65,
      "weightTo": 90,
      "enabled": false
    },
    "44": {
      "heightFrom": 162,
      "heightTo": 172,
      "weightFrom": 68,
      "weightTo": 94,
      "enabled": false
    },
    "45": {
      "heightFrom": 164,
      "heightTo": 174,
      "weightFrom": 71,
      "weightTo": 98,
      "enabled": false
    },
    "46": {
      "heightFrom": 166,
      "heightTo": 176,
      "weightFrom": 74,
      "weightTo": 102,
      "enabled": false
    },
    "47": {
      "heightFrom": 168,
      "heightTo": 178,
      "weightFrom": 77,
      "weightTo": 106,
      "enabled": false
    },
    "48": {
      "heightFrom": 170,
      "heightTo": 180,
      "weightFrom": 80,
      "weightTo": 110,
      "enabled": false
    },
    "49": {
      "heightFrom": 172,
      "heightTo": 182,
      "weightFrom": 83,
      "weightTo": 114,
      "enabled": false
    },
    "S": {
      "heightFrom": 120,
      "heightTo": 130,
      "weightFrom": 14,
      "weightTo": 16,
      "enabled": false
    },
    "M": {
      "heightFrom": 130,
      "heightTo": 150,
      "weightFrom": 16,
      "weightTo": 22,
      "enabled": false
    },
    "L": {
      "heightFrom": 180,
      "heightTo": 195,
      "weightFrom": 70,
      "weightTo": 90,
      "enabled": false
    },
    "XL": {
      "heightFrom": 185,
      "heightTo": 200,
      "weightFrom": 85,
      "weightTo": 110,
      "enabled": false
    },
    "XXL": {
      "heightFrom": 190,
      "heightTo": 205,
      "weightFrom": 95,
      "weightTo": 120,
      "enabled": false
    },
    "S1": {
      "heightFrom": 160,
      "heightTo": 180,
      "weightFrom": 50,
      "weightTo": 80,
      "enabled": false
    },
    "S2": {
      "heightFrom": 160,
      "heightTo": 180,
      "weightFrom": 50,
      "weightTo": 80,
      "enabled": false
    },
    "S3": {
      "heightFrom": 160,
      "heightTo": 180,
      "weightFrom": 50,
      "weightTo": 80,
      "enabled": false
    },
    "M1": {
      "heightFrom": 160,
      "heightTo": 180,
      "weightFrom": 50,
      "weightTo": 80,
      "enabled": false
    },
    "M2": {
      "heightFrom": 160,
      "heightTo": 180,
      "weightFrom": 50,
      "weightTo": 80,
      "enabled": false
    },
    "M3": {
      "heightFrom": 160,
      "heightTo": 180,
      "weightFrom": 50,
      "weightTo": 80,
      "enabled": false
    },
    "XXXL": {
      "heightFrom": 195,
      "heightTo": 210,
      "weightFrom": 105,
      "weightTo": 140,
      "enabled": false
    }
  },
  "POINTS_SYSTEM": {
    "currentPoints": 998,
    "remainingDays": 29,
    "lastReset": "2026-02-04T15:20:41.907Z",
    "planType": "gratuit",
    "monthlyPoints": 1000,
    "resetPeriod": 30,
    "currentMonthDays": 30,
    "lastUpdate": "2025-12-13T18:59:22.674Z",
    "pointsHistory": [
      {
        "date": "2025-12-13T12:05:36.186Z",
        "action": "SYNC_DATA",
        "pointsBefore": 484,
        "pointsAfter": 482,
        "user": "admin"
      },
      {
        "date": "2025-12-13T12:06:34.383Z",
        "action": "UPLOAD_IMAGE",
        "pointsBefore": 482,
        "pointsAfter": 481,
        "user": "admin"
      },
      {
        "date": "2025-12-13T12:09:33.670Z",
        "action": "SYNC_DATA",
        "pointsBefore": 484,
        "pointsAfter": 482,
        "user": "admin"
      },
      {
        "date": "2025-12-13T12:16:51.121Z",
        "action": "SYNC_DATA",
        "pointsBefore": 484,
        "pointsAfter": 482,
        "user": "admin"
      },
      {
        "date": "2025-12-13T12:29:49.030Z",
        "action": "FULL_SYNC",
        "pointsBefore": 484,
        "pointsAfter": 482,
        "user": "admin"
      },
      {
        "date": "2025-12-13T14:37:02.011Z",
        "action": "FULL_SYNC",
        "pointsBefore": 484,
        "pointsAfter": 482,
        "user": "admin"
      },
      {
        "date": "2025-12-13T14:37:46.228Z",
        "action": "SYNC_DATA",
        "pointsBefore": 482,
        "pointsAfter": 480,
        "user": "admin"
      },
      {
        "date": "2025-12-13T14:41:17.205Z",
        "action": "UPLOAD_IMAGE",
        "pointsBefore": 484,
        "pointsAfter": 483,
        "user": "admin"
      },
      {
        "date": "2025-12-13T14:41:27.220Z",
        "action": "FULL_SYNC",
        "pointsBefore": 483,
        "pointsAfter": 481,
        "user": "admin"
      },
      {
        "date": "2025-12-13T14:46:48.645Z",
        "action": "SYNC_DATA",
        "pointsBefore": 481,
        "pointsAfter": 479,
        "user": "admin"
      }
    ],
    "lastUpdated": "2026-02-05T16:12:50.379Z"
  },
  "PIXEL_CODES": {
    "facebook": {
      "enabled": false,
      "pixelId": "",
      "events": {
        "pageView": true,
        "addToCart": true,
        "purchase": true,
        "initiateCheckout": true,
        "viewContent": true
      }
    },
    "tiktok": {
      "enabled": false,
      "pixelId": "",
      "events": {
        "pageView": true,
        "addToCart": true,
        "purchase": true,
        "initiateCheckout": true,
        "viewContent": true
      }
    }
  },
  "FREE_DELIVERY_PRODUCTS": [
    1765456782838
  ],
  "config": {
    "PRODUCTS": {},
    "DELIVERY_PRICES": {
      "01 - أدرار": {
        "home": 1100,
        "desk": 600
      },
      "02 - الشلف": {
        "home": 700,
        "desk": 400
      },
      "03 - الأغواط": {
        "home": 1000,
        "desk": 600
      },
      "04 - أم البواقي": {
        "home": 650,
        "desk": 400
      },
      "05 - باتنة": {
        "home": 700,
        "desk": 400
      },
      "06 - بجاية": {
        "home": 700,
        "desk": 400
      },
      "07 - بسكرة": {
        "home": 900,
        "desk": 500
      },
      "08 - بشار": {
        "home": 1100,
        "desk": 600
      },
      "09 - البليدة": {
        "home": 500,
        "desk": 250
      },
      "10 - البويرة": {
        "home": 700,
        "desk": 400
      },
      "11 - تمنراست": {
        "home": 1300,
        "desk": 800
      },
      "12 - تبسة": {
        "home": 700,
        "desk": 400
      },
      "13 - تلمسان": {
        "home": 800,
        "desk": 400
      },
      "14 - تيارت": {
        "home": 800,
        "desk": 400
      },
      "15 - تيزي وزو": {
        "home": 700,
        "desk": 400
      },
      "16 - الجزائر": {
        "home": 500,
        "desk": 250
      },
      "17 - الجلفة": {
        "home": 900,
        "desk": 500
      },
      "18 - جيجل": {
        "home": 700,
        "desk": 400
      },
      "19 - سطيف": {
        "home": 700,
        "desk": 400
      },
      "20 - سعيدة": {
        "home": 800,
        "desk": 400
      },
      "21 - سكيكدة": {
        "home": 600,
        "desk": 400
      },
      "22 - سيدي بلعباس": {
        "home": 700,
        "desk": 400
      },
      "23 - عنابة": {
        "home": 700,
        "desk": 400
      },
      "24 - قالمة": {
        "home": 600,
        "desk": 400
      },
      "25 - قسنطينة": {
        "home": 600,
        "desk": 400
      },
      "26 - المدية": {
        "home": 700,
        "desk": 400
      },
      "27 - مستغانم": {
        "home": 700,
        "desk": 400
      },
      "28 - المسيلة": {
        "home": 800,
        "desk": 400
      },
      "29 - معسكر": {
        "home": 700,
        "desk": 400
      },
      "30 - ورقلة": {
        "home": 900,
        "desk": 500
      },
      "31 - وهران": {
        "home": 800,
        "desk": 400
      },
      "32 - البيض": {
        "home": 800,
        "desk": 500
      },
      "33 - إليزي": {
        "home": 1300,
        "desk": 600
      },
      "34 - برج بوعريريج": {
        "home": 700,
        "desk": 400
      },
      "35 - بومرداس": {
        "home": 700,
        "desk": 400
      },
      "36 - الطارف": {
        "home": 700,
        "desk": 400
      },
      "37 - تندوف": {
        "home": 1300,
        "desk": 600
      },
      "38 - تيسمسيلت": {
        "home": 800,
        "desk": 400
      },
      "39 - الوادي": {
        "home": 900,
        "desk": 500
      },
      "40 - خنشلة": {
        "home": 700,
        "desk": 500
      },
      "41 - سوق أهراس": {
        "home": 700,
        "desk": 400
      },
      "42 - تيبازة": {
        "home": 700,
        "desk": 400
      },
      "43 - ميلة": {
        "home": 700,
        "desk": 450
      },
      "44 - عين الدفلى": {
        "home": 700,
        "desk": 400
      },
      "45 - النعامة": {
        "home": 800,
        "desk": 500
      },
      "46 - عين تموشنت": {
        "home": 800,
        "desk": 400
      },
      "47 - غرداية": {
        "home": 900,
        "desk": 500
      },
      "48 - غليزان": {
        "home": 700,
        "desk": 400
      },
      "49 - تيميمون": {
        "home": 1100,
        "desk": 600
      },
      "50 - برج باجي مختار": {
        "home": 1200,
        "desk": 650
      },
      "51 - أولاد جلال": {
        "home": 900,
        "desk": 500
      },
      "52 - بني عباس": {
        "home": 1100,
        "desk": 600
      },
      "53 - عين صالح": {
        "home": 1300,
        "desk": 700
      },
      "54 - عين قزام": {
        "home": 1300,
        "desk": 700
      },
      "55 - توقرت": {
        "home": 950,
        "desk": 550
      },
      "56 - جانت": {
        "home": 1100,
        "desk": 500
      },
      "57 - المغير": {
        "home": 950,
        "desk": 550
      },
      "58 - المنيعة": {
        "home": 900,
        "desk": 400
      }
    },
    "FREE_DELIVERY": {
      "desk": {
        "enabled": false,
        "minQuantity": null,
        "wilayas": []
      },
      "home": {
        "enabled": false,
        "minQuantity": null,
        "wilayas": []
      },
      "freeDeliveryProducts": []
    },
    "DISCOUNTS": {
      "enableQuantityDiscount": false,
      "minQuantityForDiscount": 2,
      "discountPerItem": 300,
      "discountScope": "all",
      "discountProducts": [],
      "enablePromotionalDiscount": false,
      "promotionalDiscountPercent": 20,
      "promotionalDiscountedPrice": 0,
      "promoDiscountScope": "all",
      "promoDiscountProducts": []
    },
    "STORE_INFO": {
      "name": "",
      "storeIcon": "👑",
      "storeTitle": "👑 أحدث موديلات ",
      "tagline": "متجر أفخم الملابس",
      "phoneNumbers": [
        "0xxxxxxxxx",
        "0xxxxxxxxx"
      ],
      "logo": "",
      "facebookUrl": "",
      "instagramUrl": "",
      "messengerUrl": "",
      "viberNumber": "",
      "whatsappNumber": "",
      "whatsappUrl": ""
    },
    "GOOGLE_SHEETS": {
      "url": "",
      "description": "",
      "autoUpdate": false
    },
    "AVAILABLE_COLORS": [
      "أبيض",
      "أسود",
      "أحمر",
      "أزرق",
      "أخضر",
      "وردي",
      "رمادي",
      "أصفر"
    ],
    "AVAILABLE_SIZES": [
      "S",
      "S1",
      "S2",
      "S3",
      "M",
      "M1",
      "M2",
      "M3",
      "L",
      "XL",
      "XXL",
      "XXXL",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50"
    ],
    "SIZE_GUIDE": {
      "38": {
        "heightFrom": 150,
        "heightTo": 160,
        "weightFrom": 50,
        "weightTo": 70,
        "enabled": false
      },
      "39": {
        "heightFrom": 152,
        "heightTo": 162,
        "weightFrom": 53,
        "weightTo": 74,
        "enabled": false
      },
      "40": {
        "heightFrom": 154,
        "heightTo": 164,
        "weightFrom": 56,
        "weightTo": 78,
        "enabled": false
      },
      "41": {
        "heightFrom": 156,
        "heightTo": 166,
        "weightFrom": 59,
        "weightTo": 82,
        "enabled": false
      },
      "42": {
        "heightFrom": 158,
        "heightTo": 168,
        "weightFrom": 62,
        "weightTo": 86,
        "enabled": false
      },
      "43": {
        "heightFrom": 160,
        "heightTo": 170,
        "weightFrom": 65,
        "weightTo": 90,
        "enabled": false
      },
      "44": {
        "heightFrom": 162,
        "heightTo": 172,
        "weightFrom": 68,
        "weightTo": 94,
        "enabled": false
      },
      "45": {
        "heightFrom": 164,
        "heightTo": 174,
        "weightFrom": 71,
        "weightTo": 98,
        "enabled": false
      },
      "46": {
        "heightFrom": 166,
        "heightTo": 176,
        "weightFrom": 74,
        "weightTo": 102,
        "enabled": false
      },
      "47": {
        "heightFrom": 168,
        "heightTo": 178,
        "weightFrom": 77,
        "weightTo": 106,
        "enabled": false
      },
      "48": {
        "heightFrom": 170,
        "heightTo": 180,
        "weightFrom": 80,
        "weightTo": 110,
        "enabled": false
      },
      "49": {
        "heightFrom": 172,
        "heightTo": 182,
        "weightFrom": 83,
        "weightTo": 114,
        "enabled": false
      },
      "S": {
        "heightFrom": 160,
        "heightTo": 175,
        "weightFrom": 50,
        "weightTo": 65,
        "enabled": false
      },
      "M": {
        "heightFrom": 170,
        "heightTo": 180,
        "weightFrom": 65,
        "weightTo": 80,
        "enabled": true
      },
      "L": {
        "heightFrom": 180,
        "heightTo": 195,
        "weightFrom": 70,
        "weightTo": 90,
        "enabled": true
      },
      "XL": {
        "heightFrom": 185,
        "heightTo": 200,
        "weightFrom": 85,
        "weightTo": 110,
        "enabled": true
      },
      "XXL": {
        "heightFrom": 190,
        "heightTo": 205,
        "weightFrom": 95,
        "weightTo": 120,
        "enabled": true
      },
      "S1": {
        "heightFrom": 160,
        "heightTo": 180,
        "weightFrom": 50,
        "weightTo": 80,
        "enabled": false
      },
      "S2": {
        "heightFrom": 160,
        "heightTo": 180,
        "weightFrom": 50,
        "weightTo": 80,
        "enabled": false
      },
      "S3": {
        "heightFrom": 160,
        "heightTo": 180,
        "weightFrom": 50,
        "weightTo": 80,
        "enabled": false
      },
      "M1": {
        "heightFrom": 160,
        "heightTo": 180,
        "weightFrom": 50,
        "weightTo": 80,
        "enabled": false
      },
      "M2": {
        "heightFrom": 160,
        "heightTo": 180,
        "weightFrom": 50,
        "weightTo": 80,
        "enabled": false
      },
      "M3": {
        "heightFrom": 160,
        "heightTo": 180,
        "weightFrom": 50,
        "weightTo": 80,
        "enabled": false
      },
      "XXXL": {
        "heightFrom": 195,
        "heightTo": 210,
        "weightFrom": 105,
        "weightTo": 140,
        "enabled": false
      }
    }
  },
  "storageKeys": {},
  "timestamp": "2025-12-07T10:15:31.349Z",
  "version": "1.0",
  "LANDING_PAGES": {
    "templates": [
      {
        "id": "template1",
        "name": "قالب بسيط",
        "description": "صفحة هبوط بسيطة وعصرية",
        "features": [
          "صورة كبيرة",
          "وصف مختصر",
          "زر شراء واضح"
        ]
      },
      {
        "id": "template2",
        "name": "قالب متميز",
        "description": "صفحة هبوط متكاملة مع مميزات",
        "features": [
          "معرض صور",
          "معلومات مفصلة",
          "أسئلة شائعة",
          "تعليقات العملاء"
        ]
      },
      {
        "id": "template3",
        "name": "قالب ترويجي",
        "description": "صفحة هبوط مخصصة للعروض",
        "features": [
          "عداد تنازلي",
          "عرض خاص",
          "شهادة جودة",
          "ضمان رضا"
        ]
      }
    ],
    "pages": {
      "1766870645677": {
        "productId": 1766870645677,
        "enabled": true,
        "title": "بدلة رياضية",
        "subtitle": "أفضل عرض لهذا المنتج",
        "description": "",
        "template": "template1",
        "features": [
          "جودة عالية",
          "توصيل سريع",
          "ضمان الجودة",
          "دعم فني"
        ],
        "testimonials": [],
        "faq": [],
        "createdAt": "2026-01-16T20:12:16.244Z",
        "updatedAt": "2026-01-16T20:12:16.244Z"
      }
    },
    "analytics": {
      "1766870645677": {
        "views": 0,
        "clicks": 0,
        "conversions": 0,
        "averageTime": 0,
        "lastVisit": null,
        "dailyStats": {},
        "sourceStats": {}
      }
    },
    "settings": {
      "autoGenerate": true,
      "defaultTemplate": "template1",
      "trackClicks": true,
      "trackTime": true,
      "conversionGoal": "purchase"
    }
  },
  "PRODUCT_CATEGORIES": [
    "ملابس أطفال",
    "ملابس رجالية",
    "ملابس نسائية",
    "أحذية",
    "عطور رجالية",
    "عطور نسائية",
    "قبعات",
    "ساعات رجالية",
    "ساعات نسائية"
  ],
  "HAT_TYPES": [
    "بيسبول",
    "بريه",
    "قبعة شمس",
    "قبعة صوف",
    "بكيني",
    "قبعة رياضية",
    "قبعة كلاسيكية"
  ],
  "WATCH_TYPES": [
    "ساعة يد",
    "ساعة حائط",
    "ساعة ذكية",
    "ساعة كوارتز",
    "ساعة ميكانيكية",
    "ساعة فاخرة"
  ],
  "PERFUME_TYPES": [
    "عطر",
    "ماء تواليت",
    "ماء عطر",
    "كريم عطري",
    "سبراي جسم"
  ],
  "PERFUME_NOTES": [
    "حمضيات",
    "زهور",
    "خشب",
    "أعشاب",
    "توابل",
    "فواكه",
    "مسك",
    "عنبر"
  ]
};

// =============================================================================
// 🛍️ Fonction de chargement des produits
// =============================================================================

function loadProductsConfig() {
    return STORE_CONFIG.PRODUCTS;
}

// =============================================================================
// 🚚 Fonction de chargement des prix de livraison
// =============================================================================

function loadDeliveryConfig() {
    return {
        deliveryPrices: STORE_CONFIG.DELIVERY_PRICES || {},
        freeDelivery: STORE_CONFIG.FREE_DELIVERY || {},
        freeDeliveryProducts: STORE_CONFIG.FREE_DELIVERY.freeDeliveryProducts || []
    };
}

// =============================================================================
// 💰 Fonction de chargement des paramètres de réduction
// =============================================================================

function loadDiscountConfig() {
    return STORE_CONFIG.DISCOUNTS || {};
}

// =============================================================================
// 🏪 Fonction de chargement des informations du magasin
// =============================================================================

function loadStoreInfo() {
    return STORE_CONFIG.STORE_INFO || {};
}

// =============================================================================
// 🎨 Fonction de chargement des couleurs et tailles
// =============================================================================

function loadSizesColorsConfig() {
    return {
        availableColors: STORE_CONFIG.AVAILABLE_COLORS || [],
        availableSizes: STORE_CONFIG.AVAILABLE_SIZES || [],
        sizeGuide: STORE_CONFIG.SIZE_GUIDE || {}
    };
}

// =============================================================================
// 📊 Fonction de chargement des paramètres de pixel
// =============================================================================

function loadPixelConfig() {
    return STORE_CONFIG.PIXEL_CODES || {};
}

// =============================================================================
// 📊 Fonction de chargement de tous les paramètres
// =============================================================================

function loadAllConfig() {
    return STORE_CONFIG;
}

// =============================================================================
// 🔄 Fonction de mise à jour des paramètres
// =============================================================================

function updateConfig(newConfig) {
    for (const key in newConfig) {
        if (newConfig.hasOwnProperty(key)) {
            STORE_CONFIG[key] = newConfig[key];
        }
    }
    return STORE_CONFIG;
}
