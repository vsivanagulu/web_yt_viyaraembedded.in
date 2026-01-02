# Viyara Embedded Solutions Website

This is the official website for Viyara Embedded Solutions, built with **React**, **Vite**, and **Tailwind CSS**. It includes a PHP backend for handling contact form submissions.

## 🚀 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React (Icons)
- **Backend**: PHP (Contact Form)
- **database**: MySQL (for storing contact queries)
- **Deployment**: Static files served via Apache/Nginx + PHP support

## 🛠️ Setup & Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This command acts as a **smart build**:
1.  Compiles the React app into optimized static files.
2.  **Automatically copies** backend files (`contact.php`, `db_config.php`, `.htaccess`) to the `dist` folder.

The resulting `dist` folder is ready to be uploaded to your hosting server (cPanel, Hostinger, GoDaddy, etc.).

## 🔒 Security & Configuration

### Database Configuration
The project uses `db_config.php` to store database credentials securely.
**IMPORTANT**: This file is excluded from git for security. You must create it manually on your server or update the local one:

**`dist/db_config.php`**:
```php
<?php
$servername = "localhost";
$username = "YOUR_DB_USERNAME";
$password = "YOUR_DB_PASSWORD";
$dbname = "YOUR_DB_NAME";
?>
```

### Security Headers
The `.htaccess` file is pre-configured with essential security headers:
- **X-Frame-Options**: DENY (Prevents Clickjacking)
- **X-Content-Type-Options**: nosniff
- It also **blocks access** to sensitive files like `.env`, `.sql`, and `db_config.php`.

## 📂 Project Structure

- `src/` - React source code
- `public/` - Static assets (images, robots.txt)
- `constants.tsx` - Centralized data for Products, Services, Clients, etc.
- `contact.php` - Backend logic for the contact form
- `dist/` - Production-ready build artifacts
