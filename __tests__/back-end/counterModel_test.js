import Counter from '../../src/counterModel'



describe('Counter', () => {

  const counter = new Counter()

  describe('#constructor', () => {
    it('should start all counters at 0', () => {
      expect(counter.hotCounter).toEqual(0)
      expect(counter.coldCounter).toEqual(0)
      expect(counter.neutralCounter).toEqual(0)
    })
    it('should start with an empty array', () => {
      expect(counter.cookieIDLog.length).toEqual(0)
    })
  })

  describe('#vote hot', () => {
    it('should increase the hotCounter by 1', () => {
      counter.voteHot()
      expect(counter.hotCounter).toEqual(1)
    })
  })

  describe('#vote cold', () => {
    it('should increase the coldCounter by 1', () => {
      counter.voteCold()
      expect(counter.coldCounter).toEqual(1)
    })
  })

  describe('#vote neutral', () => {
    it('should increase the neturalCounter by 1', () => {
      counter.voteNeutral()
      expect(counter.neutralCounter).toEqual(1)
    })
  })

  describe('#addCookie', () => {
    it('should add a cookie to the array', () => {
      const cookie = 'username=123456'
      counter.addCookie(cookie)
      expect(counter.cookieIDLog.length).toEqual(1)
      expect(counter.cookieIDLog).toContain('username=123456')
    })
  });

})
