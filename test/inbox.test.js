const Web3 = require("web3");
const ganache = require("ganache");
const assert = require("assert");

const {bytecode, interface} = require("../compile");

const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

beforeEach(async () => {

    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data: bytecode, 
        arguments: ["Anj baby"]
    }).send({
        from: accounts[0], 
        gas: "1000000"
    })
})

describe("Temp describe", () => {
    it("contract deployed", () => {

        assert.ok(inbox.options.address);

    })

    it("it has a default message", async () => {
        const message = await inbox.methods.message().call()
        console.log(message, "is it visible")
        assert.equal(message, "Anj baby");
        
    })
})