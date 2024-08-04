function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber,
    this.balance = balance,
    this.owner = owner

    this.deposit = function(amount) {
        this.balance += amount
        console.log(`Your new balance is ${this.balance}.`);
    }

    this.withdrawal = function(amount) {
        this.balance -= amount
        console.log(`Your new balance is ${this.balance}`);
    }

    this.interest = function(time) {
        let interest = this.balance * (Math.pow((1 + 5 / 100), time));
        let compound = interest - this.balance;
        console.log(`Your compound interest after ${time} years would be ${compound} at your current balance.`);
    }
}

let BankAccount = new Account(11122233, 10000, "Billie Joe Armstrong")

BankAccount.deposit(200)
BankAccount.withdrawal(100)
BankAccount.interest(2)

