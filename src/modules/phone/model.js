const { fetch, fetchAll } = require('../../utils/postgres')

const Cars = `
    SELECT * FROM cars
`

const NEW_CAR = `
INSERT INTO cars(car_brand, car_model, car_color, car_year, car_engine_capacity, car_fuel, car_transmission, car_mileage, car_price)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *
`

const UPDATE_CAR = `UPDATE cars 
                    SET car_brand = $1, car_model = $2, car_color = $3, 
                    car_year = $4, car_engine_capacity = $5, car_fuel = $6, 
                    car_transmission = $7, car_mileage = $8, car_price = $9
                    WHERE car_id = $10 RETURNING * 
`

const DEL_CAR = `
    DELETE FROM cars WHERE car_id = $1
`
const GET_BY_ID = `
    SELECT * FROM cars WHERE car_id = $1
`

const getAllCar = () => fetchAll(Cars)
const getById = (id) => fetch(GET_BY_ID, id)
const newCar = (brand, models, color, year, engineCapacity, fuel, transmission, mileage, price) => fetch(NEW_CAR, brand, models, color, year, engineCapacity, fuel, transmission, mileage, price)
const updateCar = (brand, models, color, year, engineCapacity, fuel, transmission, mileage, price, id) => fetch(UPDATE_CAR, brand, models, color, year, engineCapacity, fuel, transmission, mileage, price, id)
const delCar = (id) => fetch(DEL_CAR, id)

module.exports ={
    getAllCar,
    getById,
    newCar,
    updateCar,
    delCar
}