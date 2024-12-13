<div align="center">
    <img src=".github/morpho.png" alt="Morpho logo" width="600"/>
    <h1>Morpho Interactions 🕹️</h1>
    <big>Scripts to interact with Morpho Blue</big>
    <div>
    <br/>
        <a href="https://github.com/crisog/morpho-test/pulse"><img src="https://img.shields.io/github/last-commit/crisog/morpho-test.svg"/></a>
        <a href="https://github.com/crisog/morpho-test/pulls"><img src="https://img.shields.io/github/issues-pr/crisog/morpho-test.svg"/></a>
        <a href="https://github.com/crisog/morpho-test/issues"><img src="https://img.shields.io/github/issues-closed/crisog/morpho-test.svg"/></a>
    </div>
</div>
<br/>

## Setup

1. Install dependencies

```bash
yarn install
```

2. Configure your .env

```bash
SEPOLIA_RPC_URL=
PRIVATE_KEY=
ETHERSCAN_API_KEY= # if you want your contracts to be verified automatically

```

## Deployment Scripts

### Deploy Collateral Token

```bash
npx hardhat ignition deploy ./ignition/modules/CollateralToken.ts --network sepolia --verify
```

### Deploy Loan Token

```bash
npx hardhat ignition deploy ./ignition/modules/CollateralToken.ts --network sepolia --verify
```

### Deploy Simple Oracle

```bash
npx hardhat ignition deploy ./ignition/modules/CollateralToken.ts --network sepolia --verify
```

## Morpho Interactions Scripts

### Create Market

Creates a lending market with specified loan and collateral tokens.

```bash
npx hardhat run scripts/create-market.ts
```

### Supply

Supply loan tokens to a Morpho market (includes token approval).

```bash
npx hardhat run scripts/supply.ts
```

### Supply Collateral

Provide collateral tokens to secure borrowed positions.

```bash
npx hardhat run scripts/supply-collateral.ts
```

### Borrow

Borrow assets against supplied collateral.

```bash
npx hardhat run scripts/borrow.ts
```
