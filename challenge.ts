import * as assert from 'assert';


class BankCustomer {
    private name : string;
    private secretCode : string;

    constructor(name : string, secretCode : string){
        this.name = name;
        this.secretCode = secretCode;
    }

    getName() : string {
        return this.name;
    }

    verifyPinInput(secretCode : string) : boolean {
        let result  = false;
        if(this.secretCode === secretCode){
            result = true;
        }
        return result;
    }
}
// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
//console.log(customer.getName());