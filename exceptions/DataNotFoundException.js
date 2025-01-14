class DataNotFoundException extends Error{
    constructor(message,statusCode){
        super(message,statusCode);
    }
}

const dataNotFoundException = new DataNotFoundException()
module.exports = dataNotFoundException