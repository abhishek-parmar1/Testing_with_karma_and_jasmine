
describe('compute', () => {
   
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    
    it('should increment the input if input is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
    
    it('failure test case', () => {
        const result = compute(-1);
        expect(result).toBe(1);
    });
});
