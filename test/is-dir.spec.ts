import assert from 'assert'

import { isDir, isDirSync } from '../src/is-dir'

describe('is-dir', () => {
  it('async', async () => {
    assert(await isDir('test'))
    assert(!(await isDir('failed')))
  })

  it('async', async () => {
    assert(isDirSync('test'))
    assert(!isDirSync('failed'))
  })
})
