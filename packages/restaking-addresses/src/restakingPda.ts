import {
  Address,
  getAddressCodec,
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
  base: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const base58EncodedAddressCodec = getAddressCodec();

    const seeds = ["ncn", base58EncodedAddressCodec.encode(base)];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get ncn address:", error);
    throw error;
  }
}

export async function getNcnOperatorStatePubkey(
  programAddress: Address,
  ncn: Address,
  operator: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const base58EncodedAddressCodec = getAddressCodec();

    const seeds = [
      "ncn_operator_state",
      base58EncodedAddressCodec.encode(ncn),
      base58EncodedAddressCodec.encode(operator),
    ];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get ncn address:", error);
    throw error;
  }
}

export async function getNcnVaultTicketPubkey(
  programAddress: Address,
  ncn: Address,
  vault: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const base58EncodedAddressCodec = getAddressCodec();

    const seeds = [
      "ncn_vault_ticket",
      base58EncodedAddressCodec.encode(ncn),
      base58EncodedAddressCodec.encode(vault),
    ];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get ncn address:", error);
    throw error;
  }
}

export async function getOperatorPubkey(
  programAddress: Address,
  base: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const base58EncodedAddressCodec = getAddressCodec();

    const seeds = ["operator", base58EncodedAddressCodec.encode(base)];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get ncn address:", error);
    throw error;
  }
}

export async function getOperatorVaultTicketPubkey(
  programAddress: Address,
  operator: Address,
  vault: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const base58EncodedAddressCodec = getAddressCodec();

    const seeds = [
      "operator_vault_ticket",
      base58EncodedAddressCodec.encode(operator),
      base58EncodedAddressCodec.encode(vault),
    ];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get ncn address:", error);
    throw error;
  }
}
