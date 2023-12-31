// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class EscrowComplete extends ethereum.Event {
  get params(): EscrowComplete__Params {
    return new EscrowComplete__Params(this);
  }
}

export class EscrowComplete__Params {
  _event: EscrowComplete;

  constructor(event: EscrowComplete) {
    this._event = event;
  }

  get orderId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get escrow(): EscrowCompleteEscrowStruct {
    return changetype<EscrowCompleteEscrowStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class EscrowCompleteEscrowStruct extends ethereum.Tuple {
  get buyer(): Address {
    return this[0].toAddress();
  }

  get seller(): Address {
    return this[1].toAddress();
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get sellerfee(): BigInt {
    return this[3].toBigInt();
  }

  get buyerfee(): BigInt {
    return this[4].toBigInt();
  }

  get idImage(): string {
    return this[5].toString();
  }

  get currency(): Address {
    return this[6].toAddress();
  }

  get status(): i32 {
    return this[7].toI32();
  }
}

export class EscrowDeposit extends ethereum.Event {
  get params(): EscrowDeposit__Params {
    return new EscrowDeposit__Params(this);
  }
}

export class EscrowDeposit__Params {
  _event: EscrowDeposit;

  constructor(event: EscrowDeposit) {
    this._event = event;
  }

  get orderId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get escrow(): EscrowDepositEscrowStruct {
    return changetype<EscrowDepositEscrowStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class EscrowDepositEscrowStruct extends ethereum.Tuple {
  get buyer(): Address {
    return this[0].toAddress();
  }

  get seller(): Address {
    return this[1].toAddress();
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get sellerfee(): BigInt {
    return this[3].toBigInt();
  }

  get buyerfee(): BigInt {
    return this[4].toBigInt();
  }

  get idImage(): string {
    return this[5].toString();
  }

  get currency(): Address {
    return this[6].toAddress();
  }

  get status(): i32 {
    return this[7].toI32();
  }
}

export class EscrowDisputeResolved extends ethereum.Event {
  get params(): EscrowDisputeResolved__Params {
    return new EscrowDisputeResolved__Params(this);
  }
}

export class EscrowDisputeResolved__Params {
  _event: EscrowDisputeResolved;

  constructor(event: EscrowDisputeResolved) {
    this._event = event;
  }

  get orderId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class PeerPal__escrowsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: string;
  value6: Address;
  value7: i32;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: string,
    value6: Address,
    value7: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromString(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set(
      "value7",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value7))
    );
    return map;
  }

  getBuyer(): Address {
    return this.value0;
  }

  getSeller(): Address {
    return this.value1;
  }

  getValue(): BigInt {
    return this.value2;
  }

  getSellerfee(): BigInt {
    return this.value3;
  }

  getBuyerfee(): BigInt {
    return this.value4;
  }

  getIdImage(): string {
    return this.value5;
  }

  getCurrency(): Address {
    return this.value6;
  }

  getStatus(): i32 {
    return this.value7;
  }
}

export class PeerPal extends ethereum.SmartContract {
  static bind(address: Address): PeerPal {
    return new PeerPal("PeerPal", address);
  }

  _token(): Address {
    let result = super.call("_token", "_token():(address)", []);

    return result[0].toAddress();
  }

  try__token(): ethereum.CallResult<Address> {
    let result = super.tryCall("_token", "_token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  counter(): BigInt {
    let result = super.call("counter", "counter():(uint256)", []);

    return result[0].toBigInt();
  }

  try_counter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("counter", "counter():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  escrows(param0: BigInt): PeerPal__escrowsResult {
    let result = super.call(
      "escrows",
      "escrows(uint256):(address,address,uint256,uint256,uint256,string,address,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new PeerPal__escrowsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toString(),
      result[6].toAddress(),
      result[7].toI32()
    );
  }

  try_escrows(param0: BigInt): ethereum.CallResult<PeerPal__escrowsResult> {
    let result = super.tryCall(
      "escrows",
      "escrows(uint256):(address,address,uint256,uint256,uint256,string,address,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PeerPal__escrowsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toString(),
        value[6].toAddress(),
        value[7].toI32()
      )
    );
  }

  feeBuyer(): BigInt {
    let result = super.call("feeBuyer", "feeBuyer():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feeBuyer(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feeBuyer", "feeBuyer():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeSeller(): BigInt {
    let result = super.call("feeSeller", "feeSeller():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feeSeller(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feeSeller", "feeSeller():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feesAvailable(param0: Address): BigInt {
    let result = super.call(
      "feesAvailable",
      "feesAvailable(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_feesAvailable(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "feesAvailable",
      "feesAvailable(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feesAvailableNativeCoin(): BigInt {
    let result = super.call(
      "feesAvailableNativeCoin",
      "feesAvailableNativeCoin():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_feesAvailableNativeCoin(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "feesAvailableNativeCoin",
      "feesAvailableNativeCoin():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get ERC20Address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateEscrowNativeCoinCall extends ethereum.Call {
  get inputs(): CreateEscrowNativeCoinCall__Inputs {
    return new CreateEscrowNativeCoinCall__Inputs(this);
  }

  get outputs(): CreateEscrowNativeCoinCall__Outputs {
    return new CreateEscrowNativeCoinCall__Outputs(this);
  }
}

export class CreateEscrowNativeCoinCall__Inputs {
  _call: CreateEscrowNativeCoinCall;

  constructor(call: CreateEscrowNativeCoinCall) {
    this._call = call;
  }

  get _seller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateEscrowNativeCoinCall__Outputs {
  _call: CreateEscrowNativeCoinCall;

  constructor(call: CreateEscrowNativeCoinCall) {
    this._call = call;
  }
}

export class RefundBuyerNativeCoinCall extends ethereum.Call {
  get inputs(): RefundBuyerNativeCoinCall__Inputs {
    return new RefundBuyerNativeCoinCall__Inputs(this);
  }

  get outputs(): RefundBuyerNativeCoinCall__Outputs {
    return new RefundBuyerNativeCoinCall__Outputs(this);
  }
}

export class RefundBuyerNativeCoinCall__Inputs {
  _call: RefundBuyerNativeCoinCall;

  constructor(call: RefundBuyerNativeCoinCall) {
    this._call = call;
  }

  get _orderId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RefundBuyerNativeCoinCall__Outputs {
  _call: RefundBuyerNativeCoinCall;

  constructor(call: RefundBuyerNativeCoinCall) {
    this._call = call;
  }
}

export class ReleaseEscrowNativeCoinCall extends ethereum.Call {
  get inputs(): ReleaseEscrowNativeCoinCall__Inputs {
    return new ReleaseEscrowNativeCoinCall__Inputs(this);
  }

  get outputs(): ReleaseEscrowNativeCoinCall__Outputs {
    return new ReleaseEscrowNativeCoinCall__Outputs(this);
  }
}

export class ReleaseEscrowNativeCoinCall__Inputs {
  _call: ReleaseEscrowNativeCoinCall;

  constructor(call: ReleaseEscrowNativeCoinCall) {
    this._call = call;
  }

  get _orderId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ReleaseEscrowNativeCoinCall__Outputs {
  _call: ReleaseEscrowNativeCoinCall;

  constructor(call: ReleaseEscrowNativeCoinCall) {
    this._call = call;
  }
}

export class SetFeeBuyerCall extends ethereum.Call {
  get inputs(): SetFeeBuyerCall__Inputs {
    return new SetFeeBuyerCall__Inputs(this);
  }

  get outputs(): SetFeeBuyerCall__Outputs {
    return new SetFeeBuyerCall__Outputs(this);
  }
}

export class SetFeeBuyerCall__Inputs {
  _call: SetFeeBuyerCall;

  constructor(call: SetFeeBuyerCall) {
    this._call = call;
  }

  get _feeBuyer(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeBuyerCall__Outputs {
  _call: SetFeeBuyerCall;

  constructor(call: SetFeeBuyerCall) {
    this._call = call;
  }
}

export class SetFeeSellerCall extends ethereum.Call {
  get inputs(): SetFeeSellerCall__Inputs {
    return new SetFeeSellerCall__Inputs(this);
  }

  get outputs(): SetFeeSellerCall__Outputs {
    return new SetFeeSellerCall__Outputs(this);
  }
}

export class SetFeeSellerCall__Inputs {
  _call: SetFeeSellerCall;

  constructor(call: SetFeeSellerCall) {
    this._call = call;
  }

  get _feeSeller(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeSellerCall__Outputs {
  _call: SetFeeSellerCall;

  constructor(call: SetFeeSellerCall) {
    this._call = call;
  }
}

export class SetOrderSellerCall extends ethereum.Call {
  get inputs(): SetOrderSellerCall__Inputs {
    return new SetOrderSellerCall__Inputs(this);
  }

  get outputs(): SetOrderSellerCall__Outputs {
    return new SetOrderSellerCall__Outputs(this);
  }
}

export class SetOrderSellerCall__Inputs {
  _call: SetOrderSellerCall;

  constructor(call: SetOrderSellerCall) {
    this._call = call;
  }

  get _orderId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _idImage(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetOrderSellerCall__Outputs {
  _call: SetOrderSellerCall;

  constructor(call: SetOrderSellerCall) {
    this._call = call;
  }
}
