let SimpleStorage = artifacts.require("simpleStorage");

module.exports = function(developer) {
    deployer.deploy(SimpleStorage);
};