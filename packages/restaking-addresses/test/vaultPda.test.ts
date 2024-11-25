import { expect } from "chai";
import { getVaultConfigPubkey, getVaultPubkey } from "../src/vaultPda.js";
import { address } from "@solana/web3.js";
import { JITO_VAULT_PROGRAM_ID } from "../src/index.js";

describe("PDA Library for Vault program", () => {
  it("Vault Config Pubkey", async () => {
    const expected = address("UwuSgAq4zByffCGCrWH87DsjfsewYjuqHfJEpzw1Jq3");

    const pubkey = await getVaultConfigPubkey(JITO_VAULT_PROGRAM_ID);

    expect(pubkey[0]).to.equal(expected);
  });

  it("Vault Pubkey", async () => {
    const expected = address("CinzjQ2V8VPKd48f32AeYV9KepFJ4bUxkdv3ErByAaX6");

    const base = address("x5iHY3cEs5U9NUojWiqCJguwTvFV1rMZyRiqHx5pcVN");

    const pubkey = await getVaultPubkey(JITO_VAULT_PROGRAM_ID, base);

    expect(pubkey[0]).to.equal(expected);
  });
});
