class DataPersistException extends Error{

    constructor(message,status_code){
        super(message,status_code)
    }
}
const dataPersistException = new DataPersistException();
module.exports = dataPersistException;