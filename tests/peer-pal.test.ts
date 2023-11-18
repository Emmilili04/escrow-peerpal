import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { EscrowComplete } from "../generated/schema"
import { EscrowComplete as EscrowCompleteEvent } from "../generated/PeerPal/PeerPal"
import { handleEscrowComplete } from "../src/peer-pal"
import { createEscrowCompleteEvent } from "./peer-pal-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let orderId = BigInt.fromI32(234)
    let escrow = "ethereum.Tuple Not implemented"
    let newEscrowCompleteEvent = createEscrowCompleteEvent(orderId, escrow)
    handleEscrowComplete(newEscrowCompleteEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EscrowComplete created and stored", () => {
    assert.entityCount("EscrowComplete", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EscrowComplete",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "orderId",
      "234"
    )
    assert.fieldEquals(
      "EscrowComplete",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "escrow",
      "ethereum.Tuple Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
