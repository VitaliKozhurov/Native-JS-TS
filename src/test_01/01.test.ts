import {mult, splitInfoWord, sum} from "./01";

test('Sum should be correct',()=>{
    const a=1;
    const b=2;
    const c=3;

    const result1 = sum(a,b);
    const result2 = sum(b,c);


    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test('Mult should be correct',()=>{
    const a=1;
    const b=2;
    const c=3;

    const result1 = mult(a,b);
    const result2 = mult(b,c);


    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('Splitting word should be correct',()=>{
    const sent1="Hello my friend!";
    const sent2="JS - the best  programming language.";

    const result1 = splitInfoWord(sent1);
    const result2 = splitInfoWord(sent2);


    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language');
})