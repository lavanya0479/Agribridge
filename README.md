# Agribridge

Agribridge is a full-stack web application designed to help farmers manage their products, transactions, and business. It allows farmers to list their products, set prices, and sell directly to consumers, eliminating middlemen. The application also provides features like profile management, transaction history, and more.

## Features

- **Farmer Registration**: Farmers can register with their email and other details, including OTP-based verification.
- **Farmer Profile**: Farmers can view and edit their profile with details like name, contact information, and location.
- **Product Management**: Farmers can add, update, or delete product listings, with support for image uploads.
- **Transaction History**: Farmers can view their transaction history, with filters and export options.
- **Financial Dashboard**: Displays financial data like revenue, received amounts, balance, and monthly earnings.
- **Responsive UI**: The application is designed to be responsive, ensuring good user experience on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React.js, CSS Modules
- **Backend**: Node.js, Express.js
- **Database**: Firebase (for image storage), MongoDB (for storing product and transaction data)
- **Authentication**: Email-based OTP verification
- **Libraries**: Axios (for API requests), React Router (for navigation)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/agribridge.git
   cd agribridge
2. **Install dependencies:**
   cd frontend
   npm install

   cd backend
   npm install
3. **Set up environment variables:**
   Create a .env file in the backend and add the necessary configurations such as MongoDB URI and Firebase credentials.
4. **Usage**
Farmer Registration: Register by providing your email and other details. An OTP will be sent to your email for verification.

Farmer Profile: Once registered, you can edit and update your profile details.

Product Management: Add or edit products in the "Products" section and upload product images.

Transaction History: Check your transaction history with filters to view details for specific periods.
