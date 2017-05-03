import { expect as expect } from 'chai'
import BauCI from '../src/module.js'

describe('bau-ci', () => {
  it('should be runing without any problems', () => {
    expect(BauCI).to.not.throw()
  })
})
