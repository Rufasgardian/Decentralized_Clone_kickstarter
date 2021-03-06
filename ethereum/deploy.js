const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory =  require('./build/CampaignFactory');

const provider = new HDWalletProvider(
    'grass invest asset aerobic elder genuine day vehicle foster fury spring pitch', //mnemonic
    'https://rinkeby.infura.io/v3/3d5e8a9967f747f79070721133a2dfae' 
);

const web3 = new Web3(provider);

const deploy = async function(){
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy -> ', accounts[0]);
    

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                                .deploy({ data: compiledFactory.bytecode })
                                .send({ gas: '1000000', from: accounts[0] });

    
    console.log('Contract deployed to ', result.options.address);
}

deploy();