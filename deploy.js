const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider("abandon quiz good measure cigar appear weasel cheap resemble person eight city", 
"https://goerli.infura.io/v3/85114c2d39814bfe9588e72663e1a169"
);

const web3 = new Web3(provider);


async function deploy () {
    try{
        const accounts = await web3.eth.getAccounts();
        console.log(accounts, "Accounts")
        const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({
            data: bytecode, 
            arguments: ["Anj"]
        }).send({
            from: accounts[0],
            gas: "1000000"
        })
    
        console.log(result.options.address, "Result")

    } catch(err) {
        console.log(err)
    }
}

deploy();