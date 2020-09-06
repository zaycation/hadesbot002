//This is for a simple bot game that I will be adding later ~ Ignore for now

class Wallet {
  constructor(
    size = "small",
    ownerUsername,
    tag,
    amount = 0,
    color,
    isVulnerable = true
  ) {
    this.size = size;
    this.ownerUsername = ownerUsername;
    this.tag = tag;
    this.amount = amount;
    this.color = color;
    this.isVulnerable = isVulnerable;
  }
  search() {
    this.amount = Math.round(Math.random() * (150 - 15) + 15);
    console.log(
      `${this.ownerUsername} searches in every crevice possible for money and finds ${this.amount}! Make it work.....`
    );
  }
  slots() {
    this.amount = Math.round(Math.random() * (300000 - 350) + 350);
    console.log(
      `${this.ownerUsername} spins the slots and wins ${this.amount} 😎`
    );
  }
  loot() {
    this.amount = Math.round(Math.random() * (2000 - 300) + 300);
    console.log(
      `${this.ownerUsername} breaks a few locks to loot! The cops don't catch you this time....  YOu find ${this.amount} 😎`
    );
  }
}

const smallWallet = new Wallet("small", "zsh", 7219, 0, "red", 1.0);
const medWallet = new Wallet("medium", "hyper", 6939, 0, "green", 0.6);
const largeWallet = new Wallet("large", "brandos", 2581, 0, "blue", 0.25);

console.log(smallWallet);
console.log(medWallet);
console.log(largeWallet);

smallWallet.search();
medWallet.slots();
largeWallet.loot();
