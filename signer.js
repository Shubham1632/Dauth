const { ethers } = require("ethers");
const { contractAddress, abi, providerUrl } = require("./constants.js");

class DauthSigner {
  constructor(privateKey) {
    this.provider = new ethers.providers.JsonRpcProvider(providerUrl);
    this.signer = new ethers.Wallet(privateKey, this.provider);
    this.contract = new ethers.Contract(contractAddress, abi, this.signer);
  }

  async createUser(username, email, password, address) {
    const result = await this.contract.createUser(
      username,
      email,
      password,
      address
    );
    return result;
  }

  async makeAdmin(address) {
    const result = await this.contract.makeAdmin(address);
    return result;
  }
}

module.exports = DauthSigner;
