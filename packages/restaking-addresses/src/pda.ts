import {
  Address,
  getProgramDerivedAddress,
  ProgramDerivedAddress,
} from "@solana/web3.js";

export async function getRestakingConfigPubkey(
  programAddress: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const seeds = ["config"];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get restaking config address:", error);
    throw error;
  }
}

export async function getNcnPubkey(
  programAddress: Address,
): Promise<ProgramDerivedAddress> {
  return await getProgramDerivedAddress({ programAddress, seeds: [""] });
}
