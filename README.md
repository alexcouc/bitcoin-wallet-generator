# 🪙 Bitcoin Wallet Generator (Testnet)

Este projeto é um **gerador de carteiras Bitcoin** desenvolvido em **Node.js**, com foco em **aprendizado prático** sobre criptografia, chaves públicas/privadas, HD Wallets e interação com a **Bitcoin Testnet**.

O objetivo é:
- Gerar carteiras Bitcoin a partir de **pares de chaves**
- Criar **endereços de recebimento (deposit)** e **endereços de troco/envio (change)**
- Importar a carteira no **Electrum (Testnet)**
- Enviar e receber bitcoins de teste (**BTC Testnet**)

⚠️ **Projeto educacional**. Não utilize este código em produção ou na Bitcoin Mainnet.

---

## 🚀 Funcionalidades

- Geração de **seed phrase (BIP39)**
- Derivação de chaves HD (**BIP32 / BIP44**)
- Criação de endereços Bitcoin **P2PKH (legacy) – Testnet**
- Exportação de:
  - Endereço Bitcoin
  - Chave privada (WIF)
- Compatível com **Electrum Testnet**
- Totalmente offline (geração local)

---

## 🧱 Estrutura do Projeto


---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **bitcoinjs-lib**
- **bip39** (mnemonic / seed)
- **bip32** (HD Wallet)
- **tiny-secp256k1** (ECC)

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/SEU_USUARIO/bitcoin-wallet-generator.git
cd bitcoin-wallet-generator
npm install

Entre na pasta src:

cd src


Execute o gerador:

node createWallet.js


Exemplo de saída:

Carteira gerada
Endereço BTC: mk192kzbjk8UbQDuvWpK76NCKBStCHHxP3
Chave privada (WIF): cTvSR2NimY4yaQFWyJMdicsFt6V68x6uXeAc4JJ5uwcXRhuhB44s
Seed: board else sunny alcohol uncle verb soccer page error cage awful circle

🧪 Usando na Bitcoin Testnet
🔍 Consultar endereço na blockchain

Use um explorer de testnet, por exemplo:

https://blockstream.info/testnet/

Cole o endereço gerado para visualizar transações e saldo.

🚰 Receber BTC Testnet (Faucet)

Utilize um faucet para receber bitcoins de teste:

https://bitcoinfaucet.uo1.net

https://coinfaucet.eu/en/btc-testnet/

Cole o endereço gerado e aguarde a confirmação.

⚡ Importar no Electrum (Testnet)

Abra o Electrum em Testnet:

electrum --testnet


(ou use o caminho completo do executável no Windows)

No Electrum:

File → New/Restore

Standard wallet

Use public or private keys

Cole a chave privada (WIF)

Após receber BTC Testnet, você poderá enviar transações reais na testnet.
