import test from'node:test';import assert from'node:assert/strict';test('order states',()=>assert.deepEqual(['Processing','Delivered','Cancelled'],['Processing','Delivered','Cancelled']));

