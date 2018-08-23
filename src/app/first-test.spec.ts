describe('my first test', function() {
  let sut;

  beforeEach(function() {
    sut = {};
  })

  it('should be true if true', function() {
    // arrange
    sut.a = false;

    // act
    sut.a = true;

    //assert
    expect(sut.a).toBe(true);
  })
});
