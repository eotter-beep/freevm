var pager = require('paged-memory')

var pages = (mem) => ({ pager(mem) })

console.log(page.offset) // 10240
console.log(page.buffer) // a blank 1kb buffer
// Meo is our paged memory handler
