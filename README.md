# 🍔 Food Ordering App

A Swiggy-inspired food ordering web application built with React and Tailwind CSS. It features a dynamic restaurant listing page with a shimmer UI for smooth loading, and an accordion-style restaurant menu for browsing dishes in a clean, collapsible layout. Cart management is powered by Redux Toolkit, letting users add, remove, and update item quantities in real time, complete with cross-restaurant cart protection to avoid mixing orders. The app is fully responsive, styled with a custom orange theme inspired by the food-delivery aesthetic.

**🔗 Live Demo:** [food-ordering-app-ten-green.vercel.app](https://food-ordering-app-ten-green.vercel.app)

---

## ✨ Features

- 🍽️ **Restaurant Listing** — browse restaurants with ratings, cuisines, and delivery time
- 🔍 **Search** — filter restaurants by name
- 💀 **Shimmer UI** — smooth loading placeholders instead of blank screens
- 📋 **Accordion Menu** — expandable/collapsible restaurant menu for easy browsing
- 🛒 **Cart Management** — add, remove, and update item quantities via Redux Toolkit
- 🚫 **Cross-Restaurant Protection** — warns users before mixing items from different restaurants
- 🔴 **Cart Badge** — live item count on the cart icon
- 📱 **Fully Responsive** — works smoothly across mobile, tablet, and desktop
- 👋 **About Page** — a bit about the developer behind the app
- 📬 **Contact Page** — quick links to reach out

---

## 🛠️ Tech Stack

| Category | Tech |
|---|---|
| Frontend | React |
| State Management | Redux Toolkit |
| Styling | Tailwind CSS |
| Bundler | Parcel |
| Routing | React Router |
| Deployment | Vercel |

---

## 📂 Project Structure

```
Food-Ordering-App/
├── src/
│   ├── components/     # Reusable React components
│   │    ├── About.js
│   │    ├── Accordian.js
│   │    ├── Add.js
│   │    ├── Body.js
│   │    ├── Cart.js
│   │    ├── Contact.js
│   │    ├── Error.js
│   │    ├── Header.js
│   │    ├── OnlineStatus.js
│   │    ├── Restaurantmenu.js
│   │    ├── RestaurantTitle.js
│   │    ├── RestaurantCard.js
│   │    ├── Shimmer.js
│   │    └── User.js        
│   ├── utils/          # Mock data, constants, Redux store/slices
│   │    ├── appStore.js
│   │    ├── cartSlice.js
│   │    ├── constant.js
│   │    ├── useOnlineStatus.js
│   │    └── useRestaurantmenu.js 
│   └── script.js
├── index.html
├── style.css
├── vercel.json
└── package.json
```

---

## 🚀 Getting Started

Clone the repo and run it locally:

```bash
git clone https://github.com/pragatidwivedii/Food-Ordering-App.git
cd Food-Ordering-App
npm install
npm start
```

The app will be available at `http://localhost:1234` (Parcel's default port).

To create a production build:

```bash
npm run build
```

---

## 📝 Notes

- Restaurant and menu data use **mock data** instead of live Swiggy API calls, since Swiggy blocks non-browser/production requests (CORS + bot protection).
- Deployed on **Vercel** with SPA rewrites configured via `vercel.json` for client-side routing.

---

## 👩‍💻 About the Developer

Built by **Pragati Dwivedi** as a portfolio project to practice React, Redux Toolkit, and responsive UI design.

- GitHub: [github.com/pragatidwivedii](https://github.com/pragatidwivedii)
- LinkedIn: [https://www.linkedin.com/in/pragati-dwivedi-00abb6360/](https://www.linkedin.com/in/pragati-dwivedi-00abb6360/)
- Email: pragatihripra@gmail.com

