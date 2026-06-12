import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img id="logoimage" className= "logo" src = "https://i.pinimg.com/736x/59/ed/49/59ed496ac3518804b62c273b1b697cad.jpg"  />
            </div>
            <div className="nav-item">
                <ul className="nav-item">
                    <li ><a href="#" >Home</a></li>
                    <li><a href="#" >About Us</a></li>
                    <li><a href="#" >Contact Us</a></li>
                    <li> <a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    );
}
const resList = [ 
                  {
                    "info": {
                      "id": "80376",
                      "name": "Pind Balluchi",
                      "cloudinaryImageId": "15dfc7715f4ad014284f0ab50ca9a399",
                      "locality": "Stratchy Road",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Indian",
                        "Chinese",
                        "South Indian",
                        "Punjabi",
                        "Tandoor"
                      ],
                      "avgRating": 4.3,
                      "parentId": "6337",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "6.3K+",
                      "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹75"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "4.6K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/pind-balluchi-stratchy-road-civil-lines-rest80376",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "437010",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/90239691-25e8-4701-abab-2878abd08091_437010.jpg",
                      "locality": "Vinayak City Centre Mall",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2,
                      "parentId": "166",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "18K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-13 00:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Top-rated for Burger, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Burger, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/burger-king-vinayak-city-centre-mall-civil-lines-rest437010",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "442055",
                      "name": "The Good Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/382182e7-b4d7-4127-9168-1972545358ef_442055.jpg",
                      "locality": "Stanley Road",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.5,
                      "parentId": "7918",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.7K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/the-good-bowl-stanley-road-civil-lines-rest442055",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "381082",
                      "name": "Sagar Ratna",
                      "cloudinaryImageId": "ozlyehjc8donrtyln04u",
                      "locality": "Balson Crossing",
                      "areaName": "Balson Crossing",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Chinese",
                        "Italian",
                        "Beverages",
                        "Desserts",
                        "Pizzas"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "793",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "11K+",
                      "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                            "description": "Meals with high protein, low calorie and no added sugar"
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                            "description": "Top-rated for South Indian, based on user votes."
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Meals with high protein, low calorie and no added sugar",
                                  "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Top-rated for South Indian, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "15K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/sagar-ratna-balson-crossing-rest381082",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "442049",
                      "name": "Faasos - Wraps, Rolls & Shawarma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/ca658de1-a6d3-4870-8083-03e47de8cde9_442049.JPG",
                      "locality": "Stanley Road",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "21809",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "5.0K+",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/faasos-wraps-rolls-and-shawarma-stanley-road-civil-lines-rest442049",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "253769",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/40408979-8937-40d6-9ca9-d9af67a23391_253769.JPG",
                      "locality": "Old Katra",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "American",
                        "Fast Food",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "630",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "25K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 4.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-13 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                            "description": "Top-rated for Bolt, based on user votes."
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Top-rated for Burger, based on user votes."
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Top-rated for Corporate, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Bolt, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Top-rated for Burger, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Top-rated for Corporate, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹52"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "6.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/mcdonalds-old-katra-civil-lines-rest253769",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "442050",
                      "name": "Behrouz Biryani",
                      "cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
                      "locality": "Stanley Road",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Kebabs",
                        "Mughlai",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "1803",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.5K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/67_Best%20in%20Mughlai2026.png",
                            "description": "Top-rated for Mughlai, based on user votes."
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Mughlai, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/67_Best%20in%20Mughlai2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                                  "imageId": "newg.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/behrouz-biryani-stanley-road-civil-lines-rest442050",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "150366",
                      "name": "Keventers - Milkshakes & Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/13/c9247f1f-1c2f-4faf-be7f-47184ca3d7db_150366.JPG",
                      "locality": "Mahatma Gandhi Marg",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Beverages",
                        "Ice Cream",
                        "Desserts",
                        "Healthy Food"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "268997",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.6K+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-13 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/keventers-milkshakes-and-desserts-mahatma-gandhi-marg-civil-lines-rest150366",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "80321",
                      "name": "Paradise",
                      "cloudinaryImageId": "83c6069deb785fa77c3a8861b77c22c2",
                      "locality": "Hashimpur Road",
                      "areaName": "Balson Chauraha",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Bakery",
                        "Fast Food",
                        "Desserts",
                        "Beverages",
                        "Ice Cream"
                      ],
                      "avgRating": 4.5,
                      "parentId": "155080",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "12K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                            "description": "Top-rated for Cakes & Desserts, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Cakes & Desserts, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹39"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/paradise-hashimpur-road-balson-chauraha-rest80321",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "102150",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/8204871b-0256-494b-a757-29f1318a8eb8_102150.jpg",
                      "locality": "Sardar Patel Marg",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "5588",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "599",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                            "description": "Top-rated for Ice Cream, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Ice Cream, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹51"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/baskin-robbins-ice-cream-desserts-sardar-patel-marg-civil-lines-rest102150",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "442051",
                      "name": "Oven Story Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/28462fb2-51e4-45c6-b1ba-210fc0362f0e_442051.jpg",
                      "locality": "Stanley Road",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "3534",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.4K+",
                      "sla": {
                        "deliveryTime": 45,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/oven-story-pizza-stanley-road-civil-lines-rest442051",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "80420",
                      "name": "Bikanervala",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/7d87d5cc-75c2-49eb-b0db-9c69e2bdbcc8_80420.jpg",
                      "locality": "Civil Lines",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Street Food"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "45936",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "8.9K+",
                      "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 22:15:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "1.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/bikanervala-civil-lines-rest80420",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "442053",
                      "name": "Sweet Truth - Cake and Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/ca0da1aa-7731-4fab-88f9-7d14ee6124df_442053.JPG",
                      "locality": "Stanley Road",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Bakery",
                        "Beverages"
                      ],
                      "avgRating": 4.5,
                      "parentId": "4444",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.8K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 23:59:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/sweet-truth-cake-and-desserts-stanley-road-civil-lines-rest442053",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "82234",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/c5eb2cd7-36d3-40b3-97ab-ee095d72d623_82234.JPG",
                      "locality": "Civil Lines",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.2,
                      "parentId": "547",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "13K+",
                      "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 4.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-13 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                            "description": "Top-rated for Burger, based on user votes."
                          },
                          {
                            "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                            "description": "Top-rated for Corporate, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Burger, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                                  "theme": ""
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Top-rated for Corporate, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "6.6K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/kfc-civil-lines-rest82234",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "392164",
                      "name": "NIC Ice Creams",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/22/7ace9bca-1e3f-4db3-9382-914b4c377041_392164.JPG",
                      "locality": "Tb Sapru Marg",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "6249",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "4.3K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-13 00:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/nic-ice-creams-tb-sapru-marg-civil-lines-rest392164",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "332194",
                      "name": "Kwality Wall's Ice Cream And More",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/decf499f-1408-4f67-9e38-26072b2fe760_332194.JPG",
                      "locality": "Lajpat Rai Road",
                      "areaName": "Meergunj",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Ice Cream Cakes"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "582",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1.9K+",
                      "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-13 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                            "description": "Top-rated for Ice Cream, based on user votes."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Top-rated for Ice Cream, based on user votes.",
                                  "imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/kwality-walls-ice-cream-and-more-lajpat-rai-road-meergunj-rest332194",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "639466",
                      "name": "Dum Safar Biryani",
                      "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
                      "locality": "Civil Lines",
                      "areaName": "SQUARE MALL",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Hyderabadi",
                        "Kebabs",
                        "North Indian",
                        "barbeque"
                      ],
                      "avgRating": 4.2,
                      "parentId": "351013",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1.6K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-13 01:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/dum-safar-biryani-civil-lines-square-mall-rest639466",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "307655",
                      "name": "Cafe Coffee Day",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/a97c780e-f10f-42cb-a85b-0f3bd28811b5_307655.JPG",
                      "locality": "ELGIN ROAD-ALLAHABAD",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Burgers",
                        "Ice Cream",
                        "Bakery",
                        "Fast Food"
                      ],
                      "avgRating": 4.7,
                      "parentId": "1",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "215",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-12 23:55:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "475"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/cafe-coffee-day-elgin-road-civil-lines-rest307655",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "392165",
                      "name": "Grameen Kulfi",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/0deba67c-a77d-4814-a476-4f90232617ce_392165.JPG",
                      "locality": "Tb Sapru Marg",
                      "areaName": "Civil Lines",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "12175",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "1.1K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-06-13 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "Serves only 100% vegetarian food, with no non-veg items."
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Serves only 100% vegetarian food, with no non-veg items.",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "theme": ""
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹140",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "loyaltyDiscoverPresentationInfo": {
                        "logoCtx": {
                          "text": "BENEFITS",
                          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                        },
                        "freedelMessage": "FREE DELIVERY"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-1ddf6437-47bf-4148-8e8e-7f8b02df6bd7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/allahabad/grameen-kulfi-tb-sapru-marg-civil-lines-rest392165",
                      "type": "WEBLINK"
                    }
                  }];
const ResturantCard = (props) => {
    const {resData} = props ;
    const {name, cuisines, avgRating, totalRatingsString, locality, areaName, cloudinaryImageId} = resData.info;
    return(<div className="res-container">
        <img id = "reslogo" src = {"https://media-assets.swiggy.com/" + cloudinaryImageId}/>
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} Stars {'('+ totalRatingsString + 'ratings)'}</h5>
        <h5>{resData.info.sla.lastMileTravelString + ' - ' + locality +' ' + areaName}</h5>
    </div>);
}

const Body = () => {
    return(<div className="body">
        {/* <div className="searchBar"> Search</div> */}
        <div className="rescard">
            {resList.map((res) => {
                return <ResturantCard resData = {res} key = {res.info.id}/>
            })}
        </div>
        
    </div>);
}

const Footer = () => {

}

const AppLayout = () => {
    return ( <div>
        <Header/>
        <Body />
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
