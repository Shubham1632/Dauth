const { ethers } = require("ethers");
const { contractAddress, abi, providerUrl } = require("./constants.js");

class Dauth {
  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(providerUrl);
    this.authContract = new ethers.Contract(
      contractAddress,
      abi,
      this.provider
    );
  }

  async verifyUser(username, password) {
    const result = await this.authContract.validate(username, password);
    return result;
  }

  async IsUserOfAddress(address) {
    const result = await this.authContract.isUserOfAddress(address);
    return result;
  }

  async isUserOfName(userName) {
    const result = await this.authContract.isUserOfName(userName);
    return result;
  }

  async getUserNameByAddress(userAddress) {
    const result = await this.authContract.getUserNameByAddress(userAddress);
    return result;
  }
}

module.exports = Dauth;
