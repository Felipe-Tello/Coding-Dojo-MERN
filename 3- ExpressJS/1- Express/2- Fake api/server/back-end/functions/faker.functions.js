const {faker} = require('@faker-js/faker');
module.exports.objetoUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
});

module.exports.objetoEmpresa = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    direccion: {
        calle: faker.address.streetAddress(),
        cuidad: faker.address.city(),
        estado: faker.address.state(),
        cp: faker.address.zipCode(),
        pais: faker.address.country()
    }
});

