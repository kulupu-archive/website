---
id: mining
title: Mining Kulupu
---

## Import or generate a mining key

Kulupu implements signed mining. To mine Kulupu blocks, you have to
have the coinbase private key stored in the mining software, as a new
signature is produced for every new nonce. We refer to the private key
for signed mining as the **mining key**.

The eaiest way to get a mining key is to generate a new one using the
`generate-mining-key` command:

```bash
./kulupu generate-mining-key
```

Keep your secret seed in a secure place.

Alternatively, you can also import an existing private key as the
mining key, using the `import-mining-key` command:

```bash
./kulupu import-mining-key "<secret seed>"
```

## Pass author argument to node for mining

Remember either the public key or the address, and pass it to node for
mining. For example:

```
./kulupu --validator --author 0x7e946b7dd192307b4538d664ead95474062ac3738e04b5f3084998b76bc5122d
```
