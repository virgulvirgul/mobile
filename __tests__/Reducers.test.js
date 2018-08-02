import rootSet from '../src/redux/rootSet';

const { types, reducers } = rootSet;

describe('accounts reducers', () => {
  it(`${types.SET_ACCOUNTS} returns correct state`, () => {
    const type = types.SET_ACCOUNTS;
    const key = 'accounts';
    const initialState = [];
    const payload = [{ foo: 'bar' }];
    const expected = payload;
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });
});

describe('categories reducers', () => {
  it(`${types.ADD_CATEGORIES} returns correct state`, () => {
    const type = types.ADD_CATEGORIES;
    const key = 'categories';
    const initialState = [{ foo: 'bar' }];
    const payload = { fizz: 'buzz' };
    const expected = [...initialState, payload];
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.CLEAR_CATEGORIES} returns correct state`, () => {
    const type = types.CLEAR_CATEGORIES;
    const key = 'categories';
    const initialState = [{ foo: 'bar' }];
    const payload = null;
    const expected = [];
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.SET_CATEGORIES} returns correct state`, () => {
    const type = types.SET_CATEGORIES;
    const key = 'categories';
    const initialState = [];
    const payload = [{ foo: 'bar' }];
    const expected = payload;
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });
});

describe('currentAccount reducers', () => {
  it(`${types.ADD_CURRENT_ACCOUNT} returns correct state`, () => {
    const type = types.ADD_CURRENT_ACCOUNT;
    const key = 'currentAccount';
    const initialState = { foo: 'bar' };
    const payload = { fizz: 'buzz' };
    const expected = { ...initialState, ...payload };
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.CLEAR_CURRENT_ACCOUNT} returns correct state`, () => {
    const type = types.CLEAR_CURRENT_ACCOUNT;
    const key = 'currentAccount';
    const initialState = { foo: 'bar' };
    const payload = null;
    const expected = {};
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.SET_CURRENT_ACCOUNT} returns correct state`, () => {
    const type = types.SET_CURRENT_ACCOUNT;
    const key = 'currentAccount';
    const initialState = {};
    const payload = { foo: 'bar' };
    const expected = payload;
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });
});

describe('language reducers', () => {
  it(`${types.CLEAR_LANGUAGE} returns correct state`, () => {
    const type = types.CLEAR_LANGUAGE;
    const key = 'language';
    const initialState = 'en-US';
    const payload = null;
    const expected = '';
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.SET_LANGUAGE} returns correct state`, () => {
    const type = types.SET_LANGUAGE;
    const key = 'language';
    const initialState = 'en-US';
    const payload = 'es-SP';
    const expected = payload;
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });
});

describe('lockup reducers', () => {
  it(`${types.CLEAR_LOCKUP} returns correct state`, () => {
    const type = types.CLEAR_LOCKUP;
    const key = 'lockup';
    const initialState = 'I am an error';
    const payload = null;
    const expected = '';
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.SET_LOCKUP} returns correct state`, () => {
    const type = types.SET_LOCKUP;
    const key = 'lockup';
    const initialState = '';
    const payload = 'Look at me!';
    const expected = payload;
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });
});

describe('products reducers', () => {
  it(`${types.ADD_PRODUCTS} returns correct state`, () => {
    const type = types.ADD_PRODUCTS;
    const key = 'products';
    const initialState = [{ foo: 'bar' }];
    const payload = { fizz: 'buzz' };
    const expected = [payload, ...initialState];
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.CLEAR_PRODUCTS} returns correct state`, () => {
    const type = types.CLEAR_PRODUCTS;
    const key = 'products';
    const initialState = [{ foo: 'bar' }];
    const payload = null;
    const expected = [];
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.SET_PRODUCTS} returns correct state`, () => {
    const type = types.SET_PRODUCTS;
    const key = 'products';
    const initialState = [];
    const payload = [{ foo: 'bar' }];
    const expected = payload;
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.REMOVE_PRODUCTS} returns correct state`, () => {
    const type = types.REMOVE_PRODUCTS;
    const key = 'products';
    const initialState = [{ id: 'foobar' }];
    const payload = 'foobar';
    const expected = [];
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });
});

describe('productToEdit reducers', () => {
  it(`${types.ADD_PRODUCT_TO_EDIT} returns correct state`, () => {
    const type = types.ADD_PRODUCT_TO_EDIT;
    const key = 'productToEdit';
    const initialState = { foo: 'bar' };
    const payload = { fizz: 'buzz' };
    const expected = { ...initialState, ...payload };
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.CLEAR_PRODUCT_TO_EDIT} returns correct state`, () => {
    const type = types.CLEAR_PRODUCT_TO_EDIT;
    const key = 'productToEdit';
    const initialState = { foo: 'bar' };
    const payload = null;
    const expected = {};
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.SET_PRODUCT_TO_EDIT} returns correct state`, () => {
    const type = types.SET_PRODUCT_TO_EDIT;
    const key = 'productToEdit';
    const initialState = {};
    const payload = { foo: 'bar' };
    const expected = payload;
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });
});

describe('toasts reducers', () => {
  it(`${types.ADD_TOASTS} returns correct state`, () => {
    const type = types.ADD_TOASTS;
    const key = 'toasts';
    const initialState = ['foo'];
    const payload = 'bar';
    const expected = ['foo', 'bar'];
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.CLEAR_TOASTS} returns correct state`, () => {
    const type = types.CLEAR_TOASTS;
    const key = 'toasts';
    const initialState = ['foo'];
    const payload = null;
    const expected = [];
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.SET_TOASTS} returns correct state`, () => {
    const type = types.SET_TOASTS;
    const key = 'toasts';
    const initialState = ['foo'];
    const payload = ['bar'];
    const expected = payload;
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.UNSHIFT_TOASTS} returns correct state`, () => {
    const type = types.UNSHIFT_TOASTS;
    const key = 'toasts';
    const initialState = ['foo', 'bar'];
    const payload = null;
    const expected = ['bar'];
    const received = reducers({ [key]: initialState }, { type, payload });
    expect(received[key]).toEqual(expected);
  });
});
