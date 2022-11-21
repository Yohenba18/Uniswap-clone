import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x891E8e00C89F91518E3deB7EA3f18018F21B13Cd"; 
//  0x17636986ae7498739272a8d23f306d8bebcafe941f164ca7f413c287d4d2ce27

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/_spmNButhyqOlYihwZy_1BuasHloJe1L",
  },
};