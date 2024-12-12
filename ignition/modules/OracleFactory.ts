import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("OracleFactoryModule", (m) => {
  const oracleFactory = m.contractAt(
    "MorphoChainlinkOracleV2Factory",
    "0x0000000000000000000000000000000000000000"
  );

  return { oracleFactory };
});
