const fs = require('fs');
const { cmp_lists } = require('./gauss_functions.js');
const { MockMatrix } = require('./matrix.js'); // Імпорт MockMatrix замість matrix.js

function test() {
    const m = new MockMatrix(3); // Створення об'єкта MockMatrix замість matrix
    const golden_list = m.read_golden();
    const output_list = m.gauss(m);
    m.write_in_file(output_list);
    if (cmp_lists(output_list, golden_list)) {
        fs.writeFileSync('result.txt', "test passed");
    } else {
        fs.writeFileSync('result.txt', "test not passed");
    }
}

test();