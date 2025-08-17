import { add } from "internal-wasm/internal_wasm"

async function test() {
    console.log(add(2, 3))
}

void test()