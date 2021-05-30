

declare namespace Lib {
    export interface A {
        a(): string
    }

    export interface B {
        c(): number
    }

    export interface Base extends A {
        b: B
    }
}

declare var lib: Lib.Base