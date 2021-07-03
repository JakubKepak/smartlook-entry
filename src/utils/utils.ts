import _ from 'lodash';

export const truncate = (input: string): string => {
  return _.truncate(input, {
    length: 100,
  });
};
