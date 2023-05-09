# Dauth - Decentralized User Authentication

Dauth is a package for decentralized user authentication, built using Ethereum smart contracts and the Ether.js library. With Dauth, you can easily create a decentralized user authentication system on the Ethereum blockchain.

## Installation

To use Dauth in your project, you can install it via npm:

```bash
npm i dauth-sso
```

---

## Usage

To use Dauth, you just need to have a object of the class Dauth. which will be an instance of all the package.

You can use the methods in the class to verify the user, get the user from address, or check user with username etc.

It will be very helpfull in building some application which needs a decentralized user authentication. you just need to import the npm package and initialize the object of the class Dauth, where you can access all the required methods.

```js
const { Dauth } = require("dauth-sso");

const dauth = new Dauth();
```

In this example the Dauth is the class in the package which contains all the methods.

---

## Creating user

For the integrity of the system we have decided to have an authorisation over creating a new user in the smart contract. therfore there is a modifire on the function of creating a user that only allows the admin of the smart contract to creat a user.

For getting the authority to create a user, the organization need to register themselves over the official website of the Dauth-SSO. After verification ther organisations adress will be admin of the smart contract and they can use the create user functionality.

```js
const { Dauth } = require("dauth-sso");

const dauthWithSigner = new Dauth(privateKey);
```

The admin can create a object with signer in it as mentioned above, so that admin will able to use the createUser function (as write operation on blockchain requires gas fees).

---

## Methods

Once you have an instance of the Dauth class, you can use the following methods to manage user authentication:

#### `async verifyUser(username: string, password: string): Promise<bool>`

Verifies the user's username and password and returns the boolean expression. If the username and password are not valid then it will return a false boolean expression.

```js
const result = await dauth.verifyUser(username, password);
cosole.log(result);
```

OR

```js
dauth
  .verifyUser(username, password)
  .then((res) => {
    if (res) {
      console.log("User is verified!");
    } else {
      console.log("User is not verified!");
    }
  })
  .catch((err) => {
    console.error(`Error verifying user: ${err}`);
  });
```
---

#### `async isUserOfAddress(address: string): Promise<boolean>`

Checks if a user with the specified Ethereum address exists in the authentication system.

```js
const isUser = await dauth.isUserOfAddress(address);
if (isUser) {
  console.log("User of this address exist");
} else {
  console.log("User of this address does not exist");
}
```

---

#### `async isUserOfName(username: string): Promise<boolean>`

Checks if a user with the specified username exists in the authentication system.

```js
const isUser = await dauth.isUserOfName(user);
if (isUser) {
  console.log("User of this username exist");
} else {
  console.log("User of this username does not exist");
}
```
---

#### `async getUserNameByAddress(address: string): Promise<string>`

Gets the username associated with the specified Ethereum address. If the address is not associated with a username, an error is thrown.

```js
const username = await dauth.getUserNameByAddress(address);
console.log(username);
```
---

#### `async getUserNameByAddress(address: string): Promise<bool>`
  
 Creats the user in the smart contract memory, needs to be evcated by the signed object of the package. thus need your private key for creating a signer for the transaction.
  
 ```js
  const result = await dauthWithSigner.createUser(username, email, password, address);
  if (result) {
  console.log("User is created");
} else {
  console.log("User is already in the memory");
}
  ```


