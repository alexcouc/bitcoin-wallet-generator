//importando depencias
const bib32 = require('bip32')  
const bib39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//definir rede
//bitcoin - rede principal - mainnet
//testnet - rede de teste - testnet
const network = bitcoin.networks.testnet

//derivação de carteira HD
const path = `m/49'/1'/0'/0` //caminho de derivação para testnet

//criando a mnemonic para o seed(palavras de senha)
let mnemonic = bib39.generateMnemonic() //gerando mnemonic
const seed = bib39.mnemonicToSeedSync(mnemonic) //gerando seed a partir da mnemonic

//criando a raiz da carteira HD
let root = bib32.fromSeed(seed, network)

//criando uma conta - par pvt- pub keys
let account = root.derivePath(path) //derivando a conta a partir do caminho
let Node = account.derive(0).derive(0) //derivando o nó para o primeiro endereço

let btcAddresses = bitcoin.payments.p2pkh({
    pubkey:Node.publicKey,
    network:network,
}).address 

console.log("carteira gerada")
console.log("Endereço BTC:", btcAddresses)
console.log("chave privada:", Node.toWIF())
console.log("Seed", mnemonic)