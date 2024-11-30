# Trucking Logistics Management System

## Overview

This project simulates a **Trucking Logistics Management System** designed to manage the interaction between truck owners, drivers, and customers. The application is built using **Next.js** and features **NextAuth** for user authentication via Google OAuth 2.0. It fetches data from a simulated backend powered by **JSON Server** and leverages **React Query** for efficient data handling.

The goal is to provide a user-friendly and responsive single-page application where users can manage trucks, drivers, and orders effectively.

---

## Features

### **User Authentication**

- Google OAuth 2.0 integration and credentials (email and password) using **NextAuth**.
- Personalized dashboard after login.

### **Dashboard**

- Displays a summary of trucks, drivers, and active orders.
- Includes the user's name and email.

### **Truck Management**

- List trucks with details:
  - Truck ID, Plate Number, Capacity, and Status (Available, Delivering, Maintenance).
- Add, edit, or remove trucks.
- Update truck status dynamically (e.g., Available → Delivering).

### **Driver Management**

- List drivers with details:
  - Driver Name, License Number, Assigned Truck, and Contact Number.
- Add, edit, or remove drivers.
- Assign a driver to a specific truck.

### **Order Management**

- List orders with details:
  - Order ID, Customer Name, Truck Assigned, Driver Assigned, and Order Status (Pending, In Progress, Completed).
- Add, edit, or view orders.
- Assign drivers to orders and update truck status accordingly.
- Complete orders and reset truck/driver availability.
- **Constraints:**
  - Drivers and trucks currently delivering cannot be reassigned to new orders.

### **API Integration**

- Fetch data using **React Query** from **JSON Server** REST APIs.
- Perform CRUD operations for trucks, drivers, and orders.

### **Error Handling**

- Reusable popup for displaying success and error messages.
- Graceful handling of failed API requests.

### **Prerequisites**

- Node.js (v16 or higher).
- A Google Cloud Console project with OAuth credentials for Google Login.

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/BenoitIT/frontend-app-Trucking-Logistics-.git
   cd trucking-logistics-management-system
   ```
2. Install dependencies:
   npm install
3. Set up the .env file:
   NEXT_PUBLIC_API_URL=<json-server-api-base-url>  
   GOOGLE_CLIENT_ID=<your-google-client-id>  
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>  
   NEXTAUTH_SECRET=<your-next-auth-secret>  
   NEXTAUTH_URL=<your-app-url>
4. Run both json-server and next js server
   npm run dev
5. you can even build the app
   npm run build
