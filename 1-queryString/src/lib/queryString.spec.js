import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Lucas',
      profession: 'Developer',
    };

    expect(queryString(obj)).toBe('name=Lucas&profession=Developer');
  });

  it('should create a valid query string when an array is passed as value', () => {
    const obj = {
      name: 'Lucas',
      abilities: ['JS', 'TS'],
    };

    expect(queryString(obj)).toBe('name=Lucas&abilities=JS,TS');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Lucas',
      abilities: {
        first: 'JS',
        second: 'TS',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('Should convert a query string to object', () => {
    const qs = 'name=Lucas&profession=dev';
    expect(parse(qs)).toEqual({
      name: 'Lucas',
      profession: 'dev',
    });
  });

  it('Should convert a query string of a single key-value to object', () => {
    const qs = 'name=Lucas';
    expect(parse(qs)).toEqual({
      name: 'Lucas',
    });
  });

  it('should convert a query string to an object taking care of comma separator', () => {
    const qs = 'name=Lucas&abilities=JS,TS';
    expect(parse(qs)).toEqual({
      name: 'Lucas',
      abilities: ['JS', 'TS'],
    });
  });
});
