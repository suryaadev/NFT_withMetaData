const { errors } = require("ethers");
const hre = require("hardhat");

async function main() {
  const contractFactory = hre.ethers.getContractFactory("contract_name);
  const contract = contractFactory.deploy();
  await contract.deployed();
  console.log(`Contract Address :::: ${contract.address}`);
}

main
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
