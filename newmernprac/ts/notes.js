/*
    JS is synchronous, single threaded, dynamically typed

    TS is syntactic superset of javascript.

    Typescript: defines type
                to make program strict

    Nodejs and browser both does not understand ts
    so it must be compiled to js
        TS ----> compiled ----> JS

        We need compiler named '

    To install typescript compiler,
        npm i -g typescript

    TO check whether ts is installed or not:
        tsc --

    Make tsconfig.json yourself and add the codes there:
        {
         "compilerOptions": {
        "target": "esnext",
        "lib": ["dom", "ES2023"],
        "strict": true
        }
        }

    // steps to run
    compile ts to js and run js manually
    
    npm i -g typescript
    create a index.ts
    tsc index.js
    node index.js

    Using js-node:
        npx tsc --init --> to install package.json

        npm i -g ts-node

    To run ts file,
        ts-node index.ts


*/