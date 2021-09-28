require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name radar oven puppy gloom kite army genius'; 
let testAccounts = [
"0x3583540f3546084d10f54d70b054dd7036e95a359ea65ceb380c9f0d5cf1d624",
"0xd2f33260c92730e8f779394244cb2bffac0dc8a9c50242fb9f643922939f7acb",
"0x8e2e87ebc9253ac4a6b32a938ba5ce2eea92db0e39b040ef53b2fd240bc96083",
"0x7d0a434a91aed2fd134def11bc82d9aa2de59725a2c58b4a0c45fb061eb3e68e",
"0x5660366aa625662ac951c1ac18fea3b1e8a438d3b3830214ddd988f65f88ed9c",
"0xda98e6a9c2fc654a4d4c7333512f25e181ab6491113c36d3a420af4fed2bc4a0",
"0xa37a33a859df4d171399444167ba35af07034182a38e7bbcb0ac6912c7bb43c6",
"0x1ad3159796528c36f28876c70edda4dcb359ee3406df1b29b2c3c3b7648ba015",
"0xbb83a1886608c5b4203d71a058f19e7bef503555c76e87fd8eae51d536eedc9f",
"0x4e77a645fed93fc920a4a987d9050e735d5342c9cfeb719c89dc5fcb7aa4eb16"
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


