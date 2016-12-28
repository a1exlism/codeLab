// Diffuse all of the Bombs!
Bomb.diffuse(/* your guess goes here */);

// console.log( Bomb );

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

describe('Solution', function() {
  Test.assertEquals(Bomb.diffuse(), 1);
});
