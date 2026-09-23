/*
    *** For Typescript BE Using Express ***
    1. npm init -y
    2. npm install express dotenv npm install -D typescript ts-node @types/node @types/express nodemon eslint prettier
    or,  install separately
                npm install express dotenv
                npm install -D typescript ts-node @types/node @types/express nodemon eslint prettier
    
        The DotEnv package is used to read environment variables from a .env file.
        
        The -D, or --dev, flag directs the package manager to install these libraries as development dependencies.
        
        ts-node — Enables running TypeScript files directly without pre-compiling to JavaScript
        @types/node — Provides TypeScript type definitions for Node.js core modules
        @types/express — Adds TypeScript type definitions for the Express framework
        nodemon — Automatically restarts the server when file changes are detected during development
        eslint — Lints the code to catch errors and enforce coding standards
        prettier — Formats the code to ensure consistent style across the project

    3. npx tsc --init        
        for tsconfig.json file :
        Every TypeScript project utilizes a configuration file to manage various project settings. The tsconfig.json file, which serves as the TypeScript configuration file, 
        outlines these default options and offers the flexibility to modify or customize compiler settings to suit your needs.
        Sample of above file:
                            {
                  "compilerOptions": {
                    "target": "ES2020",
                    "module": "commonjs",
                    "outDir": "./dist",
                    "rootDir": "./src",
                    "strict": true,
                    "esModuleInterop": true,
                    "skipLibCheck": true,
                    "forceConsistentCasingInFileNames": true
                  },
                  "include": ["src/**/*"],
                  "exclude": ["node_modules"]
                }

    4. Generate following folder structure:
        Inside server folder,
                ├── src/
                │   ├── config/
                │   │   └── config.ts        // Load and type environment variables
                │   ├── controllers/
                │   │   └── itemController.ts  // CRUD logic for "items"
                │   ├── middlewares/
                │   │   └── errorHandler.ts    // Global typed error handling middleware
                │   ├── models/
                │   │   └── item.ts          // Define item type and in-memory storage
                │   ├── routes/
                │   │   └── itemRoutes.ts    // Express routes for items
                │   ├── app.ts               // Express app configuration (middlewares, routes)
                │   └── server.ts            // Start the server
                ├── .env                     // Environment variables
                ├── package.json             // Project scripts, dependencies, etc.
                ├── tsconfig.json            // TypeScript configuration
                ├── .eslintrc.js             // ESLint configuration
                └── .prettierrc              // Prettier configuration

    5. Inside src/config/config.ts: -> This file loads your environment variables from a .env file and provides type checking.
            
        import dotenv from 'dotenv';

        dotenv.config();
        
        interface Config {
          port: number;
          nodeEnv: string;
        }
        
        const config: Config = {
          port: Number(process.env.PORT) || 3000,
          nodeEnv: process.env.NODE_ENV || 'development',
        };
        
        export default config;

        Inside .env,
                PORT=3000
                NODE_ENV=development

    6. Write Models, Controllers and Routes
    7. Inside src/middlewares/errorHandler.ts, -> This middleware catches errors thrown in your routes/controllers and sends a consistent, type-safe JSON error response.
        
            import { Request, Response, NextFunction } from 'express';

            export interface AppError extends Error {
              status?: number;
            }
            
            export const errorHandler = (
              err: AppError,
              req: Request,
              res: Response,
              next: NextFunction
            ) => {
              console.error(err);
              res.status(err.status || 500).json({
                message: err.message || 'Internal Server Error',
              });
            };

    8. Inside src/app.ts,
            import express from 'express';
            import itemRoutes from './routes/itemRoutes';
            import { errorHandler } from './middlewares/errorHandler';
            
            const app = express();
            
            app.use(express.json());
            
            // Routes
            app.use('/api/items', itemRoutes);
            
            // Global error handler (should be after routes)
            app.use(errorHandler);
            
            export default app;

    9. Inside src/server.ts, -> Server entry point
            import app from './app';
            import config from './config/config';
            
            app.listen(config.port, () => {
              console.log(`Server running on port ${config.port}`);
            });

    10. Linting and code formatting
            ESLint and Prettier are essential tools for maintaining code quality and consistency in a TypeScript project. 
            ESLint is a linter that analyzes code for potential errors, stylistic issues, and adherence to best practices, 
            while Prettier is a code formatter that ensures a consistent code style across the entire codebase.

            In the .eslintrc.js paste in the following code:
                module.exports = {
                  parser: '@typescript-eslint/parser',
                  plugins: ['@typescript-eslint'],
                  extends: [
                    'eslint:recommended',
                    'plugin:@typescript-eslint/recommended',
                    'prettier',
                  ],
                  env: {
                    node: true,
                    es6: true,
                  },
                };

            In .prettierrc put the following:
                {
                  "semi": true,
                  "singleQuote": true,
                  "trailingComma": "all"
                }
    11. Watchers and development scripts
        In your package.json, add scripts for TypeScript compilation and automatic server restart. For example:
        
        {
          "scripts": {
            "build": "tsc",
            "start": "node dist/server.js",
            "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/server.ts",
            "lint": "eslint 'src/**/*.ts'"
          },
          ...
        }
        tsc --watch — For continuous compilation in development.
        nodemon — To automatically restart your server when files change.


            Finally, run the app -> npm run dev

*/