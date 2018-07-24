// Da potencia y flexibilidad a tus tests con Jest 
// https://www.genbeta.com/desarrollo/da-potencia-flexibilidad-tus-tests-jest

// test inicial
test('should sum two numbers', () => {
    let result = 3 + 2;        
    expect(result).toBe(5);
});

// agrupar tests en contexto
describe('Operaciones matematicas', () => {
    test('deberia sumar dos numeros', () => {
      let result = 4+2;
      expect(result).toBe(6);   
    });
 });

// setup y teardown
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
beforeAll(() => console.log('2 - beforeAll'));
afterAll(() => console.log('2 - afterAll'));
beforeEach(() => console.log('2 - beforeEach'));
afterEach(() => console.log('2 - afterEach'));
test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll

// Matchers
test('matchers', () => { 
    expect(3+2).toBe(5);
    expect(3+2).not.toBe(6);
    expect(null).toBeNull();
    expect(null).toBeDefined();
    expect(null).not.toBeUndefined();
    expect(null).not.toBeTruthy();
    expect(null).toBeFalsy();
});

test('objetos y listas', () => { 
    let data = {one: 1};
    data['two'] = 2;
    
    expect(data).toEqual({one: 1, two: 2});
    expect(data).toEqual({two: 2, one: 1});
    expect(['cat', 'beer', 'dog']).toContain('beer');
});

test('valores numericos', () => { 
    expect(2+2).toBe(4);
    expect(2+2).toEqual(4);
    expect(2+2).toBeGreaterThan(3);
    expect(2+2).toBeGreaterThanOrEqual(3.5);
    expect(2+2).toBeLessThan(5);
    expect(2+2).toBeLessThanOrEqual(4.5);
    
    expect(0.1 + 0.2).not.toBe(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3);
    expect(2+2).toBeGreaterThan(3);
    expect(2+2 > 3).toBe(true);
});

test('expresiones regulares', () => { 
    expect('Christoph').toMatch(/stop/);
});

// test excepciones
const computeValue = () => {
    throw new Error('should fail');
};

test('excepciones', () => { 
    expect(computeValue).toThrow();
    expect(computeValue).toThrow(Error);
    expect(computeValue).toThrow('should fail');
    expect(computeValue).toThrow(/fail/);
});

