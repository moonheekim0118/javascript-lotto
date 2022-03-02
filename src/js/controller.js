import LottoData from './lottoData';
import LottoListView from './view/LottoList.js';
import PurchaseFormView from './view/PurchaseForm.js';
import WinningNumbersFormView from './view/WinningNumbersForm.js';
import ResultModalView from './view/ResultModal.js';
import { LOTTO_PRICE } from './constants.js';
import { validateCashInput, validateWinningNumbers } from './utils/validation';

export default class Controller {
  #lottoData = new LottoData();
  #purchaseFormView = new PurchaseFormView({
    submitCashHandler: cash => this.#submitCashHanlder(cash),
  });
  #lottoListView = new LottoListView();
  #winningNumbersFormView = new WinningNumbersFormView({
    submitWinningNumbersHandler: (reuglarNumbers, bonusNumber) =>
      this.#sumbitWinningNumberHandler(reuglarNumbers, bonusNumber),
  });
  #resultModalView = new ResultModalView({
    clickRestart: () => this.#restartHandler(),
  });

  #submitCashHanlder(cash) {
    try {
      validateCashInput(cash);
      this.#lottoData.buyLotto(cash / LOTTO_PRICE);
      this.#lottoListView.showLottoListSection(this.#lottoData.getLottoList());
      this.#winningNumbersFormView.showWinningNumbersSection();
    } catch ({ message }) {
      alert(message);
    }
  }

  #sumbitWinningNumberHandler(reuglarNumbers, bonusNumber) {
    try {
      validateWinningNumbers(reuglarNumbers, bonusNumber);
      this.#lottoData.setWinningNumbers(reuglarNumbers, bonusNumber);
      this.#resultModalView.showLottoResult(...this.#lottoData.getLottoResult());
    } catch ({ message }) {
      alert(message);
    }
  }

  #restartHandler() {
    this.#purchaseFormView.clearInput();
    this.#lottoListView.hideLottoListSection();
    this.#winningNumbersFormView.hideWinningNumberSection();
    this.#resultModalView.toggleModal();
    this.#lottoData.init();
  }
}
