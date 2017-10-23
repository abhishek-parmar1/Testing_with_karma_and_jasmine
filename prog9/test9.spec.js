// other tracking properties with spies
describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
      
    foo = {
        
      setBar: function(value) {
        bar = value;
      }
        
    };

    spyOn(foo, 'setBar');
      
  });
    
  it("tracks if it was called at all", function() {
      
    expect(foo.setBar.calls.any()).toEqual(false);

    foo.setBar();

    expect(foo.setBar.calls.any()).toEqual(true);
      
  });
    
  it("tracks the number of times it was called", function() {
      
    expect(foo.setBar.calls.count()).toEqual(0);

    foo.setBar();
    foo.setBar();

    expect(foo.setBar.calls.count()).toEqual(2);
      
  });
    
  it("tracks the arguments of each call", function() {
      
    foo.setBar(123);
    foo.setBar(456, "baz");

    expect(foo.setBar.calls.argsFor(0)).toEqual([123]);
    expect(foo.setBar.calls.argsFor(1)).toEqual([456, "baz"]);
      
  }); 
    
  it("tracks the arguments of all calls", function() {
    
    foo.setBar(123);
    foo.setBar(456, "baz");

    expect(foo.setBar.calls.allArgs()).toEqual([[123],[456, "baz"]]);
  
  }); 

  it("can provide the context and arguments to all calls", function() {
    
    foo.setBar(123);
    foo.setBar(456, "baz");
    
    expect(foo.setBar.calls.all()).toEqual([{object: foo,invocationOrder : 7, args: [123], returnValue: undefined},{object: foo,invocationOrder : 8, args: [456, "baz"], returnValue: undefined}]);
  
  });
    
  it("has a shortcut to the most recent call", function() {
    
    foo.setBar(123);
    foo.setBar(456, "baz");

    expect(foo.setBar.calls.mostRecent()).toEqual({object: foo,invocationOrder : 10, args: [456, "baz"], returnValue: undefined});
  
  });
    
  it("has a shortcut to the first call", function() {
    
    foo.setBar(123);
    foo.setBar(456, "baz");
    expect(foo.setBar.calls.first()).toEqual({object: foo, invocationOrder : 11, args: [123], returnValue: undefined});
  
  });
    
  it("can be reset", function() {
    
    foo.setBar(123);
    foo.setBar(456, "baz");

    expect(foo.setBar.calls.any()).toBe(true);

    foo.setBar.calls.reset();

    expect(foo.setBar.calls.any()).toBe(false);
  
  });
    
});