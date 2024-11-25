import { address } from "@solana/web3.js";
import test from "node:test";
import { getRestakingConfigPubkey, JITO_RESTAKING_PROGRAM_ID } from "../src";
import assert from "node:assert";

describe("restaking config",  () => {
    it("", async () => {
        const expected = address("4vvKh3Ws4vGzgXRVdo8SdL4jePXDvCqKVmi21BCBGwvn");

        const pubkey = await getRestakingConfigPubkey(JITO_RESTAKING_PROGRAM_ID);
    
        assert.strictEqual(pubkey, expected);
    })
});