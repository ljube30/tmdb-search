import { observable, action } from "mobx";

class SearchStore {
  @observable searchTerms = [];
  @action pushSearchTerm(term) {
    this.searchTerms.push(term);
  }
  @action popSearchTerm() {
    return this.searchTerms.pop();
  }
}

const store = new SearchStore();
export default store;
