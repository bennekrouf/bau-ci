import { expect as expect } from 'chai'
import ttt from '../src/module.js'

describe('bau-ci', () => {
  it('should be runing without any problems', () => {
    expect(ttt).to.not.throw()
  })
})
