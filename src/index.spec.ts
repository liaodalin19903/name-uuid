import {test, expect } from 'vitest'

import {add} from './index'

import { genNameUUID, genNameMsects, genNameMsectsRand } from './index'

test('add', ()=> {
  expect(add(1,1)).toBe(2)
})

//1.测试 genNameUUID
// 测试成功： flow-fc820ff9-a1c8-4895-a00f-4a78c3b0a09e
test('genNameUUID', () => {
  const nameUUID = genNameUUID('flow')
  console.log(nameUUID)  
  
})

// 2.测试 nameTimestamp
// 测试成功：flow-1681388772775
test('genNameTimestamp', () => {
  const nameMsectimestamp = genNameMsects('flow')
  console.log(nameMsectimestamp)
  
})

// 3.测试 genNameMsectsRand
// 测试成功：flow-1681389654543-kNBA
test('genNameMsectsRand', () => {
  const nameMsectsRand = genNameMsectsRand('flow')
  console.log(nameMsectsRand)
})



