<img width="668" alt="Screenshot 2024-02-06 at 9 44 19 PM" src="https://github.com/PradeepKundekar0101/Insights/assets/91021094/9a04361d-9539-4f19-80c0-d0d401706db0">
<h1>Admin Dashboard</h1>
# Admin Dashboard Project

## Overview

This project is an Admin Dashboard built using Next.js, Tailwind CSS, Node.js, Express, and MongoDB. It incorporates a sample data API to populate the MongoDB database and utilizes a MongoDB aggregation pipeline to generate analytics for sales, products, and user metrics.

## Features

### Sales Overview

- **Endpoint**: `GET /api/v1/orders/analytics`
- Provides total sales, discounted sales, net sales, and the total number of orders.
- Additional data includes average order value and conversion rate.

### Product Metrics

- **Endpoint**: `GET /api/v1/products/analytics`
- Offers information on top-selling products and product-wise sales distribution.
- Additional data includes total available stock for each product.

### User Metrics

- **Endpoint**: `GET /api/v1/users/analytics`
- Presents the number of registered users, gender distribution, and age distribution.
- Additional data includes average user age and the percentage of users with accounts linked to social media.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Tailwind CSS configured for styling


