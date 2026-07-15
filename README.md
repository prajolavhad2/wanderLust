# 🧭 WanderLust

A full-stack Airbnb-inspired travel listing platform built with Node.js, Express, MongoDB, and EJS.

🌐 **Live Demo:** [wanderlust on Render]https://wanderlust-i4cj.onrender.com/listings

---

## 📸 Features

- 🏠 **Browse Listings** — Explore travel destinations with images, prices, and locations
- 🔍 **Search & Filter** — Real-time search by title, location, or country
- 🗂️ **Category Filters** — Filter by Trending, Rooms, Mountains, Castles, Amazing Pools, Camping, Farms, Arctic, Iconic-cities
- 💰 **Price Sorting** — Sort listings by price (low to high / high to low)
- 💳 **Payment Integration** — Book listings with Razorpay payment gateway
- ❤️ **Wishlist** — Save favourite listings
- 🗺️ **Interactive Map** — MapBox map showing listing location on each listing page
- ⭐ **Reviews & Ratings** — Leave star ratings and comments on listings
- 🔐 **Authentication** — Signup, Login, Logout with Passport.js
- 📁 **Image Upload** — Upload listing images via Cloudinary
- 📅 **Booking System** — Select check-in/check-out dates and confirm bookings
- 🧾 **My Bookings** — View all your confirmed bookings
- 👤 **User Profile** — Avatar dropdown with wishlist and bookings

---

## 🛠️ Tech Stack

| Technology         | Usage             |
| ------------------ | ----------------- |
| Node.js            | Backend runtime   |
| Express.js         | Web framework     |
| MongoDB + Mongoose | Database          |
| EJS + EJS-Mate     | Templating engine |
| Passport.js        | Authentication    |
| Cloudinary         | Image storage     |
| MapBox             | Interactive maps  |
| Razorpay           | Payment gateway   |
| Bootstrap 5        | Frontend styling  |
| Render             | Deployment        |
| MongoDB Atlas      | Cloud database    |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB
- Cloudinary account
- MapBox account
- Razorpay account

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/prajolavhad2/wanderLust.git
cd wanderLust
```

2. **Install dependencies:**

```bash
npm install --legacy-peer-deps
```

3. **Create `.env` file in root directory:**

```env
ATLASDB_URL=your_mongodb_atlas_url
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
SECRET=your_session_secret
```

4. **Initialize sample data:**

```bash
node init/index.js
```

5. **Start the server:**

```bash
nodemon app.js
```

6. **Open in browser:**

```
http://localhost:8082
```

---

## 📁 Project Structure

```
wanderLust/
├── controllers/        # Route controllers
│   ├── listings.js
│   ├── reviews.js
│   ├── users.js
│   └── bookings.js
├── models/             # Mongoose models
│   ├── listing.js
│   ├── review.js
│   ├── user.js
│   └── booking.js
├── routes/             # Express routes
│   ├── listing.js
│   ├── review.js
│   ├── user.js
│   └── booking.js
├── views/              # EJS templates
│   ├── listings/
│   ├── users/
│   ├── bookings/
│   ├── includes/
│   └── layouts/
├── public/             # Static files (CSS, JS)
├── utils/              # Utility functions
├── init/               # Database seed data
├── middleware.js        # Custom middleware
├── cloudConfig.js      # Cloudinary config
├── schema.js           # Joi validation schemas
└── app.js              # Main application file
```

---

## 🔑 Environment Variables

| Variable              | Description                     |
| --------------------- | ------------------------------- |
| `ATLASDB_URL`         | MongoDB Atlas connection string |
| `CLOUD_NAME`          | Cloudinary cloud name           |
| `CLOUD_API_KEY`       | Cloudinary API key              |
| `CLOUD_API_SECRET`    | Cloudinary API secret           |
| `MAP_TOKEN`           | MapBox access token             |
| `RAZORPAY_KEY_ID`     | Razorpay test key ID            |
| `RAZORPAY_KEY_SECRET` | Razorpay test secret key        |
| `SECRET`              | Express session secret          |

---

## 💳 Test Payment

Use these test card details for Razorpay:

- **Card Number:** `5267 3181 8797 5449`
- **Expiry:** Any future date
- **CVV:** Any 3 digits

---

## 📝 License

This project is for educational purposes.

---

## 👨‍💻 Author

**Prajol Avhad**

- GitHub: [@prajolavhad2](https://github.com/prajolavhad2)
