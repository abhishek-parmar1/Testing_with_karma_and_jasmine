// nested describe
describe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });

  describe("nested inside a second describe", function() {
    var bar;

    beforeEach(function() {
      bar = 1;
    });

    it("can reference both scopes as needed", function() {
      expect(foo).toEqual(bar);
    });
  });
});

// pending suits

xdescribe("A spec", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });
});

// pending specs

describe("Pending specs", function() {

    xit("can be declared 'xit'", function() {
        expect(true).toBe(false);
    });
    
    it("can be declared with 'it' but without a function");
    
    it("can be declared by calling 'pending' in the spec body", function() {
        expect(true).toBe(false);
        pending('this is why it is pending');
    });
    
});