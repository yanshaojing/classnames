import { it, describe } from 'mocha'
import { expect } from 'chai'
import classNames from '../src'

describe('classNames Testing', () => {
  it('Object', () => {
    expect(classNames({
      header: true,
      footer: false,
    })).to.equal('header')
  })

  it('String', () => {
    expect(classNames('header', 'section')).to.equal('header section')
  })

  it('Array', () => {
    expect(classNames(['header', 'section'])).to.equal('header section')
  })

  it('Mixins', () => {
    expect(classNames(
      'header',
      {
        section: true,
        caption: false,
      },
      ['footer'],
      'body view',
    )).to.equal('header section footer body view')
  })
})
