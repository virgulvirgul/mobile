import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'; // You can use any testing library
import rootSet from '../src/redux/rootSet';

const { actions, types } = rootSet;
const mockStore = configureMockStore([thunk]);

const currentAccount = {
  consumerKey: '',
  consumerSecret: '',
  baseURL: '',
};

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('asyncGetProducts fires correct actions', async () => {
    const body = { products: [{ foo: 'bar' }] };
    const headers = { 'content-type': 'application/json' };
    fetchMock.mock('*', { body, headers });

    const expected = [
      { type: types.ASYNC_GET_PRODUCTS_REQUEST },
      { type: types.ASYNC_GET_PRODUCTS_SUCCESS },
      {
        type: types.SET_PRODUCTS,
        payload: body.products,
      },
    ];

    const store = mockStore();
    await store.dispatch(actions.asyncGetProducts(currentAccount));
    expect(store.getActions()).toEqual(expected);
  });

  it('creates SET_CATEGORIES after fetching categories', async () => {
    const body = { product_categories: [{ foo: 'bar' }] };
    const headers = { 'content-type': 'application/json' };
    fetchMock.mock('*', { body, headers });

    const expected = [
      { type: types.ASYNC_GET_CATEGORIES_REQUEST },
      { type: types.ASYNC_GET_CATEGORIES_SUCCESS },
      {
        type: types.SET_CATEGORIES,
        payload: body.product_categories,
      },
    ];

    const store = mockStore();
    await store.dispatch(actions.asyncGetCategories(currentAccount));
    expect(store.getActions()).toEqual(expected);
  });

  it('asyncGetCategories fires correct actions', async () => {
    const body = { errors: ['foobar'] };
    const headers = { 'content-type': 'application/json' };
    fetchMock.mock('*', { throws: body });

    const expected = [
      { type: types.ASYNC_GET_CATEGORIES_REQUEST },
      { type: types.ASYNC_GET_CATEGORIES_FAILURE, payload: body },
    ];
    const store = mockStore();
    await store.dispatch(actions.asyncGetCategories(currentAccount));
    expect(store.getActions()).toEqual(expected);
  });
});
