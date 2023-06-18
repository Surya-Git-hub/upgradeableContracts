const { ethers, upgrades } = require('hardhat');

const PROXY = "0xeb3Af7B7a3D8dF51b577d09f50301aCB9c05fE07";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});