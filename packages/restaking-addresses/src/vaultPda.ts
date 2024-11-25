import {
  Address,
  getAddressCodec,
  getProgramDerivedAddress,
  ProgramDerivedAddress,
} from "@solana/web3.js";

export async function getVaultConfigPubkey(
  programAddress: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const seeds = ["config"];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get vault config address:", error);
    throw error;
  }
}

export async function getVaultPubkey(
  programAddress: Address,
  base: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const base58EncodedAddressCodec = getAddressCodec();

    const seeds = ["vault", base58EncodedAddressCodec.encode(base)];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get ncn address:", error);
    throw error;
  }
}

export async function getVaultNcnTicketPubkey(
  programAddress: Address,
  vault: Address,
  ncn: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const base58EncodedAddressCodec = getAddressCodec();

    const seeds = [
      "vault_ncn_ticket",
      base58EncodedAddressCodec.encode(vault),
      base58EncodedAddressCodec.encode(ncn),
    ];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get ncn address:", error);
    throw error;
  }
}

export async function getVaultOperatorDelegationPubkey(
  programAddress: Address,
  vault: Address,
  operator: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const base58EncodedAddressCodec = getAddressCodec();

    const seeds = [
      "vault_operator_delegation",
      base58EncodedAddressCodec.encode(vault),
      base58EncodedAddressCodec.encode(operator),
    ];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get ncn address:", error);
    throw error;
  }
}

export async function getVaultStakerWithdrawalTicketPubkey(
  programAddress: Address,
  vault: Address,
  base: Address,
): Promise<ProgramDerivedAddress> {
  try {
    const base58EncodedAddressCodec = getAddressCodec();

    const seeds = [
      "vault_staker_withdrawal_ticket",
      base58EncodedAddressCodec.encode(vault),
      base58EncodedAddressCodec.encode(base),
    ];
    const address = await getProgramDerivedAddress({ programAddress, seeds });
    return address;
  } catch (error) {
    console.error("Failed to get ncn address:", error);
    throw error;
  }
}
