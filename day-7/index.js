function makeOp(opName) {
  return function (account, amount) {
    this.gateway.doOperation(amount, account[opName]);
    return account[opName](amount);
  }
}

function OnlineBank() {
  this.gateway = new Gateway();
}

OnlineBank.prototype.deposit = makeOp('deposit');
