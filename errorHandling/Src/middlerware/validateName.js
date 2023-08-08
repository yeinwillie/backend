const { ClientError } = require("../utils/errors");

const validateName = (req, res, next) => {
    const {name} = req.query;
    if (name && name.includes('@')) throw new  ClientError('Invalid name',400); // por defecto toma 400
    next();   
    
};

module.exports = validateName;