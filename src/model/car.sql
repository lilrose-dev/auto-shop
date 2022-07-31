CREATE TABLE cars(
    car_id SERIAL PRIMARY KEY NOT NULL,
    car_brand TEXT,
    car_model TEXT,
    car_color TEXT,
    car_year INT,
    car_engine_capacity INT,
    car_fuel TEXT,
    car_transmission TEXT,
    car_mileage INT,
    car_price BIGINT
);