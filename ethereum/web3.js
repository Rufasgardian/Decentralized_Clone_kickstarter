import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider);
let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    // we are in the browser && metamask is running
    web3 = new Web3(window.web3.currentProvider);
}else{
    const provider = new Web3.providers.HttpProvider(
    // we are in the server || metamask is not running
        'https://rinkeby.infura.io/v3/3d5e8a9967f747f79070721133a2dfae'
    );

    web3 = new Web3(provider);

}

export default web3;