/* 
    *** Setting BE using typescript ***

1. Project Initialization and Dependencies:
Create a new directory for your backend and navigate into it:

Code

    mkdir mern-backend
    cd mern-backend

2. Initialize a new Node.js project.

Code

    npm init -y

3. Install core dependencies and TypeScript-related packages:

    npm install express mongoose dotenv
    npm install --save-dev typescript ts-node @types/node @types/express nodemon

    express: Web framework for building APIs.
    mongoose: ODM for interacting with MongoDB.
    dotenv: For managing environment variables.
    typescript: The TypeScript compiler.
    ts-node: Allows running TypeScript files directly without prior compilation.
    @types/node, @types/express: Type definitions for Node.js and Express.js.
    nodemon: For automatically restarting the server during development.

4. TypeScript Configuration:
    Generate a tsconfig.json file.

Code

    npx tsc --init

Modify tsconfig.json to suit your Node.js project, 
ensuring appropriate options like target, module, outDir, rootDir, and esModuleInterop. 

5. Project Structure:

    Create a src directory to house your TypeScript source code:
    
    Code

    mkdir src

    Note: index.ts can be made out of the src folder also

    Inside src, create your main server file (e.g., index.ts) and potentially other directories 
    for routes, models, controllers, etc.

6. Server Setup (index.ts):

    Create a basic Express server in src/index.ts:

    import express from 'express';
    import dotenv from 'dotenv';
    import dbConnect from './src/config/dbconnect';
    import bodyParser from 'body-parser'; // to handle JSON data

    // importing routes
    import categoryRoutes from './src/routes/categoryRoutes'

    // to load environment variables from a .env file into process.env
    dotenv.config();
    const port = process.env.PORT;

    const app = express();

    // listen to port
    app.listen(port, () => {
        console.log(`Server started successfully on the port ${port}`);
    } )

    Before running this:
        Make .env file
        & .gitignore file main server folder

        In .env,
            PORT = 8000
            MONGODB_URI = mongodb://127.0.0.1:27017/pasal       -> this is local mongo setup

        In .gitignore,
            .env
            node_modules
            
        Moreover for env variables for typescript, make 'types' folder inside src folder and inside it make
        file named env.d.ts and inside it add following code to define interfaces of environment variables.

            declare namespace NodeJS {
                interface ProcessEnv {
                    MONGODB_URI: string;
                    PORT: number;
                    NODE_ENV: 'development' | 'production' | 'test';
                    // Add other environment variables here as needed
                }
                }

for DB Connection:
    Make 'config' folder inside src foler and inside it make 'dbconnect.ts' file
        import mongoose from "mongoose";
        import dotenv from "dotenv";

        dotenv.config();

        const dbConnect = async (): Promise<void> => {
        try {
            if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
            }
            const connection = await mongoose.connect(process.env.MONGODB_URI);
            // console.log(connection);
            if (connection) console.log("Connected to MongoDB");
        } catch (err) {
            console.log(err);
            process.exit(1);
        }
        };

        export default dbConnect;

    & in main index.ts file, for db connection
        // for database connection
        dbConnect();

    For BODY Parsing i.e. to see/handle the JSON file add body-parser: In main index.ts file

        import bodyParser from 'body-parser'; // to handle JSON data
        
            // middleware
        app.use(bodyParser.json())
    
    Make 'models', 'controllers' and 'routes' folder inside src folder...
    Make categoryModel.ts inside models
    Make categoryControllers.ts inside controllers
    Make categoryRoutes.ts inside routes

    In categoryModel.ts,
        import mongoose, { Schema } from "mongoose";

        export interface ICategory {
            name: string;
            description: string;
        }

        const categorySchema: Schema<ICategory> = new Schema(
        {
            name: { type: String, required: true, unique: true },
            description: { type: String },
        },
        {
            timestamps: true,
        }
        );

        const Category = mongoose.model<ICategory>("Category", categorySchema);
        export default Category

    In categoryController.ts,
        import Category, { ICategory } from "../models/categoryModel";
        import { Request, Response } from "express";

        export const postCategory = async (req: Request, res: Response) => {
        try {
            // from the incoming data it only takes category name and description and omits rest
            // because _id, createdAt, updateAt are automatically added by mongoose
            const categoryData: Omit<ICategory, "_id" | "createdAt" | "updatedAt"> =
            req.body;
            // console.log(categoryData);
            const existing: ICategory | null = await Category.findOne({
            name: categoryData.name,
            });

            if (existing) {
            return res.status(400).json({ message: "Category Already Exists" });
            }

            // use Category.create() here instead of .save() because you are creating new Model here
            const newCategory: ICategory = await Category.create(categoryData);
            res
            .status(201)
            .json({ message: "Category Created Successfully", newCategory });
        } catch (error) {
            res.status(400).json({ message: "Failed to create category", error });
        }
        };

    In categoryRoute.ts,
        import express from 'express';

        import { postCategory } from '../controllers/categoryController';

        const router = express.Router();

        router.post('/postcategory', postCategory);

        export default router;

    Import and use routes in the index.ts as follows:

        // importing routes
        import categoryRoutes from './src/routes/categoryRoutes'

        // Routes
        app.use('/api', categoryRoutes) -> /api means all routes passing through category should follow after /api

    
*/