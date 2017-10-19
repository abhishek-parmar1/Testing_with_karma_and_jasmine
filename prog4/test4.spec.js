describe("DateTime", function () {
    
    it("returns the current time when called with no arguments", function () {
        
        // get the current time in lower limit
        var lowerLimit = new Date().getTime(),
            // call the  DateTime() without any parameters
            offset = DateTime().offset,
            // get the current time in upper limit
            upperLimit = new Date().getTime();
        
        // now check the time returned  by the DateTime() between upper limit and lower limit
        expect(offset).not.toBeLessThan(lowerLimit);
        expect(offset).not.toBeGreaterThan(upperLimit);
        
    });
    
});
