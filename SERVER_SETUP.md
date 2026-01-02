# Server & Backend Setup Guide

This guide focuses on hosting the backend (PHP + MySQL) for Viyara Embedded Solutions.

## 1. Database Setup (MySQL)

1.  **Create a Database**
    Access your hosting provider (cPanel/phpMyAdmin) and create a new database (e.g., `viyara_db`).

2.  **Import Schema**
    Run the SQL commands from `database.sql` to create the required tables:
    - `contacts` (stores contact form submissions)
    - `subscribers` (stores newsletter emails)

    *You can import `database.sql` directly using phpMyAdmin's "Import" tab.*

## 2. Backend Configuration

The PHP files (`contact.php`, `subscribe.php`) require a configuration file to connect to the database.

1.  **Create `db_config.php`**
    In your server's public folder (where you upload the site), create a file named `db_config.php`.

2.  **Add Credentials**
    Paste the following code and update with your actual database details:

    ```php
    <?php
    $servername = "localhost";
    $username = "YOUR_DB_USER"; 
    $password = "YOUR_DB_PASSWORD";
    $dbname = "YOUR_DB_NAME";   
    ?>
    ```

    > **Security Note:** This file is automatically protected from public access by the `.htaccess` file.

## 3. Uploading Files

Upload the contents of the `dist/` folder to your server's `public_html` or `www` directory. 
Ensure the following files are present:
- `index.html`
- `assets/`
- `contact.php`
- `subscribe.php`
- `.htaccess`
- `db_config.php` (Manually created)

## 4. Troubleshooting

- **500 Internal Server Error**: Check your `db_config.php` credentials.
- **403 Forbidden**: Pass. The `.htaccess` is doing its job protecting sensitive files.
- **Emails not saving**: Ensure the `contacts` or `subscribers` tables exist and match the `database.sql` schema.
