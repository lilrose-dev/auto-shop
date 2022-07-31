const model = require('./model')

module.exports = {
    Query: {
        getAllCar: async() => await model.getAllCar(),
        getById: async(_, {id}) => {
            return await model.getById(id)
        }

    },
    Mutation: {
       newCar: async(_, {brand, models, color, year, engineCapacity, fuel, transmission, mileage, price}) => {
            const autoCar = await model.newCar(brand, models, color, year, engineCapacity, fuel, transmission, mileage, price)
            return autoCar
       },

        updateCar: async(_, {brand, models, color, year, engineCapacity, fuel, transmission, mileage, price, id}) =>{
            const updateCar = await model.updateCar(brand, models, color, year, engineCapacity, fuel, transmission, mileage, price, id)
            return updateCar
        },

        delCar: async(_, {id}) => {
            await model.delCar(id)
            return 'Car is deleted'
        }
    }, 

    Cars: {
        id: (global) => global.car_id,
        brand: (global) => global.car_brand,
        models: (global) => global.car_model,
        color: (global) => global.car_color,
        year: (global) => global.car_year,
        engineCapacity: (global) => global.car_engine_capacity,
        fuel: (global) => global.car_fuel,
        transmission: (global) => global.car_transmission,
        mileage: (global) => global.car_mileage,
        price: (global) => global.car_price
    }
}