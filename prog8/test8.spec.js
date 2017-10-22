// only spies
describe("A spy", function() {
  
    var foo, bar = null;

      beforeEach(function() {
          
        foo = {
            
          setBar: function(value) {
            bar = value;
          }
            
        };

        spyOn(foo, 'setBar');

        foo.setBar(123);
        foo.setBar(456, 'another param');
      
      });
    
    it("tracks that the spy was called", function() {
        expect(foo.setBar).toHaveBeenCalled();
    });
    
    it("tracks that the spy was called x times", function() {
        expect(foo.setBar).toHaveBeenCalledTimes(2);
    });
    
    it("tracks all the arguments of its calls", function() {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });
    
    it("stops all execution on a function", function() {
        expect(bar).toBeNull();
    });
    
});

// spies with and.callThrough

describe("A spy, when configured to call through", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
      
    foo = {
        
      setBar: function(value) {
        bar = value;
      },
        
      getBar: function() {
        return bar;
      }
        
    };

    spyOn(foo, 'getBar').and.callThrough();

    foo.setBar(123);
    fetchedBar = foo.getBar();
      
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(123);
  });
    
  it("tracks that the spy was called x times", function() {
    expect(foo.getBar).toHaveBeenCalledTimes(1);
  });
    
});

// spies with and.returnValue

describe("A spy, when configured to fake a return value", function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
      
    foo = {
        
      setBar: function(value) {
        bar = value;
      },
        
      getBar: function() {
        return bar;
      }
        
    };

    spyOn(foo, "getBar").and.returnValue(745);

    foo.setBar(123);
    fetchedBar = foo.getBar();
      
  });

  it("tracks that the spy was called", function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called returns the requested value", function() {
    expect(fetchedBar).toEqual(745);
  });
    
});

// spies with and.returnValues()

describe("A spy, when configured to fake a series of return values", function() {
  var foo, bar;

  beforeEach(function() {
    
      foo = {
      setBar: function(value) {
        bar = value;
      },
          
      getBar: function() {
        return bar;
      }
          
    };

    spyOn(foo, "getBar").and.returnValues("fetched first", "fetched second");

    foo.setBar(123);
      
  });

  it("tracks that the spy was called", function() {
    foo.getBar();
    expect(foo.getBar).toHaveBeenCalled();
  });

  it("should not affect other functions", function() {
    expect(bar).toEqual(123);
  });

  it("when called multiple times returns the requested values in order", function() {
    expect(foo.getBar()).toEqual("fetched first");
    expect(foo.getBar()).toEqual("fetched second");
    expect(foo.getBar()).toBeUndefined();
  });
    
});