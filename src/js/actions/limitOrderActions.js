


// export function selectTokenAsync(symbol, address, type) {
//   return {
//     type: "LIMIT_ORDER.SELECT_TOKEN_ASYNC",
//     payload: {symbol, address, type }
//   }
// }


export function selectToken(sourceTokenSymbol, sourceToken, destTokenSymbol, destToken, type) {
  return {
    type: "LIMIT_ORDER.SELECT_TOKEN",
    payload: { sourceTokenSymbol, sourceToken, destTokenSymbol, destToken, type }
  }
}

export function inputChange(focus, value) {
  return {
    type: "LIMIT_ORDER.INPUT_CHANGE",
    payload: { focus, value }
  }
}

export function updateRate(ethereum, sourceTokenSymbol, sourceToken, destTokenSymbol, destToken, sourceAmount, isManual = false, type = false) {
  return {
    type: "LIMIT_ORDER.UPDATE_RATE_PENDING",
    payload: {ethereum, sourceTokenSymbol, sourceToken, destTokenSymbol, destToken, sourceAmount, isManual , type}
  }
}

export function updateRateComplete(rateInit, expectedPrice, slippagePrice, blockNo, isManual, type, errMsg) {
  return {
    type: "LIMIT_ORDER.UPDATE_RATE_COMPLETE",
    payload: { rateInit, expectedPrice, slippagePrice, blockNo, isManual, type, errMsg }
  }

}

export function setIsSelectTokenBalance(value) {
  return {
    type: "LIMIT_ORDER.SET_IS_SELECT_TOKEN_BALANCE",
    payload: value
  }
}

export function fetchFee(userAddr, src, dest, srcAmount, destAmount, shouldLoading) {
  return {
    type: "LIMIT_ORDER.FETCH_FEE",
    payload: { userAddr, src, dest, srcAmount, destAmount, shouldLoading }
  }
}

export function fetchFeeComplete(fee, err = null) {
  return {
    type: "LIMIT_ORDER.FETCH_FEE_COMPLETE",
    payload: { fee, err }
  }
}


export function throwError(key, msg){
  return {
    type: "LIMIT_ORDER.THROW_ERROR",
    payload: { key, msg }
  }
}


export function updateOrderPath(orderPath, currentPathIndex){
  return {
    type: "LIMIT_ORDER.UPDATE_ORDER_PATH",
    payload: { orderPath, currentPathIndex }
  }
}

export function resetOrderPath() {
  return {
    type: "LIMIT_ORDER.RESET_ORDER_PATH"
  }
}

export function  forwardOrderPath() {
  return {
    type: "LIMIT_ORDER.FORWARD_ORDER_PATH"
  }
}

export function addListOrder(listOrder) {
  return {
    type: "LIMIT_ORDER.ADD_LIST_ORDER",
    payload: listOrder
  }
}

export function addNewOrder(order) {
  return {
    type: "LIMIT_ORDER.ADD_NEW_ORDER",
    payload: { order }
  }
}

export function focusInput(focus) {
  return {
    type: "LIMIT_ORDER.FOCUS_INPUT",
    payload: focus
  }
}

export function setGasPriceLimitOrderComplete(safeLowGas, standardGas, fastGas, defaultGas, selectedGas) {
  return {
    type: "LIMIT_ORDER.SET_GAS_PRICE_LIMIT_ORDER_COMPLETE",
    payload: { safeLowGas, standardGas, defaultGas, fastGas, selectedGas }
  }
}

export function updateOpenOrderStatus() {
  return {
    type: "LIMIT_ORDER.FETCH_OPEN_ORDER_STATUS"
  }
}

export function saveApproveZeroTx(sourceTokenSymbol, txHash) {
  return {
    type: "LIMIT_ORDER.SAVE_APPROVE_ZERO_TX",
    payload: { sourceTokenSymbol, txHash }
  }
}

export function saveApproveMaxTx(sourceTokenSymbol, txHash) {
  return {
    type: "LIMIT_ORDER.SAVE_APPROVE_MAX_TX",
    payload: { sourceTokenSymbol, txHash }
  }
}