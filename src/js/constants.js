export const LOTTO_SETTINGS = {
  LOTTO_NUMBER_SIZE: 6,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  LOTTO_PRICE: 1000,
}

export const UI_SETTINGS = {
  DEFAULT_VISIBILITY: false,
}

export const ALERT_MESSAGES = {
  UNDER_MIN_PRICE: `최소 ${LOTTO_SETTINGS.LOTTO_PRICE}원 이상의 금액을 입력해야 합니다.`,
  NOT_INTEGER_PRICE: `구입 금액은 정수로 입력해야합니다.`,
}