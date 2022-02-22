import Model from './model.js';
import LottoListView from './view/LottoList.js';
import PurchaseFormView from './view/PurchaseForm.js';
import { LOTTO_PRICE } from './constants.js';

export default class Controller {
  constructor() {
    this.purchaseFormView = new PurchaseFormView();
    this.lottoListView = new LottoListView();
    this.model = new Model();
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    this.purchaseFormView.setOnSubmitCash(cash => this.onSubmitCash(cash));
  }

  onSubmitCash(cash) {
    const quantity = cash / LOTTO_PRICE;
    this.model.buyLotto(quantity);
    this.lottoListView.showDescription(quantity);
    this.lottoListView.showLottoList(this.model.getLottoList());
  }
}
