import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  EscrowComplete,
  EscrowDeposit,
  EscrowDisputeResolved
} from "../generated/PeerPal/PeerPal"

export function createEscrowCompleteEvent(
  orderId: BigInt,
  escrow: ethereum.Tuple
): EscrowComplete {
  let escrowCompleteEvent = changetype<EscrowComplete>(newMockEvent())

  escrowCompleteEvent.parameters = new Array()

  escrowCompleteEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  escrowCompleteEvent.parameters.push(
    new ethereum.EventParam("escrow", ethereum.Value.fromTuple(escrow))
  )

  return escrowCompleteEvent
}

export function createEscrowDepositEvent(
  orderId: BigInt,
  escrow: ethereum.Tuple
): EscrowDeposit {
  let escrowDepositEvent = changetype<EscrowDeposit>(newMockEvent())

  escrowDepositEvent.parameters = new Array()

  escrowDepositEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  escrowDepositEvent.parameters.push(
    new ethereum.EventParam("escrow", ethereum.Value.fromTuple(escrow))
  )

  return escrowDepositEvent
}

export function createEscrowDisputeResolvedEvent(
  orderId: BigInt
): EscrowDisputeResolved {
  let escrowDisputeResolvedEvent = changetype<EscrowDisputeResolved>(
    newMockEvent()
  )

  escrowDisputeResolvedEvent.parameters = new Array()

  escrowDisputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )

  return escrowDisputeResolvedEvent
}
