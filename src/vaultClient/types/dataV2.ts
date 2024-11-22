/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  addDecoderSizePrefix,
  addEncoderSizePrefix,
  combineCodec,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU16Decoder,
  getU16Encoder,
  getU32Decoder,
  getU32Encoder,
  getU8Decoder,
  getU8Encoder,
  getUtf8Decoder,
  getUtf8Encoder,
  type Codec,
  type Decoder,
  type Encoder,
  type Option,
  type OptionOrNullable,
} from "@solana/web3.js";

export type DataV2 = {
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: Option<number>;
  collection: Option<number>;
  uses: Option<number>;
};

export type DataV2Args = {
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: OptionOrNullable<number>;
  collection: OptionOrNullable<number>;
  uses: OptionOrNullable<number>;
};

export function getDataV2Encoder(): Encoder<DataV2Args> {
  return getStructEncoder([
    ["name", addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())],
    ["symbol", addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())],
    ["uri", addEncoderSizePrefix(getUtf8Encoder(), getU32Encoder())],
    ["sellerFeeBasisPoints", getU16Encoder()],
    ["creators", getOptionEncoder(getU8Encoder())],
    ["collection", getOptionEncoder(getU8Encoder())],
    ["uses", getOptionEncoder(getU8Encoder())],
  ]);
}

export function getDataV2Decoder(): Decoder<DataV2> {
  return getStructDecoder([
    ["name", addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())],
    ["symbol", addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())],
    ["uri", addDecoderSizePrefix(getUtf8Decoder(), getU32Decoder())],
    ["sellerFeeBasisPoints", getU16Decoder()],
    ["creators", getOptionDecoder(getU8Decoder())],
    ["collection", getOptionDecoder(getU8Decoder())],
    ["uses", getOptionDecoder(getU8Decoder())],
  ]);
}

export function getDataV2Codec(): Codec<DataV2Args, DataV2> {
  return combineCodec(getDataV2Encoder(), getDataV2Decoder());
}
