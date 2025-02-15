import * as types from './mutation-types';

const state = {
  count: 0,
};

const mutations = {
  [types.INCREMENT](data) {
    data.count += 1;
  },
  [types.DECREMENT](data) {
    data.count -= 1;
  },
};

export default {
  state,
  mutations,
};
