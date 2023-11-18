import {
  EscrowComplete as EscrowCompleteEvent,
  EscrowDeposit as EscrowDepositEvent,
  EscrowDisputeResolved as EscrowDisputeResolvedEvent
} from "../generated/PeerPal/PeerPal"
import {
  EscrowComplete,
  EscrowDeposit,
  EscrowDisputeResolved
} from "../generated/schema"

export function handleEscrowComplete(event: EscrowCompleteEvent): void {
  let entity = new EscrowComplete(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.escrow_buyer = event.params.escrow.buyer
  entity.escrow_seller = event.params.escrow.seller
  entity.escrow_value = event.params.escrow.value
  entity.escrow_sellerfee = event.params.escrow.sellerfee
  entity.escrow_buyerfee = event.params.escrow.buyerfee
  entity.escrow_idImage = event.params.escrow.idImage
  entity.escrow_currency = event.params.escrow.currency
  entity.escrow_status = event.params.escrow.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEscrowDeposit(event: EscrowDepositEvent): void {
  let entity = new EscrowDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.escrow_buyer = event.params.escrow.buyer
  entity.escrow_seller = event.params.escrow.seller
  entity.escrow_value = event.params.escrow.value
  entity.escrow_sellerfee = event.params.escrow.sellerfee
  entity.escrow_buyerfee = event.params.escrow.buyerfee
  entity.escrow_idImage = event.params.escrow.idImage
  entity.escrow_currency = event.params.escrow.currency
  entity.escrow_status = event.params.escrow.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEscrowDisputeResolved(
  event: EscrowDisputeResolvedEvent
): void {
  let entity = new EscrowDisputeResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
