export const LOGO_URL = "https://i.pinimg.com/736x/59/ed/49/59ed496ac3518804b62c273b1b697cad.jpg";
export const CDN_URL = "https://media-assets.swiggy.com/";

// mockData.js
// AUTO-GENERATED realistic mock menu data shaped like Swiggy's real API response.
// Usage in Restaurantmenu.js:
//
//   import { MOCK_MENUS } from "../utils/mockData";
//   const json = MOCK_MENUS[resId]?.data;
//
// Then your existing path still works:
//   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
//
// To switch back to live API later, just swap the data source — no UI changes needed.

export const MOCK_MENUS = {
  "80226": {
    "id": "80226",
    "name": "Pizza Hut",
    "cuisine": "Pizzas, Italian",
    "area": "Civil Lines",
    "rating": 4.2,
    "costForTwo": "₹400 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pizzahut",
    "data": {
      "success": true,
      "data": {
        "cards": [  /*data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards*/
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "80226",
                  "name": "Pizza Hut",
                  "cuisines": [
                    "Pizzas",
                    "Italian"
                  ],
                  "avgRating": 4.2,
                  "costForTwo": "₹400 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pizzahut",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Recommended",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100001",
                                  "name": "Margherita Pizza",
                                  "category": "Recommended",
                                  "description": "Classic delight with 100% real mozzarella cheese",
                                  "price": 19900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "644"
                                    }
                                  },
                                  "imageId": "mockdata/items/100001",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "80226"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100002",
                                  "name": "Farmhouse Pizza",
                                  "category": "Recommended",
                                  "description": "Delicious combination of onion, capsicum, tomato & grilled mushroom",
                                  "price": 34900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "994"
                                    }
                                  },
                                  "imageId": "mockdata/items/100002",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "80226"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Veg Pizzas",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100003",
                                  "name": "Peppy Paneer Pizza",
                                  "category": "Recommended",
                                  "description": "Loaded with juicy paneer, capsicum & spicy red paprika",
                                  "price": 36900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "698"
                                    }
                                  },
                                  "imageId": "mockdata/items/100003",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "80226"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100004",
                                  "name": "Chicken Supreme Pizza",
                                  "category": "Recommended",
                                  "description": "Loaded with chicken tikka, onion, capsicum & extra cheese",
                                  "price": 44900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "954"
                                    }
                                  },
                                  "imageId": "mockdata/items/100004",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "80226"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Non-Veg Pizzas",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100005",
                                  "name": "Pepper Barbecue Chicken Pizza",
                                  "category": "Recommended",
                                  "description": "Spicy barbecue chicken with onion and pepper",
                                  "price": 42900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "733"
                                    }
                                  },
                                  "imageId": "mockdata/items/100005",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NON-VEG"
                                  },
                                  "restaurantId": "80226"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100006",
                                  "name": "Garlic Breadsticks",
                                  "category": "Recommended",
                                  "description": "Freshly baked breadsticks with garlic seasoning",
                                  "price": 13900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "287"
                                    }
                                  },
                                  "imageId": "mockdata/items/100006",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "80226"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Sides & Beverages",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100007",
                                  "name": "Choco Lava Cake",
                                  "category": "Recommended",
                                  "description": "Warm chocolate cake with a molten centre",
                                  "price": 9900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "187"
                                    }
                                  },
                                  "imageId": "mockdata/items/100007",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "80226"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100008",
                                  "name": "Pepsi (500ml)",
                                  "category": "Recommended",
                                  "description": "Chilled soft drink",
                                  "price": 6000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCountV2": "309"
                                    }
                                  },
                                  "imageId": "mockdata/items/100008",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "80226"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "80315": {
    "id": "80315",
    "name": "Eat On",
    "cuisine": "Multi-Cuisine, Fast Food",
    "area": "Civil Lines",
    "rating": 3.9,
    "costForTwo": "₹250 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eaton",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "80315",
                  "name": "Eat On",
                  "cuisines": [
                    "Multi-Cuisine",
                    "Fast Food"
                  ],
                  "avgRating": 3.9,
                  "costForTwo": "₹250 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eaton",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Popular",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100133",
                                  "name": "Veg Fried Rice",
                                  "category": "Recommended",
                                  "description": "Wok-tossed rice with mixed vegetables",
                                  "price": 15000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCountV2": "972"
                                    }
                                  },
                                  "imageId": "mockdata/items/100133",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "80315"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100134",
                                  "name": "Chilli Chicken",
                                  "category": "Recommended",
                                  "description": "Indo-Chinese stir-fried chicken in spicy sauce",
                                  "price": 21000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "266"
                                    }
                                  },
                                  "imageId": "mockdata/items/100134",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "80315"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Main Course",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100135",
                                  "name": "Paneer Tikka Sandwich",
                                  "category": "Recommended",
                                  "description": "Grilled sandwich with spiced paneer filling",
                                  "price": 13000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "524"
                                    }
                                  },
                                  "imageId": "mockdata/items/100135",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "80315"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100136",
                                  "name": "Veg Manchurian",
                                  "category": "Recommended",
                                  "description": "Fried veg balls tossed in tangy Manchurian sauce",
                                  "price": 17000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "142"
                                    }
                                  },
                                  "imageId": "mockdata/items/100136",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "80315"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Snacks",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100137",
                                  "name": "Masala Chai",
                                  "category": "Recommended",
                                  "description": "Spiced Indian tea",
                                  "price": 3000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "852"
                                    }
                                  },
                                  "imageId": "mockdata/items/100137",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "80315"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100138",
                                  "name": "Lemon Soda",
                                  "category": "Recommended",
                                  "description": "Refreshing sweet & salty lemon soda",
                                  "price": 5000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "308"
                                    }
                                  },
                                  "imageId": "mockdata/items/100138",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "80315"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Beverages",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100139",
                                  "name": "Veg Fried Rice",
                                  "category": "Recommended",
                                  "description": "Wok-tossed rice with mixed vegetables",
                                  "price": 15000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCountV2": "552"
                                    }
                                  },
                                  "imageId": "mockdata/items/100139",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "80315"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100140",
                                  "name": "Chilli Chicken",
                                  "category": "Recommended",
                                  "description": "Indo-Chinese stir-fried chicken in spicy sauce",
                                  "price": 21000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "939"
                                    }
                                  },
                                  "imageId": "mockdata/items/100140",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "80315"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "82234": {
    "id": "82234",
    "name": "KFC",
    "cuisine": "Burgers, Fast Food, Rolls & Wraps",
    "area": "Civil Lines",
    "rating": 4.2,
    "costForTwo": "₹400 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kfc",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "82234",
                  "name": "KFC",
                  "cuisines": [
                    "Burgers",
                    "Fast Food",
                    "Rolls & Wraps"
                  ],
                  "avgRating": 4.2,
                  "costForTwo": "₹400 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kfc",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Burgers",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100009",
                                  "name": "Crispy Veg Burger",
                                  "category": "Recommended",
                                  "description": "Crispy veg patty with lettuce & mayo",
                                  "price": 9900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "812"
                                    }
                                  },
                                  "imageId": "mockdata/items/100009",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "82234"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100010",
                                  "name": "Chicken Zinger Burger",
                                  "category": "Recommended",
                                  "description": "Spicy crispy chicken fillet burger",
                                  "price": 16900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "150"
                                    }
                                  },
                                  "imageId": "mockdata/items/100010",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "82234"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Combos",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100011",
                                  "name": "Whopper",
                                  "category": "Recommended",
                                  "description": "Flame-grilled beef-style patty (veg/chicken variant) with fresh veggies",
                                  "price": 21900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "852"
                                    }
                                  },
                                  "imageId": "mockdata/items/100011",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "82234"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100012",
                                  "name": "Crispy Chicken Combo",
                                  "category": "Recommended",
                                  "description": "Burger, fries & a drink",
                                  "price": 25900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "307"
                                    }
                                  },
                                  "imageId": "mockdata/items/100012",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "82234"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Sides",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100013",
                                  "name": "French Fries (Large)",
                                  "category": "Recommended",
                                  "description": "Golden crispy salted fries",
                                  "price": 10900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "166"
                                    }
                                  },
                                  "imageId": "mockdata/items/100013",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "82234"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100014",
                                  "name": "Chicken Nuggets (6 pcs)",
                                  "category": "Recommended",
                                  "description": "Crispy fried chicken nuggets",
                                  "price": 13900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "820"
                                    }
                                  },
                                  "imageId": "mockdata/items/100014",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "82234"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Beverages",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100015",
                                  "name": "Cold Drink (Regular)",
                                  "category": "Recommended",
                                  "description": "Choice of soft drink",
                                  "price": 6000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCountV2": "173"
                                    }
                                  },
                                  "imageId": "mockdata/items/100015",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "82234"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "124580": {
    "id": "124580",
    "name": "Samira Restaurant",
    "cuisine": "Mughlai, North Indian, Biryani",
    "area": "Civil Lines",
    "rating": 4.2,
    "costForTwo": "₹350 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/samira",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "124580",
                  "name": "Samira Restaurant",
                  "cuisines": [
                    "Mughlai",
                    "North Indian",
                    "Biryani"
                  ],
                  "avgRating": 4.2,
                  "costForTwo": "₹350 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/samira",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Biryanis",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100050",
                                  "name": "Chicken Dum Biryani",
                                  "category": "Recommended",
                                  "description": "Fragrant basmati rice slow-cooked with spiced chicken",
                                  "price": 25000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "934"
                                    }
                                  },
                                  "imageId": "mockdata/items/100050",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "124580"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100051",
                                  "name": "Mutton Biryani",
                                  "category": "Recommended",
                                  "description": "Tender mutton pieces layered with aromatic rice",
                                  "price": 32000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "678"
                                    }
                                  },
                                  "imageId": "mockdata/items/100051",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "124580"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Starters",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100052",
                                  "name": "Veg Biryani",
                                  "category": "Recommended",
                                  "description": "Mixed vegetables and basmati rice cooked dum style",
                                  "price": 18000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "582"
                                    }
                                  },
                                  "imageId": "mockdata/items/100052",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "124580"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100053",
                                  "name": "Chicken 65",
                                  "category": "Recommended",
                                  "description": "Spicy deep-fried chicken bites, South Indian style",
                                  "price": 22000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "965"
                                    }
                                  },
                                  "imageId": "mockdata/items/100053",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "124580"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Raita & Sides",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100054",
                                  "name": "Boti Kebab",
                                  "category": "Recommended",
                                  "description": "Marinated meat chunks grilled on skewers",
                                  "price": 26000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "735"
                                    }
                                  },
                                  "imageId": "mockdata/items/100054",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "124580"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100055",
                                  "name": "Raita",
                                  "category": "Recommended",
                                  "description": "Cool yogurt with cucumber and spices",
                                  "price": 5000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "360"
                                    }
                                  },
                                  "imageId": "mockdata/items/100055",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "124580"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Desserts",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100056",
                                  "name": "Double Ka Meetha",
                                  "category": "Recommended",
                                  "description": "Hyderabadi bread pudding dessert",
                                  "price": 11000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "688"
                                    }
                                  },
                                  "imageId": "mockdata/items/100056",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "124580"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "126287": {
    "id": "126287",
    "name": "UBQ-Meals,Thalis & Bowls",
    "cuisine": "North Indian, Thali, Healthy Food",
    "area": "Civil Lines",
    "rating": 4.2,
    "costForTwo": "₹250 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ubq",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "126287",
                  "name": "UBQ-Meals,Thalis & Bowls",
                  "cuisines": [
                    "North Indian",
                    "Thali",
                    "Healthy Food"
                  ],
                  "avgRating": 4.2,
                  "costForTwo": "₹250 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ubq",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Build Your Bowl",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100076",
                                  "name": "Quinoa Power Bowl",
                                  "category": "Recommended",
                                  "description": "Quinoa, roasted veggies, chickpeas & tahini dressing",
                                  "price": 28000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "612"
                                    }
                                  },
                                  "imageId": "mockdata/items/100076",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "126287"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100077",
                                  "name": "Grilled Chicken Protein Bowl",
                                  "category": "Recommended",
                                  "description": "Grilled chicken, brown rice, greens & herb dressing",
                                  "price": 32000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "651"
                                    }
                                  },
                                  "imageId": "mockdata/items/100077",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "126287"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100078",
                                  "name": "Mexican Burrito Bowl",
                                  "category": "Recommended",
                                  "description": "Rice, black beans, corn salsa & guacamole",
                                  "price": 29000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "693"
                                    }
                                  },
                                  "imageId": "mockdata/items/100078",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "126287"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Salads",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100079",
                                  "name": "Greek Salad",
                                  "category": "Recommended",
                                  "description": "Cucumber, feta, olives, tomato & olive oil dressing",
                                  "price": 24000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "533"
                                    }
                                  },
                                  "imageId": "mockdata/items/100079",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "126287"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100080",
                                  "name": "Caesar Salad",
                                  "category": "Recommended",
                                  "description": "Romaine lettuce, parmesan, croutons & caesar dressing",
                                  "price": 23000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "812"
                                    }
                                  },
                                  "imageId": "mockdata/items/100080",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "126287"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100081",
                                  "name": "Green Detox Smoothie",
                                  "category": "Recommended",
                                  "description": "Spinach, apple, banana & mint",
                                  "price": 15000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "664"
                                    }
                                  },
                                  "imageId": "mockdata/items/100081",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "126287"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Smoothies & Juices",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100082",
                                  "name": "Berry Blast Smoothie",
                                  "category": "Recommended",
                                  "description": "Mixed berries, yogurt & honey",
                                  "price": 16000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "666"
                                    }
                                  },
                                  "imageId": "mockdata/items/100082",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "126287"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "150376": {
    "id": "150376",
    "name": "Shri Ram Shakahari Bhojnalaya",
    "cuisine": "North Indian, Pure Veg, Thali",
    "area": "Civil Lines",
    "rating": 4.4,
    "costForTwo": "₹250 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/shriram",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "150376",
                  "name": "Shri Ram Shakahari Bhojnalaya",
                  "cuisines": [
                    "North Indian",
                    "Pure Veg",
                    "Thali"
                  ],
                  "avgRating": 4.4,
                  "costForTwo": "₹250 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/shriram",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Thalis",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100043",
                                  "name": "Shri Ram Special Thali",
                                  "category": "Recommended",
                                  "description": "Dal, sabzi, rice, roti, salad, papad & sweet",
                                  "price": 22000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "954"
                                    }
                                  },
                                  "imageId": "mockdata/items/100043",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "150376"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100044",
                                  "name": "Mini Thali",
                                  "category": "Recommended",
                                  "description": "4 sabzis, dal, rice, 4 rotis & salad",
                                  "price": 17000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "604"
                                    }
                                  },
                                  "imageId": "mockdata/items/100044",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "150376"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "À la carte",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100045",
                                  "name": "Paneer Butter Masala",
                                  "category": "Recommended",
                                  "description": "Cottage cheese cubes in rich tomato gravy",
                                  "price": 20000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "883"
                                    }
                                  },
                                  "imageId": "mockdata/items/100045",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "150376"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100046",
                                  "name": "Mix Veg",
                                  "category": "Recommended",
                                  "description": "Seasonal vegetables tossed in mild spices",
                                  "price": 16000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "140"
                                    }
                                  },
                                  "imageId": "mockdata/items/100046",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "150376"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Breads",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100047",
                                  "name": "Tawa Roti (4 pcs)",
                                  "category": "Recommended",
                                  "description": "Soft whole wheat flatbreads",
                                  "price": 5000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "761"
                                    }
                                  },
                                  "imageId": "mockdata/items/100047",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "150376"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100048",
                                  "name": "Jeera Rice",
                                  "category": "Recommended",
                                  "description": "Steamed basmati rice tempered with cumin",
                                  "price": 12000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "403"
                                    }
                                  },
                                  "imageId": "mockdata/items/100048",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "150376"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Sweets",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100049",
                                  "name": "Gajar Halwa",
                                  "category": "Recommended",
                                  "description": "Carrot pudding cooked in milk & ghee",
                                  "price": 10000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "907"
                                    }
                                  },
                                  "imageId": "mockdata/items/100049",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "150376"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "166944": {
    "id": "166944",
    "name": "Chicago Pizza",
    "cuisine": "Pizzas, Italian, Fast Food",
    "area": "Tagore Town",
    "rating": 4,
    "costForTwo": "₹350 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/chicagopizza",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "166944",
                  "name": "Chicago Pizza",
                  "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Fast Food"
                  ],
                  "avgRating": 4,
                  "costForTwo": "₹350 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/chicagopizza",
                  "areaName": "Tagore Town"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Recommended",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100125",
                                  "name": "Margherita Pizza",
                                  "category": "Recommended",
                                  "description": "Classic delight with 100% real mozzarella cheese",
                                  "price": 19900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "499"
                                    }
                                  },
                                  "imageId": "mockdata/items/100125",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "166944"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100126",
                                  "name": "Farmhouse Pizza",
                                  "category": "Recommended",
                                  "description": "Delicious combination of onion, capsicum, tomato & grilled mushroom",
                                  "price": 34900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "565"
                                    }
                                  },
                                  "imageId": "mockdata/items/100126",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "166944"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Veg Pizzas",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100127",
                                  "name": "Peppy Paneer Pizza",
                                  "category": "Recommended",
                                  "description": "Loaded with juicy paneer, capsicum & spicy red paprika",
                                  "price": 36900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "299"
                                    }
                                  },
                                  "imageId": "mockdata/items/100127",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "166944"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100128",
                                  "name": "Chicken Supreme Pizza",
                                  "category": "Recommended",
                                  "description": "Loaded with chicken tikka, onion, capsicum & extra cheese",
                                  "price": 44900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "672"
                                    }
                                  },
                                  "imageId": "mockdata/items/100128",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "166944"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Non-Veg Pizzas",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100129",
                                  "name": "Pepper Barbecue Chicken Pizza",
                                  "category": "Recommended",
                                  "description": "Spicy barbecue chicken with onion and pepper",
                                  "price": 42900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "186"
                                    }
                                  },
                                  "imageId": "mockdata/items/100129",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "166944"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100130",
                                  "name": "Garlic Breadsticks",
                                  "category": "Recommended",
                                  "description": "Freshly baked breadsticks with garlic seasoning",
                                  "price": 13900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "698"
                                    }
                                  },
                                  "imageId": "mockdata/items/100130",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "166944"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Sides & Beverages",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100131",
                                  "name": "Choco Lava Cake",
                                  "category": "Recommended",
                                  "description": "Warm chocolate cake with a molten centre",
                                  "price": 9900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "581"
                                    }
                                  },
                                  "imageId": "mockdata/items/100131",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "166944"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100132",
                                  "name": "Pepsi (500ml)",
                                  "category": "Recommended",
                                  "description": "Chilled soft drink",
                                  "price": 6000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCountV2": "995"
                                    }
                                  },
                                  "imageId": "mockdata/items/100132",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "166944"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "253769": {
    "id": "253769",
    "name": "McDonald's",
    "cuisine": "Burgers, Fast Food, Beverages",
    "area": "Old Katra",
    "rating": 4.3,
    "costForTwo": "₹400 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mcdonalds",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "253769",
                  "name": "McDonald's",
                  "cuisines": [
                    "Burgers",
                    "Fast Food",
                    "Beverages"
                  ],
                  "avgRating": 4.3,
                  "costForTwo": "₹400 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mcdonalds",
                  "areaName": "Old Katra"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Burgers",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100103",
                                  "name": "Crispy Veg Burger",
                                  "category": "Recommended",
                                  "description": "Crispy veg patty with lettuce & mayo",
                                  "price": 9900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "159"
                                    }
                                  },
                                  "imageId": "mockdata/items/100103",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "253769"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100104",
                                  "name": "Chicken Zinger Burger",
                                  "category": "Recommended",
                                  "description": "Spicy crispy chicken fillet burger",
                                  "price": 16900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "487"
                                    }
                                  },
                                  "imageId": "mockdata/items/100104",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "253769"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Combos",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100105",
                                  "name": "Whopper",
                                  "category": "Recommended",
                                  "description": "Flame-grilled beef-style patty (veg/chicken variant) with fresh veggies",
                                  "price": 21900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "557"
                                    }
                                  },
                                  "imageId": "mockdata/items/100105",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "253769"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100106",
                                  "name": "Crispy Chicken Combo",
                                  "category": "Recommended",
                                  "description": "Burger, fries & a drink",
                                  "price": 25900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "227"
                                    }
                                  },
                                  "imageId": "mockdata/items/100106",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "253769"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Sides",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100107",
                                  "name": "French Fries (Large)",
                                  "category": "Recommended",
                                  "description": "Golden crispy salted fries",
                                  "price": 10900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "981"
                                    }
                                  },
                                  "imageId": "mockdata/items/100107",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "253769"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100108",
                                  "name": "Chicken Nuggets (6 pcs)",
                                  "category": "Recommended",
                                  "description": "Crispy fried chicken nuggets",
                                  "price": 13900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "699"
                                    }
                                  },
                                  "imageId": "mockdata/items/100108",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "253769"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Beverages",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100109",
                                  "name": "Cold Drink (Regular)",
                                  "category": "Recommended",
                                  "description": "Choice of soft drink",
                                  "price": 6000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCountV2": "369"
                                    }
                                  },
                                  "imageId": "mockdata/items/100109",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "253769"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "301701": {
    "id": "301701",
    "name": "Barbeque Nation",
    "cuisine": "North Indian, BBQ, Buffet",
    "area": "Civil Lines",
    "rating": 4.5,
    "costForTwo": "₹900 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbqnation",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "301701",
                  "name": "Barbeque Nation",
                  "cuisines": [
                    "North Indian",
                    "BBQ",
                    "Buffet"
                  ],
                  "avgRating": 4.5,
                  "costForTwo": "₹900 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bbqnation",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Starters",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100016",
                                  "name": "Tandoori Chicken Platter",
                                  "category": "Recommended",
                                  "description": "Smoky tandoor-grilled chicken with mint chutney",
                                  "price": 32000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "466"
                                    }
                                  },
                                  "imageId": "mockdata/items/100016",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "301701"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100017",
                                  "name": "Paneer Tikka",
                                  "category": "Recommended",
                                  "description": "Marinated cottage cheese cubes grilled to perfection",
                                  "price": 28000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "949"
                                    }
                                  },
                                  "imageId": "mockdata/items/100017",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "301701"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Main Course",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100018",
                                  "name": "Mutton Seekh Kebab",
                                  "category": "Recommended",
                                  "description": "Minced mutton skewers with house spices",
                                  "price": 35000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "369"
                                    }
                                  },
                                  "imageId": "mockdata/items/100018",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "301701"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100019",
                                  "name": "Dal Makhani",
                                  "category": "Recommended",
                                  "description": "Slow-cooked black lentils in creamy butter gravy",
                                  "price": 22000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "149"
                                    }
                                  },
                                  "imageId": "mockdata/items/100019",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "301701"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Breads",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100020",
                                  "name": "Butter Chicken",
                                  "category": "Recommended",
                                  "description": "Rich tomato gravy with tender chicken pieces",
                                  "price": 30000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "393"
                                    }
                                  },
                                  "imageId": "mockdata/items/100020",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "301701"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100021",
                                  "name": "Tandoori Roti",
                                  "category": "Recommended",
                                  "description": "Whole wheat bread baked in tandoor",
                                  "price": 4000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "222"
                                    }
                                  },
                                  "imageId": "mockdata/items/100021",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "301701"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Desserts",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100022",
                                  "name": "Gulab Jamun",
                                  "category": "Recommended",
                                  "description": "Soft milk dumplings soaked in sugar syrup",
                                  "price": 9000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "645"
                                    }
                                  },
                                  "imageId": "mockdata/items/100022",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "301701"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "392164": {
    "id": "392164",
    "name": "NIC Ice Creams",
    "cuisine": "Ice Cream, Desserts",
    "area": "Civil Lines",
    "rating": 4.4,
    "costForTwo": "₹200 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nic",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "392164",
                  "name": "NIC Ice Creams",
                  "cuisines": [
                    "Ice Cream",
                    "Desserts"
                  ],
                  "avgRating": 4.4,
                  "costForTwo": "₹200 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nic",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Tubs",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100057",
                                  "name": "Belgian Chocolate Tub (500ml)",
                                  "category": "Recommended",
                                  "description": "Rich Belgian dark chocolate ice cream",
                                  "price": 35000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "399"
                                    }
                                  },
                                  "imageId": "mockdata/items/100057",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "392164"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100058",
                                  "name": "Butterscotch Tub (500ml)",
                                  "category": "Recommended",
                                  "description": "Crunchy caramelized butterscotch chips",
                                  "price": 32000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "871"
                                    }
                                  },
                                  "imageId": "mockdata/items/100058",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "392164"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Cones & Cups",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100059",
                                  "name": "Classic Vanilla Cone",
                                  "category": "Recommended",
                                  "description": "Smooth vanilla ice cream in a crispy cone",
                                  "price": 6000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "589"
                                    }
                                  },
                                  "imageId": "mockdata/items/100059",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "392164"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100060",
                                  "name": "Choco Walnut Cup",
                                  "category": "Recommended",
                                  "description": "Chocolate ice cream loaded with walnuts",
                                  "price": 9000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "244"
                                    }
                                  },
                                  "imageId": "mockdata/items/100060",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "392164"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Sundaes & Shakes",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100061",
                                  "name": "Hot Chocolate Fudge Sundae",
                                  "category": "Recommended",
                                  "description": "Warm fudge, ice cream, nuts & cherry",
                                  "price": 18000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "307"
                                    }
                                  },
                                  "imageId": "mockdata/items/100061",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "392164"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100062",
                                  "name": "Oreo Shake",
                                  "category": "Recommended",
                                  "description": "Creamy shake blended with Oreo cookies",
                                  "price": 15000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "324"
                                    }
                                  },
                                  "imageId": "mockdata/items/100062",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "392164"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "392165": {
    "id": "392165",
    "name": "Grameen Kulfi",
    "cuisine": "Ice Cream, Kulfi, Desserts",
    "area": "Civil Lines",
    "rating": 4.5,
    "costForTwo": "₹150 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/grameenkulfi",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "392165",
                  "name": "Grameen Kulfi",
                  "cuisines": [
                    "Ice Cream",
                    "Kulfi",
                    "Desserts"
                  ],
                  "avgRating": 4.5,
                  "costForTwo": "₹150 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/grameenkulfi",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Tubs",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100037",
                                  "name": "Belgian Chocolate Tub (500ml)",
                                  "category": "Recommended",
                                  "description": "Rich Belgian dark chocolate ice cream",
                                  "price": 35000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "414"
                                    }
                                  },
                                  "imageId": "mockdata/items/100037",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "392165"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100038",
                                  "name": "Butterscotch Tub (500ml)",
                                  "category": "Recommended",
                                  "description": "Crunchy caramelized butterscotch chips",
                                  "price": 32000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "264"
                                    }
                                  },
                                  "imageId": "mockdata/items/100038",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "392165"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Cones & Cups",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100039",
                                  "name": "Classic Vanilla Cone",
                                  "category": "Recommended",
                                  "description": "Smooth vanilla ice cream in a crispy cone",
                                  "price": 6000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "270"
                                    }
                                  },
                                  "imageId": "mockdata/items/100039",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "392165"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100040",
                                  "name": "Choco Walnut Cup",
                                  "category": "Recommended",
                                  "description": "Chocolate ice cream loaded with walnuts",
                                  "price": 9000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "230"
                                    }
                                  },
                                  "imageId": "mockdata/items/100040",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "392165"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Sundaes & Shakes",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100041",
                                  "name": "Hot Chocolate Fudge Sundae",
                                  "category": "Recommended",
                                  "description": "Warm fudge, ice cream, nuts & cherry",
                                  "price": 18000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "982"
                                    }
                                  },
                                  "imageId": "mockdata/items/100041",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "392165"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100042",
                                  "name": "Oreo Shake",
                                  "category": "Recommended",
                                  "description": "Creamy shake blended with Oreo cookies",
                                  "price": 15000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "305"
                                    }
                                  },
                                  "imageId": "mockdata/items/100042",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "392165"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "437010": {
    "id": "437010",
    "name": "Burger King",
    "cuisine": "Burgers, American, Fast Food",
    "area": "Civil Lines",
    "rating": 4.2,
    "costForTwo": "₹350 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/burgerking",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "437010",
                  "name": "Burger King",
                  "cuisines": [
                    "Burgers",
                    "American",
                    "Fast Food"
                  ],
                  "avgRating": 4.2,
                  "costForTwo": "₹350 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/burgerking",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Burgers",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100023",
                                  "name": "Crispy Veg Burger",
                                  "category": "Recommended",
                                  "description": "Crispy veg patty with lettuce & mayo",
                                  "price": 9900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "259"
                                    }
                                  },
                                  "imageId": "mockdata/items/100023",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "437010"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100024",
                                  "name": "Chicken Zinger Burger",
                                  "category": "Recommended",
                                  "description": "Spicy crispy chicken fillet burger",
                                  "price": 16900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "637"
                                    }
                                  },
                                  "imageId": "mockdata/items/100024",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "437010"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Combos",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100025",
                                  "name": "Whopper",
                                  "category": "Recommended",
                                  "description": "Flame-grilled beef-style patty (veg/chicken variant) with fresh veggies",
                                  "price": 21900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "203"
                                    }
                                  },
                                  "imageId": "mockdata/items/100025",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "437010"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100026",
                                  "name": "Crispy Chicken Combo",
                                  "category": "Recommended",
                                  "description": "Burger, fries & a drink",
                                  "price": 25900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "574"
                                    }
                                  },
                                  "imageId": "mockdata/items/100026",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "437010"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Sides",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100027",
                                  "name": "French Fries (Large)",
                                  "category": "Recommended",
                                  "description": "Golden crispy salted fries",
                                  "price": 10900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "174"
                                    }
                                  },
                                  "imageId": "mockdata/items/100027",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "437010"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100028",
                                  "name": "Chicken Nuggets (6 pcs)",
                                  "category": "Recommended",
                                  "description": "Crispy fried chicken nuggets",
                                  "price": 13900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "519"
                                    }
                                  },
                                  "imageId": "mockdata/items/100028",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "437010"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Beverages",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100029",
                                  "name": "Cold Drink (Regular)",
                                  "category": "Recommended",
                                  "description": "Choice of soft drink",
                                  "price": 6000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCountV2": "737"
                                    }
                                  },
                                  "imageId": "mockdata/items/100029",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "437010"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "442049": {
    "id": "442049",
    "name": "Faasos - Wraps, Rolls & Shawarma",
    "cuisine": "Wraps, Rolls, Fast Food",
    "area": "Civil Lines",
    "rating": 4,
    "costForTwo": "₹250 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/faasos",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "442049",
                  "name": "Faasos - Wraps, Rolls & Shawarma",
                  "cuisines": [
                    "Wraps",
                    "Rolls",
                    "Fast Food"
                  ],
                  "avgRating": 4,
                  "costForTwo": "₹250 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/faasos",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Rolls & Wraps",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100070",
                                  "name": "Chicken Tikka Wrap",
                                  "category": "Recommended",
                                  "description": "Spiced chicken tikka wrapped in a soft roomali roti",
                                  "price": 15900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "785"
                                    }
                                  },
                                  "imageId": "mockdata/items/100070",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442049"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100071",
                                  "name": "Paneer Wrap",
                                  "category": "Recommended",
                                  "description": "Grilled paneer with mint mayo in a wrap",
                                  "price": 13900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "378"
                                    }
                                  },
                                  "imageId": "mockdata/items/100071",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442049"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Shawarma",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100072",
                                  "name": "Chicken Shawarma",
                                  "category": "Recommended",
                                  "description": "Classic Arabian shawarma with garlic sauce",
                                  "price": 14900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "742"
                                    }
                                  },
                                  "imageId": "mockdata/items/100072",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442049"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100073",
                                  "name": "Egg Roll",
                                  "category": "Recommended",
                                  "description": "Double egg roll with onions & house chutney",
                                  "price": 9900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "573"
                                    }
                                  },
                                  "imageId": "mockdata/items/100073",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442049"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Combos & Beverages",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100074",
                                  "name": "Peri Peri Fries",
                                  "category": "Recommended",
                                  "description": "Crispy fries tossed in peri peri seasoning",
                                  "price": 9900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "708"
                                    }
                                  },
                                  "imageId": "mockdata/items/100074",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442049"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100075",
                                  "name": "Cold Coffee",
                                  "category": "Recommended",
                                  "description": "Chilled coffee blended with ice cream",
                                  "price": 11000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "209"
                                    }
                                  },
                                  "imageId": "mockdata/items/100075",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442049"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "442050": {
    "id": "442050",
    "name": "Behrouz Biryani",
    "cuisine": "Biryani, Mughlai, North Indian",
    "area": "Civil Lines",
    "rating": 4.3,
    "costForTwo": "₹450 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/behrouz",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "442050",
                  "name": "Behrouz Biryani",
                  "cuisines": [
                    "Biryani",
                    "Mughlai",
                    "North Indian"
                  ],
                  "avgRating": 4.3,
                  "costForTwo": "₹450 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/behrouz",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Biryanis",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100063",
                                  "name": "Chicken Dum Biryani",
                                  "category": "Recommended",
                                  "description": "Fragrant basmati rice slow-cooked with spiced chicken",
                                  "price": 25000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "293"
                                    }
                                  },
                                  "imageId": "mockdata/items/100063",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442050"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100064",
                                  "name": "Mutton Biryani",
                                  "category": "Recommended",
                                  "description": "Tender mutton pieces layered with aromatic rice",
                                  "price": 32000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "919"
                                    }
                                  },
                                  "imageId": "mockdata/items/100064",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442050"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Starters",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100065",
                                  "name": "Veg Biryani",
                                  "category": "Recommended",
                                  "description": "Mixed vegetables and basmati rice cooked dum style",
                                  "price": 18000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "411"
                                    }
                                  },
                                  "imageId": "mockdata/items/100065",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442050"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100066",
                                  "name": "Chicken 65",
                                  "category": "Recommended",
                                  "description": "Spicy deep-fried chicken bites, South Indian style",
                                  "price": 22000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "445"
                                    }
                                  },
                                  "imageId": "mockdata/items/100066",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442050"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Raita & Sides",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100067",
                                  "name": "Boti Kebab",
                                  "category": "Recommended",
                                  "description": "Marinated meat chunks grilled on skewers",
                                  "price": 26000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "208"
                                    }
                                  },
                                  "imageId": "mockdata/items/100067",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442050"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100068",
                                  "name": "Raita",
                                  "category": "Recommended",
                                  "description": "Cool yogurt with cucumber and spices",
                                  "price": 5000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "126"
                                    }
                                  },
                                  "imageId": "mockdata/items/100068",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442050"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Desserts",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100069",
                                  "name": "Double Ka Meetha",
                                  "category": "Recommended",
                                  "description": "Hyderabadi bread pudding dessert",
                                  "price": 11000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "218"
                                    }
                                  },
                                  "imageId": "mockdata/items/100069",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442050"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "442051": {
    "id": "442051",
    "name": "Oven Story Pizza",
    "cuisine": "Pizzas, Italian, Fast Food",
    "area": "Civil Lines",
    "rating": 4.1,
    "costForTwo": "₹350 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ovenstory",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "442051",
                  "name": "Oven Story Pizza",
                  "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Fast Food"
                  ],
                  "avgRating": 4.1,
                  "costForTwo": "₹350 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ovenstory",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Recommended",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100110",
                                  "name": "Margherita Pizza",
                                  "category": "Recommended",
                                  "description": "Classic delight with 100% real mozzarella cheese",
                                  "price": 19900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "381"
                                    }
                                  },
                                  "imageId": "mockdata/items/100110",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442051"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100111",
                                  "name": "Farmhouse Pizza",
                                  "category": "Recommended",
                                  "description": "Delicious combination of onion, capsicum, tomato & grilled mushroom",
                                  "price": 34900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "797"
                                    }
                                  },
                                  "imageId": "mockdata/items/100111",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442051"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Veg Pizzas",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100112",
                                  "name": "Peppy Paneer Pizza",
                                  "category": "Recommended",
                                  "description": "Loaded with juicy paneer, capsicum & spicy red paprika",
                                  "price": 36900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "447"
                                    }
                                  },
                                  "imageId": "mockdata/items/100112",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442051"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100113",
                                  "name": "Chicken Supreme Pizza",
                                  "category": "Recommended",
                                  "description": "Loaded with chicken tikka, onion, capsicum & extra cheese",
                                  "price": 44900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "482"
                                    }
                                  },
                                  "imageId": "mockdata/items/100113",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442051"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Non-Veg Pizzas",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100114",
                                  "name": "Pepper Barbecue Chicken Pizza",
                                  "category": "Recommended",
                                  "description": "Spicy barbecue chicken with onion and pepper",
                                  "price": 42900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "550"
                                    }
                                  },
                                  "imageId": "mockdata/items/100114",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442051"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100115",
                                  "name": "Garlic Breadsticks",
                                  "category": "Recommended",
                                  "description": "Freshly baked breadsticks with garlic seasoning",
                                  "price": 13900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "771"
                                    }
                                  },
                                  "imageId": "mockdata/items/100115",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442051"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Sides & Beverages",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100116",
                                  "name": "Choco Lava Cake",
                                  "category": "Recommended",
                                  "description": "Warm chocolate cake with a molten centre",
                                  "price": 9900,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "552"
                                    }
                                  },
                                  "imageId": "mockdata/items/100116",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442051"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100117",
                                  "name": "Pepsi (500ml)",
                                  "category": "Recommended",
                                  "description": "Chilled soft drink",
                                  "price": 6000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCountV2": "188"
                                    }
                                  },
                                  "imageId": "mockdata/items/100117",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442051"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "442053": {
    "id": "442053",
    "name": "Sweet Truth - Cake and Desserts",
    "cuisine": "Bakery, Desserts, Cakes",
    "area": "Civil Lines",
    "rating": 4.4,
    "costForTwo": "₹300 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sweettruth",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "442053",
                  "name": "Sweet Truth - Cake and Desserts",
                  "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Cakes"
                  ],
                  "avgRating": 4.4,
                  "costForTwo": "₹300 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sweettruth",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Cakes",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100083",
                                  "name": "Chocolate Truffle Cake (500g)",
                                  "category": "Recommended",
                                  "description": "Rich layers of chocolate sponge & truffle cream",
                                  "price": 45000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "890"
                                    }
                                  },
                                  "imageId": "mockdata/items/100083",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442053"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100084",
                                  "name": "Red Velvet Cake (500g)",
                                  "category": "Recommended",
                                  "description": "Classic red velvet with cream cheese frosting",
                                  "price": 48000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "233"
                                    }
                                  },
                                  "imageId": "mockdata/items/100084",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442053"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Pastries",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100085",
                                  "name": "Black Forest Pastry",
                                  "category": "Recommended",
                                  "description": "Chocolate sponge, cherries & whipped cream",
                                  "price": 9000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "776"
                                    }
                                  },
                                  "imageId": "mockdata/items/100085",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442053"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100086",
                                  "name": "Blueberry Cheesecake Slice",
                                  "category": "Recommended",
                                  "description": "Creamy cheesecake topped with blueberry compote",
                                  "price": 13000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "779"
                                    }
                                  },
                                  "imageId": "mockdata/items/100086",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442053"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Cookies & Bites",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100087",
                                  "name": "Chocolate Chip Cookies (4 pcs)",
                                  "category": "Recommended",
                                  "description": "Freshly baked gooey chocolate chip cookies",
                                  "price": 11000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "166"
                                    }
                                  },
                                  "imageId": "mockdata/items/100087",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442053"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100088",
                                  "name": "Brownie with Ice Cream",
                                  "category": "Recommended",
                                  "description": "Warm fudge brownie with vanilla ice cream",
                                  "price": 16000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "114"
                                    }
                                  },
                                  "imageId": "mockdata/items/100088",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442053"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "442054": {
    "id": "442054",
    "name": "LunchBox - Meals and Thalis",
    "cuisine": "North Indian, Thali, Combos",
    "area": "Civil Lines",
    "rating": 4.2,
    "costForTwo": "₹200 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lunchbox",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "442054",
                  "name": "LunchBox - Meals and Thalis",
                  "cuisines": [
                    "North Indian",
                    "Thali",
                    "Combos"
                  ],
                  "avgRating": 4.2,
                  "costForTwo": "₹200 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lunchbox",
                  "areaName": "Civil Lines"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Thalis",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100118",
                                  "name": "Shri Ram Special Thali",
                                  "category": "Recommended",
                                  "description": "Dal, sabzi, rice, roti, salad, papad & sweet",
                                  "price": 22000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "970"
                                    }
                                  },
                                  "imageId": "mockdata/items/100118",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442054"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100119",
                                  "name": "Mini Thali",
                                  "category": "Recommended",
                                  "description": "4 sabzis, dal, rice, 4 rotis & salad",
                                  "price": 17000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "919"
                                    }
                                  },
                                  "imageId": "mockdata/items/100119",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442054"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "À la carte",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100120",
                                  "name": "Paneer Butter Masala",
                                  "category": "Recommended",
                                  "description": "Cottage cheese cubes in rich tomato gravy",
                                  "price": 20000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "545"
                                    }
                                  },
                                  "imageId": "mockdata/items/100120",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442054"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100121",
                                  "name": "Mix Veg",
                                  "category": "Recommended",
                                  "description": "Seasonal vegetables tossed in mild spices",
                                  "price": 16000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "683"
                                    }
                                  },
                                  "imageId": "mockdata/items/100121",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442054"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Breads",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100122",
                                  "name": "Tawa Roti (4 pcs)",
                                  "category": "Recommended",
                                  "description": "Soft whole wheat flatbreads",
                                  "price": 5000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "955"
                                    }
                                  },
                                  "imageId": "mockdata/items/100122",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442054"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100123",
                                  "name": "Jeera Rice",
                                  "category": "Recommended",
                                  "description": "Steamed basmati rice tempered with cumin",
                                  "price": 12000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "193"
                                    }
                                  },
                                  "imageId": "mockdata/items/100123",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442054"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Sweets",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100124",
                                  "name": "Gajar Halwa",
                                  "category": "Recommended",
                                  "description": "Carrot pudding cooked in milk & ghee",
                                  "price": 10000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCountV2": "707"
                                    }
                                  },
                                  "imageId": "mockdata/items/100124",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442054"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "442055": {
    "id": "442055",
    "name": "The Good Bowl",
    "cuisine": "Healthy Food, Salads, Bowls",
    "area": "Tagore Town",
    "rating": 4.3,
    "costForTwo": "₹300 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/goodbowl",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "442055",
                  "name": "The Good Bowl",
                  "cuisines": [
                    "Healthy Food",
                    "Salads",
                    "Bowls"
                  ],
                  "avgRating": 4.3,
                  "costForTwo": "₹300 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/goodbowl",
                  "areaName": "Tagore Town"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Build Your Bowl",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100089",
                                  "name": "Quinoa Power Bowl",
                                  "category": "Recommended",
                                  "description": "Quinoa, roasted veggies, chickpeas & tahini dressing",
                                  "price": 28000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "667"
                                    }
                                  },
                                  "imageId": "mockdata/items/100089",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442055"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100090",
                                  "name": "Grilled Chicken Protein Bowl",
                                  "category": "Recommended",
                                  "description": "Grilled chicken, brown rice, greens & herb dressing",
                                  "price": 32000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "421"
                                    }
                                  },
                                  "imageId": "mockdata/items/100090",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442055"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100091",
                                  "name": "Mexican Burrito Bowl",
                                  "category": "Recommended",
                                  "description": "Rice, black beans, corn salsa & guacamole",
                                  "price": 29000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "360"
                                    }
                                  },
                                  "imageId": "mockdata/items/100091",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442055"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Salads",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100092",
                                  "name": "Greek Salad",
                                  "category": "Recommended",
                                  "description": "Cucumber, feta, olives, tomato & olive oil dressing",
                                  "price": 24000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "810"
                                    }
                                  },
                                  "imageId": "mockdata/items/100092",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442055"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100093",
                                  "name": "Caesar Salad",
                                  "category": "Recommended",
                                  "description": "Romaine lettuce, parmesan, croutons & caesar dressing",
                                  "price": 23000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "606"
                                    }
                                  },
                                  "imageId": "mockdata/items/100093",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442055"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100094",
                                  "name": "Green Detox Smoothie",
                                  "category": "Recommended",
                                  "description": "Spinach, apple, banana & mint",
                                  "price": 15000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "133"
                                    }
                                  },
                                  "imageId": "mockdata/items/100094",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442055"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Smoothies & Juices",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100095",
                                  "name": "Berry Blast Smoothie",
                                  "category": "Recommended",
                                  "description": "Mixed berries, yogurt & honey",
                                  "price": 16000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "374"
                                    }
                                  },
                                  "imageId": "mockdata/items/100095",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442055"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "442056": {
    "id": "442056",
    "name": "The Biryani Life",
    "cuisine": "Biryani, North Indian",
    "area": "Katra",
    "rating": 4.1,
    "costForTwo": "₹300 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/biryanilife",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "442056",
                  "name": "The Biryani Life",
                  "cuisines": [
                    "Biryani",
                    "North Indian"
                  ],
                  "avgRating": 4.1,
                  "costForTwo": "₹300 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/biryanilife",
                  "areaName": "Katra"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Biryanis",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100096",
                                  "name": "Chicken Dum Biryani",
                                  "category": "Recommended",
                                  "description": "Fragrant basmati rice slow-cooked with spiced chicken",
                                  "price": 25000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "496"
                                    }
                                  },
                                  "imageId": "mockdata/items/100096",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442056"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100097",
                                  "name": "Mutton Biryani",
                                  "category": "Recommended",
                                  "description": "Tender mutton pieces layered with aromatic rice",
                                  "price": 32000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "440"
                                    }
                                  },
                                  "imageId": "mockdata/items/100097",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442056"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Starters",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100098",
                                  "name": "Veg Biryani",
                                  "category": "Recommended",
                                  "description": "Mixed vegetables and basmati rice cooked dum style",
                                  "price": 18000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "125"
                                    }
                                  },
                                  "imageId": "mockdata/items/100098",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442056"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100099",
                                  "name": "Chicken 65",
                                  "category": "Recommended",
                                  "description": "Spicy deep-fried chicken bites, South Indian style",
                                  "price": 22000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "630"
                                    }
                                  },
                                  "imageId": "mockdata/items/100099",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442056"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Raita & Sides",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100100",
                                  "name": "Boti Kebab",
                                  "category": "Recommended",
                                  "description": "Marinated meat chunks grilled on skewers",
                                  "price": 26000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "836"
                                    }
                                  },
                                  "imageId": "mockdata/items/100100",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "442056"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100101",
                                  "name": "Raita",
                                  "category": "Recommended",
                                  "description": "Cool yogurt with cucumber and spices",
                                  "price": 5000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "225"
                                    }
                                  },
                                  "imageId": "mockdata/items/100101",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442056"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Desserts",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100102",
                                  "name": "Double Ka Meetha",
                                  "category": "Recommended",
                                  "description": "Hyderabadi bread pudding dessert",
                                  "price": 11000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "440"
                                    }
                                  },
                                  "imageId": "mockdata/items/100102",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "442056"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  },
  "639466": {
    "id": "639466",
    "name": "Dum Safar Biryani",
    "cuisine": "Biryani, Mughlai",
    "area": "Katra",
    "rating": 4.1,
    "costForTwo": "₹350 for two",
    "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dumsafar",
    "data": {
      "success": true,
      "data": {
        "cards": [
          {
            "card": {
              "card": {
                "@type": "restaurant",
                "info": {
                  "id": "639466",
                  "name": "Dum Safar Biryani",
                  "cuisines": [
                    "Biryani",
                    "Mughlai"
                  ],
                  "avgRating": 4.1,
                  "costForTwo": "₹350 for two",
                  "cloudinaryImageId": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dumsafar",
                  "areaName": "Katra"
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "info"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "offers"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "filters"
              }
            }
          },
          {
            "groupedCard": {
              "cardGroupMap": {
                "REGULAR": {
                  "cards": [
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Biryanis",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100030",
                                  "name": "Chicken Dum Biryani",
                                  "category": "Recommended",
                                  "description": "Fragrant basmati rice slow-cooked with spiced chicken",
                                  "price": 25000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "779"
                                    }
                                  },
                                  "imageId": "mockdata/items/100030",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "639466"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100031",
                                  "name": "Mutton Biryani",
                                  "category": "Recommended",
                                  "description": "Tender mutton pieces layered with aromatic rice",
                                  "price": 32000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "883"
                                    }
                                  },
                                  "imageId": "mockdata/items/100031",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "639466"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Starters",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100032",
                                  "name": "Veg Biryani",
                                  "category": "Recommended",
                                  "description": "Mixed vegetables and basmati rice cooked dum style",
                                  "price": 18000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCountV2": "533"
                                    }
                                  },
                                  "imageId": "mockdata/items/100032",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "639466"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100033",
                                  "name": "Chicken 65",
                                  "category": "Recommended",
                                  "description": "Spicy deep-fried chicken bites, South Indian style",
                                  "price": 22000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCountV2": "272"
                                    }
                                  },
                                  "imageId": "mockdata/items/100033",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "restaurantId": "639466"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Raita & Sides",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100034",
                                  "name": "Boti Kebab",
                                  "category": "Recommended",
                                  "description": "Marinated meat chunks grilled on skewers",
                                  "price": 26000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCountV2": "956"
                                    }
                                  },
                                  "imageId": "mockdata/items/100034",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "639466"
                                }
                              }
                            },
                            {
                              "card": {
                                "info": {
                                  "id": "100035",
                                  "name": "Raita",
                                  "category": "Recommended",
                                  "description": "Cool yogurt with cucumber and spices",
                                  "price": 5000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCountV2": "164"
                                    }
                                  },
                                  "imageId": "mockdata/items/100035",
                                  "isVeg": 0,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "639466"
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Desserts",
                          "itemCards": [
                            {
                              "card": {
                                "info": {
                                  "id": "100036",
                                  "name": "Double Ka Meetha",
                                  "category": "Recommended",
                                  "description": "Hyderabadi bread pudding dessert",
                                  "price": 11000,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCountV2": "298"
                                    }
                                  },
                                  "imageId": "mockdata/items/100036",
                                  "isVeg": 1,
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "restaurantId": "639466"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  }
};