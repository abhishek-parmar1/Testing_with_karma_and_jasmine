// defination of DateTime()
var DateTime = (function () {
    
    function createDateTime(date) {
        return {
            get offset() {
                return date.getTime(); 
            } 
        }; 
    } 
    
    // call the createDateTime() with current Date arugument
    return function () {
        return createDateTime(new Date()); 
    };
    
})();