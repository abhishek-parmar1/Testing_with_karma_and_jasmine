
describe('VoteComponent', () => {
   
    //let component;  setting the type of component
    
    beforeEach(() => {
        totalVotes=0;
    });
    
    it('should increment total votes when upvoted', () => {
        upVote();
        expect(totalVotes).toBe(1);
    });
    
    it('should decrement total votes when downvoted', () => {        
         downVote();
         expect(totalVotes).toBe(-1);
    });
    
});

