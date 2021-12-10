require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name rifle machine history half civil army gift'; 
let testAccounts = [
"0x67c84d2e747447a13156f626b33b9b8545e4604ea0bc4038eb1d42693f127049",
"0x1cd37b60c3fc7da35527c9718677fda0da8bbd9a493b5eebc923981b3307bbcb",
"0xf9a8cabff1c6333ef22c33f4c3494e3a8a7aff0555fac6344e721f00117278f7",
"0x60f8c05b16c753537b5f3c820a15859120532ae0cb3fcf288f145a2d43d3de21",
"0x40678da46edf63a1aba51f276292f42023182240032e3de5c48fa57e03204283",
"0x26237a9e98cd94916c2c5486f80ef82d419cb5821a40d8b73de587b2c8d5e1eb",
"0xd9cc5eefff5c1171fbd732eadaba4c63a525a52a1605cb3974b67ecd5383c088",
"0xaf4b5530770e38c804a14fe0b9695f87bb6b8eacee29e0dd449187c6c73a9aac",
"0x61f7daff18bc598294692a617976ec38da83825466cf93fd97c53edbca063f00",
"0x1b90f780826741d85f4cfd6c2213991b3d0007b4a3eb58bbdcf18516049aebd9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


