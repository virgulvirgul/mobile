import React from 'react';
import rootSet from '../src/redux/rootSet';
import { camelCase } from 'lodash';

const { actions, types } = rootSet;

describe('action creators', () => {
  for (let type in types) {
    const actionName = camelCase(type);
    const action = actions[actionName];
    const payload = [{ foo: 'bar' }];
    const isActionWithPayload = action(payload).payload;
    const optionalPayloadMessage = isActionWithPayload
      ? ` with test payload ${JSON.stringify(payload)}`
      : '';

    it(`${actionName} should return type ${type}${optionalPayloadMessage}`, () => {
      if (isActionWithPayload) {
        expect(action(payload)).toEqual({ type, payload });
      } else {
        expect(action()).toEqual({ type });
      }
    });
  }
});
