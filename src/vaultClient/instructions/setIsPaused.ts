/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type TransactionSigner,
  type WritableAccount,
} from "@solana/web3.js";
import { JITO_VAULT_PROGRAM_ADDRESS } from "../programs";
import { getAccountMetaFactory, type ResolvedAccount } from "../shared";

export const SET_IS_PAUSED_DISCRIMINATOR = 19;

export function getSetIsPausedDiscriminatorBytes() {
  return getU8Encoder().encode(SET_IS_PAUSED_DISCRIMINATOR);
}

export type SetIsPausedInstruction<
  TProgram extends string = typeof JITO_VAULT_PROGRAM_ADDRESS,
  TAccountConfig extends string | IAccountMeta<string> = string,
  TAccountVault extends string | IAccountMeta<string> = string,
  TAccountAdmin extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountConfig extends string
        ? ReadonlyAccount<TAccountConfig>
        : TAccountConfig,
      TAccountVault extends string
        ? WritableAccount<TAccountVault>
        : TAccountVault,
      TAccountAdmin extends string
        ? ReadonlySignerAccount<TAccountAdmin> &
            IAccountSignerMeta<TAccountAdmin>
        : TAccountAdmin,
      ...TRemainingAccounts,
    ]
  >;

export type SetIsPausedInstructionData = {
  discriminator: number;
  isPaused: boolean;
};

export type SetIsPausedInstructionDataArgs = { isPaused: boolean };

export function getSetIsPausedInstructionDataEncoder(): Encoder<SetIsPausedInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ["discriminator", getU8Encoder()],
      ["isPaused", getBooleanEncoder()],
    ]),
    (value) => ({ ...value, discriminator: SET_IS_PAUSED_DISCRIMINATOR }),
  );
}

export function getSetIsPausedInstructionDataDecoder(): Decoder<SetIsPausedInstructionData> {
  return getStructDecoder([
    ["discriminator", getU8Decoder()],
    ["isPaused", getBooleanDecoder()],
  ]);
}

export function getSetIsPausedInstructionDataCodec(): Codec<
  SetIsPausedInstructionDataArgs,
  SetIsPausedInstructionData
> {
  return combineCodec(
    getSetIsPausedInstructionDataEncoder(),
    getSetIsPausedInstructionDataDecoder(),
  );
}

export type SetIsPausedInput<
  TAccountConfig extends string = string,
  TAccountVault extends string = string,
  TAccountAdmin extends string = string,
> = {
  config: Address<TAccountConfig>;
  vault: Address<TAccountVault>;
  admin: TransactionSigner<TAccountAdmin>;
  isPaused: SetIsPausedInstructionDataArgs["isPaused"];
};

export function getSetIsPausedInstruction<
  TAccountConfig extends string,
  TAccountVault extends string,
  TAccountAdmin extends string,
>(
  input: SetIsPausedInput<TAccountConfig, TAccountVault, TAccountAdmin>,
): SetIsPausedInstruction<
  typeof JITO_VAULT_PROGRAM_ADDRESS,
  TAccountConfig,
  TAccountVault,
  TAccountAdmin
> {
  // Program address.
  const programAddress = JITO_VAULT_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    config: { value: input.config ?? null, isWritable: false },
    vault: { value: input.vault ?? null, isWritable: true },
    admin: { value: input.admin ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, "programId");
  const instruction = {
    accounts: [
      getAccountMeta(accounts.config),
      getAccountMeta(accounts.vault),
      getAccountMeta(accounts.admin),
    ],
    programAddress,
    data: getSetIsPausedInstructionDataEncoder().encode(
      args as SetIsPausedInstructionDataArgs,
    ),
  } as SetIsPausedInstruction<
    typeof JITO_VAULT_PROGRAM_ADDRESS,
    TAccountConfig,
    TAccountVault,
    TAccountAdmin
  >;

  return instruction;
}

export type ParsedSetIsPausedInstruction<
  TProgram extends string = typeof JITO_VAULT_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    config: TAccountMetas[0];
    vault: TAccountMetas[1];
    admin: TAccountMetas[2];
  };
  data: SetIsPausedInstructionData;
};

export function parseSetIsPausedInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>,
): ParsedSetIsPausedInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
    // TODO: Coded error.
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      config: getNextAccount(),
      vault: getNextAccount(),
      admin: getNextAccount(),
    },
    data: getSetIsPausedInstructionDataDecoder().decode(instruction.data),
  };
}
