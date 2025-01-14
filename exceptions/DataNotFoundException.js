class DataNotFoundException extends Error{
    constructor(message,statusCode){
        super(message,statusCode);
        
    }
}

module.exports = DataNotFoundException