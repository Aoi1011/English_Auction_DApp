/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  assertAccountExists,
  assertAccountsExist,
  combineCodec,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
  getAddressDecoder,
  getAddressEncoder,
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  type Account,
  type Address,
  type Codec,
  type Decoder,
  type EncodedAccount,
  type Encoder,
  type FetchAccountConfig,
  type FetchAccountsConfig,
  type MaybeAccount,
  type MaybeEncodedAccount,
} from "@solana/web3.js";
import {
  getSlotToggleDecoder,
  getSlotToggleEncoder,
  type SlotToggle,
  type SlotToggleArgs,
} from "../types";

export type VaultNcnTicket = {
  discriminator: bigint;
  vault: Address;
  ncn: Address;
  index: bigint;
  state: SlotToggle;
  bump: number;
  reserved: Array<number>;
};

export type VaultNcnTicketArgs = {
  discriminator: number | bigint;
  vault: Address;
  ncn: Address;
  index: number | bigint;
  state: SlotToggleArgs;
  bump: number;
  reserved: Array<number>;
};

export function getVaultNcnTicketEncoder(): Encoder<VaultNcnTicketArgs> {
  return getStructEncoder([
    ["discriminator", getU64Encoder()],
    ["vault", getAddressEncoder()],
    ["ncn", getAddressEncoder()],
    ["index", getU64Encoder()],
    ["state", getSlotToggleEncoder()],
    ["bump", getU8Encoder()],
    ["reserved", getArrayEncoder(getU8Encoder(), { size: 263 })],
  ]);
}

export function getVaultNcnTicketDecoder(): Decoder<VaultNcnTicket> {
  return getStructDecoder([
    ["discriminator", getU64Decoder()],
    ["vault", getAddressDecoder()],
    ["ncn", getAddressDecoder()],
    ["index", getU64Decoder()],
    ["state", getSlotToggleDecoder()],
    ["bump", getU8Decoder()],
    ["reserved", getArrayDecoder(getU8Decoder(), { size: 263 })],
  ]);
}

export function getVaultNcnTicketCodec(): Codec<
  VaultNcnTicketArgs,
  VaultNcnTicket
> {
  return combineCodec(getVaultNcnTicketEncoder(), getVaultNcnTicketDecoder());
}

export function decodeVaultNcnTicket<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress>,
): Account<VaultNcnTicket, TAddress>;
export function decodeVaultNcnTicket<TAddress extends string = string>(
  encodedAccount: MaybeEncodedAccount<TAddress>,
): MaybeAccount<VaultNcnTicket, TAddress>;
export function decodeVaultNcnTicket<TAddress extends string = string>(
  encodedAccount: EncodedAccount<TAddress> | MaybeEncodedAccount<TAddress>,
): Account<VaultNcnTicket, TAddress> | MaybeAccount<VaultNcnTicket, TAddress> {
  return decodeAccount(
    encodedAccount as MaybeEncodedAccount<TAddress>,
    getVaultNcnTicketDecoder(),
  );
}

export async function fetchVaultNcnTicket<TAddress extends string = string>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig,
): Promise<Account<VaultNcnTicket, TAddress>> {
  const maybeAccount = await fetchMaybeVaultNcnTicket(rpc, address, config);
  assertAccountExists(maybeAccount);
  return maybeAccount;
}

export async function fetchMaybeVaultNcnTicket<
  TAddress extends string = string,
>(
  rpc: Parameters<typeof fetchEncodedAccount>[0],
  address: Address<TAddress>,
  config?: FetchAccountConfig,
): Promise<MaybeAccount<VaultNcnTicket, TAddress>> {
  const maybeAccount = await fetchEncodedAccount(rpc, address, config);
  return decodeVaultNcnTicket(maybeAccount);
}

export async function fetchAllVaultNcnTicket(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig,
): Promise<Account<VaultNcnTicket>[]> {
  const maybeAccounts = await fetchAllMaybeVaultNcnTicket(
    rpc,
    addresses,
    config,
  );
  assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}

export async function fetchAllMaybeVaultNcnTicket(
  rpc: Parameters<typeof fetchEncodedAccounts>[0],
  addresses: Array<Address>,
  config?: FetchAccountsConfig,
): Promise<MaybeAccount<VaultNcnTicket>[]> {
  const maybeAccounts = await fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) =>
    decodeVaultNcnTicket(maybeAccount),
  );
}
