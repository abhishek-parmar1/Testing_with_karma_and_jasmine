
describe('greet', () => {
   
    it('should include the name in the message', () => {
        expect(greet('mosh')).toContain('mosh');
    });
    
});

describe('getCurrencies', () => {
   
    it('should contain the supported currencies', () => {
        const result=getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
    
});
