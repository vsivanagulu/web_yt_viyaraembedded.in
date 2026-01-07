# Server & Backend Setup Guide

This guide focuses on hosting the backend (PHP + MySQL) for Viyara Embedded Solutions.

## 1. Database Setup (MySQL)

1.  **Create a Database**
    Access your hosting provider (cPanel/phpMyAdmin) and create a new database.

2.  **Import Schema**
    Run the SQL commands from `api/database.sql` to create the required table:
    - `contacts` (stores contact form submissions)

    *You can import `api/database.sql` directly using phpMyAdmin's "Import" tab.*

## 2. Backend Configuration

The PHP file `api/contact.php` requires configuration.

1.  **Configuration File**
    The configuration is located at `api/db_config.php`.

2.  **Credentials**
    Ensure this file exists in `api/` and contains:

    ```php
    <?php
    $servername = "localhost";
    $username = "YOUR_DB_USER"; 
    $password = "YOUR_DB_PASSWORD";
    $dbname = "YOUR_DB_NAME";   
    ?>
    ```

## 3. Uploading Files

Upload the contents of the `dist/` folder to your server's `public_html` or `www` directory. 
**Crucially, ensure the `api` folder is uploaded.**

Required Structure on Server:
- `index.html`
- `assets/`
- `api/`
    - `contact.php`
    - `db_config.php`
- `.htaccess`

## 4. Troubleshooting

- **500 Internal Server Error**: Check your `api/db_config.php` credentials.
- **Emails not saving**: Ensure the `contacts` table exists.
