const functions = require('../functions/faker.functions')

module.exports = app =>{
    app.get("/api/users/new", (req, res) =>{
        const nuevoUser = functions.objetoUser();
        res.json(nuevoUser);
    });
    
    app.get("/api/companies/new", (req, res) =>{
        const nuevaEmpresa = functions.objetoEmpresa();
        res.json(nuevaEmpresa);
    });
    
    app.get("/api/user/company", (req, res) =>{
        const nuevaEmpresa = functions.objetoEmpresa();
        const nuevoUser = functions.objetoUser();
        res.json({User:nuevoUser, Empresa:nuevaEmpresa});
    });
}