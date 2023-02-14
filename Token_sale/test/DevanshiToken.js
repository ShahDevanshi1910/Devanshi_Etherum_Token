var DevanshiToken = artifacts.require("./DevanshiToken.sol");

contract('DevanshiToken', function(accounts) {

  it('sets the total supply upon deployment', function() {
    return DevanshiToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 8000000, 'sets the total supply to 1,000,000');
    });
  });
})
