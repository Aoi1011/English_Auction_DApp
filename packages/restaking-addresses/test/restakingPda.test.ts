import { expect } from "chai";
import {
  getNcnOperatorStatePubkey,
  getNcnPubkey,
  getNcnVaultTicketPubkey,
  getOperatorPubkey,
  getOperatorVaultTicketPubkey,
  getRestakingConfigPubkey,
} from "../src/restakingPda.js";
import { address } from "@solana/web3.js";
import { JITO_RESTAKING_PROGRAM_ID } from "../src/index.js";

describe("PDA Library for Restaking program", () => {
  it("Restaking Config Pubkey", async () => {
    const expected = address("4vvKh3Ws4vGzgXRVdo8SdL4jePXDvCqKVmi21BCBGwvn");

    const pubkey = await getRestakingConfigPubkey(JITO_RESTAKING_PROGRAM_ID);

    expect(pubkey[0]).to.equal(expected);
  });

  it("Restaking Ncn Pubkey", async () => {
    const expected = address("3gWkEDrg3DP5pYGfB53ic5HWL8yMWpJJ5Y4WoLuTX4dx");

    const base = address("59UPuSh1Ex2ZYwjy6soqjqd8Ka8CkxhmfvuDJVa1ZxxU");

    const pubkey = await getNcnPubkey(JITO_RESTAKING_PROGRAM_ID, base);

    expect(pubkey[0]).to.equal(expected);
  });

  it("Restaking Ncn Operator State Pubkey", async () => {
    const expected = address("F85CoUrtYpTN7G5Sr6HpsndsQhd2nzEnTyZdLXvjhfmi");

    const ncn = address("3gWkEDrg3DP5pYGfB53ic5HWL8yMWpJJ5Y4WoLuTX4dx");
    const operator = address("2Uit7hCcTnMFFDYszysxMMWYuh2s2r6UfQAw8D1T5PNW");

    const pubkey = await getNcnOperatorStatePubkey(
      JITO_RESTAKING_PROGRAM_ID,
      ncn,
      operator,
    );

    expect(pubkey[0]).to.equal(expected);
  });

  it("Restaking Ncn Vault Ticket Pubkey", async () => {
    const expected = address("5hfTyYS6uiwkjBBd7Yjq2PCgUZsYrT4eQSGCWs9cgdgn");

    const ncn = address("6D4e44djPyHih4ne361s91it6vWq5sxVyxURkzpB72c9");
    const vault = address("7CrmCmuf2GQzkuhUvCAuAanJBaZ5HpVCw1VkqTCo4AG7");

    const pubkey = await getNcnVaultTicketPubkey(
      JITO_RESTAKING_PROGRAM_ID,
      ncn,
      vault,
    );

    expect(pubkey[0]).to.equal(expected);
  });

  it("Restaking Operator Pubkey", async () => {
    const expected = address("2Uit7hCcTnMFFDYszysxMMWYuh2s2r6UfQAw8D1T5PNW");

    const base = address("4hevZmdEmEpUp5tawzB5ZtkEcrFrEiSd3VbsvVQPk8fe");

    const pubkey = await getOperatorPubkey(JITO_RESTAKING_PROGRAM_ID, base);

    expect(pubkey[0]).to.equal(expected);
  });

  it("Restaking Operator Vault Ticket Pubkey", async () => {
    const expected = address("GSbTaLjof8cw7XLKBXxz2CkamMrZx1j89yL1hkeL8gCu");

    const operator = address("2Uit7hCcTnMFFDYszysxMMWYuh2s2r6UfQAw8D1T5PNW");
    const vault = address("GK4JWqjwLY25pF2s2pgQG9kwnd486qRaEmZUz9ofqtuf");

    const pubkey = await getOperatorVaultTicketPubkey(
      JITO_RESTAKING_PROGRAM_ID,
      operator,
      vault,
    );

    expect(pubkey[0]).to.equal(expected);
  });
});
