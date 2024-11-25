import { address, type Address } from "@solana/web3.js";

export * from "./restakingPda.js";

/**
 * Jito Restaking Program address
 *
 * @category constants
 * @category generated
 */
export const JITO_RESTAKING_PROGRAM_ADDRESS =
  "RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q";

/**
 * Jito Restaking Program public key
 *
 * @category constants
 * @category generated
 */
export const JITO_RESTAKING_PROGRAM_ID: Address = address(
  JITO_RESTAKING_PROGRAM_ADDRESS,
);

/**
 * Jito Vault Program address
 *
 * @category constants
 * @category generated
 */
export const JITO_VAULT_PROGRAM_ADDRESS =
  "Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8";

/**
 * Jito Vault Program public key
 *
 * @category constants
 * @category generated
 */
export const JITO_VAULT_PROGRAM_ID: Address = address(
  JITO_VAULT_PROGRAM_ADDRESS,
);
