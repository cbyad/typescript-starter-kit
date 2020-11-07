import { array } from 'fp-ts/lib/Array'
import { identity } from 'fp-ts/lib/function'
import { delay, task, taskSeq } from 'fp-ts/lib/Task'
import { access, constants } from 'fs'
import { sum } from "./src/app"


console.log(sum(1, 2, 3, 4, 5))

const log = <A>(x: A) => { console.log(x); return x }

const tasks = [
    delay(200)(() => Promise.resolve(log('first'))),
    delay(100)(() => Promise.resolve(log('second')))
]


// Parallel: logs 'second' then 'first'
array.sequence(task)(tasks)()
// Sequential: logs 'first' then 'second'
array.sequence(taskSeq)(tasks)()


const checkPathExists = (path: string) => () =>
    new Promise(resolve =>
        access(path, constants.F_OK, err => resolve({ path, exists: !err }))
    )

const items = ['/bin', '/no/real/path']

array.traverse(task)(items, checkPathExists)()

const flatten2Array = <T>(arr: T[][]) => array.chain(arr, identity)  
