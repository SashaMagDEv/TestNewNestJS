declare module '*.hbs' {
    const content: string;
    export default content;
}

declare namespace NodeJS {
    interface Global {
        // Add your global types here
    }
}

// Example of a global variable declaration
declare const myGlobalVariable: string;