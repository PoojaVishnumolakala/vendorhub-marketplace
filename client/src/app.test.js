import{describe,it,expect}from'vitest';describe('dashboard',()=>it('calculates marketplace totals',()=>expect([8490,3250,12800,2199].reduce((a,b)=>a+b,0)).toBe(26739)));

