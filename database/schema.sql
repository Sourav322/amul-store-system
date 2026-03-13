CREATE TABLE products (
 id SERIAL PRIMARY KEY,
 name VARCHAR(200),
 barcode VARCHAR(100),
 category VARCHAR(100),
 purchase_price NUMERIC,
 selling_price NUMERIC,
 stock INTEGER DEFAULT 0,
 expiry_date DATE,
 status VARCHAR(20) DEFAULT 'ACTIVE'
);

CREATE TABLE sales (
 id SERIAL PRIMARY KEY,
 total NUMERIC,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sale_items (
 id SERIAL PRIMARY KEY,
 sale_id INTEGER,
 product_id INTEGER,
 quantity INTEGER,
 price NUMERIC
);

CREATE TABLE stock_movements (
 id SERIAL PRIMARY KEY,
 product_id INTEGER,
 type VARCHAR(50),
 quantity INTEGER,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
