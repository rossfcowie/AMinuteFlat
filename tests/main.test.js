/*
Developer: Ross Cowie (Arumage)

*/
const { test, expect } = require('@jest/globals')
const create = require('../js/create');
const iswin = require('../js/win');

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

test('creates a suitable game board when the function is called.',()=>{
    let board =  [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]];
    expect(create(5,1)).toEqual(board);
});

test('board contains exactly 50 total points',() =>{
let size = 5
 let target = 50;
 let board = create(size,1);
 for(var i = 0; i < size; i++) {    
    for(var j = 0; j < size; j++) {
       target-= board[i][j];
      }
  }
  expect(target).toBe(0);
}
)
test('board maximum and minimum constraints true',() =>{
    let max = 4;
    let min = 1;
    let cur = 2;
    let board = create(5,1);
    for(var i = 0; i < 5; i++) {    
       for(var j = 0; j < 5; j++) {
           cur = board[i][j]
          if(max<cur){
              max = cur;
          }else if(cur<min){
            min = cur;
          }
         }
     }
     expect(max).toBe(4);
     expect(min).toBe(1);
   }
   )
   test('Win function correctly detects victory',() =>{
      let board =  [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]];
      expect(iswin(board)).toEqual(true);
    }
    )

    test('Win function does not incorrectly detect victory',() =>{
        let board =  [[2,3,3,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]];
        expect(iswin(board)).toEqual(false);
        }
        )