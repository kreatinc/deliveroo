import { fromEvent, Observable, interval } from "rxjs";
import {
  map,
  throttle,
  distinctUntilChanged,
  switchMap,
  retry,
  filter,
} from "rxjs/operators";
import apiClient from "services/apiClient";
import {
  receiveSearchProducts,
  fetchSearchProductsFailure,
  fetchSearchProductsRequest,
} from "store/actions/userActions";

const search = (dispatch) => {
  const searchField = document.getElementById("search__field");
  const keyPresses = fromEvent(searchField, "keyup");

  function getSearchProductsResults(productName) {
    return Observable.create(function (observer) {
      dispatch(fetchSearchProductsRequest());
      apiClient
        .get(
          `https://deliver-me-api.herokuapp.com/api/products?title=${productName}`
        )
        .then(
          (res) => {
            observer.next(res);
          },
          (error) => {
            observer.error(error);
          }
        );
    });
  }

  const resultSets = keyPresses.pipe(
    throttle((val) => interval(1000)),
    map((key) => searchField.value),
    distinctUntilChanged(),
    filter((search) => search.length > 0),
    switchMap(getSearchProductsResults),
    retry(2)
  );

  const subscription = resultSets.subscribe(
    (response) => {
      dispatch(receiveSearchProducts(response));
    },
    (error) => dispatch(fetchSearchProductsFailure(error))
  );

  return subscription;
};

export default search;
