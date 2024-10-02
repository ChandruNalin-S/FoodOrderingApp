import { sum } from "../sum";


// the test function is called a test case and it takes two parameter 1->parameter description of test case and 2->parameter is call back function to perform some action.
test("checking the sum function performs",()=>{
  const result = sum(4,10);
  expect(result).toBe(14);// this is called a Assertion, which means comparing value with some condition.
})
