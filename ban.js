// Class definition for Stock
class Stock {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    // Method to display stock information
    displayStockInfo() {
      console.log(`Stock: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
    }
  }
  
  // Class definition for Portfolio
  class Portfolio {
    constructor(owner) {
      this.owner = owner;
      this.stocks = [];
      this.balance = 10000;  // Starting balance ($)
    }
  
    // Method to buy stocks
    buyStock(stock, quantity) {
      const cost = stock.price * quantity;
      if (this.balance >= cost) {
        this.balance -= cost;
        stock.quantity += quantity;  // Increase stock quantity
        this.stocks.push(stock);
        console.log(`Bought ${quantity} shares of ${stock.name} at $${stock.price} each.`);
        this.displayBalance();
      } else {
        console.log(`Insufficient funds to buy ${quantity} shares of ${stock.name}.`);
      }
    }
  
    // Method to sell stocks
    sellStock(stockName, quantity) {
      let stock = this.stocks.find(s => s.name === stockName);
      if (stock && stock.quantity >= quantity) {
        const earnings = stock.price * quantity;
        stock.quantity -= quantity;  // Decrease stock quantity
        this.balance += earnings;
        console.log(`Sold ${quantity} shares of ${stock.name} at $${stock.price} each.`);
        this.displayBalance();
      } else {
        console.log(`Not enough shares of ${stockName} to sell.`);
      }
    }
  
    // Method to display all stocks in the portfolio
    displayPortfolio() {
      console.log(`Portfolio of ${this.owner}:`);
      this.stocks.forEach(stock => stock.displayStockInfo());
      this.displayBalance();
    }
  
    // Method to display current balance
    displayBalance() {
      console.log(`Current balance: $${this.balance.toFixed(2)}`);
    }
  }
  
  // Creating stock objects
  const stock1 = new Stock('Apple', 150, 0);    // Stock for Apple
  const stock2 = new Stock('Tesla', 250, 0);    // Stock for Tesla
  
  // Creating a portfolio for an investor
  const myPortfolio = new Portfolio('John Doe');
  
  // Buying and selling stocks
  myPortfolio.buyStock(stock1, 20);  // Buy 20 shares of Apple
  myPortfolio.buyStock(stock2, 10);  // Buy 10 shares of Tesla
  myPortfolio.sellStock('Apple', 5); // Sell 5 shares of Apple
  
  // Display portfolio details
  myPortfolio.displayPortfolio();