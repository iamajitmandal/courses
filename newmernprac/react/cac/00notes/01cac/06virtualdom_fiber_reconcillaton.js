/*
    createRoot -> makes one DOM like structure (just like the browser) and updates only those UI which is changed
    but browser updates the entire DOM

    React Fiber Concept, where and why?
        Suppose React has to change UI in one place, but at the same time another updates comes, again another updates comes, is such
        case instead of doing each updage one by one, it can terminate some intermediate update and can perform the final
        updation at the end.

    Check the following architecture:
        https://github.com/acdlite/react-fiber-architecture

    React Fiber:
        React Fiber is an ongoing reimplementation of React's core algorithm. 
        It is the culmination of over two years of research by the React team.

        The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. 
        Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread 
        it out over multiple frames.

        Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign 
        priority to different types of updates; and new concurrency primitives.

    What is reconciliation?
        reconciliation
            The algorithm React uses to diff one tree with another to determine which parts need to be changed.

        update
            A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
        
            The central idea of React's API is to think of updates as if they cause the entire app to re-render. 
            This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from 
            any particular state to another (A to B, B to C, C to A, and so on).

        Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes 
        something like this: when you render a React application, a tree of nodes that describes the app is generated and saved 
        in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, 
        it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. 
        The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

        Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be 
        largely the same. The key points are:

            1. Different component types are assumed to generate substantially different trees. React will not attempt to diff them, 
                but rather replace the old tree completely.

            2. Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

    Reconciliation versus rendering:
        The DOM is just one of the rendering environments React can render to, the other major targets being native iOS and 
        Android views via React Native. (This is why "virtual DOM" is a bit of a misnomer.)

        The reason it can support so many targets is because React is designed so that reconciliation and rendering are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.

        This separation means that React DOM and React Native can use their own renderers while sharing the same reconciler, 
        provided by React core.

        Fiber reimplements the reconciler. It is not principally concerned with rendering, though renderers will need to change 
        to support (and take advantage of) the new architecture.

        Scheduling:
            scheduling
                the process of determining when work should be performed.
                
            work
                any computations that must be performed. Work is usually the result of an update (e.g. setState).

        The key points are:

            1. In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, 
                causing frames to drop and degrading the user experience.
            2. Different types of updates have different priorities — an animation update needs to complete more quickly than, 
                say, an update from a data store.
            3. A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach 
                allows the framework (React) to be smart and make those decisions for you.
            
            React doesn't currently take advantage of scheduling in a significant way; an update results in the entire subtree 
            being re-rendered immediately. Overhauling React's core algorithm to take advantage of scheduling is the driving 
            idea behind Fiber.

        Now we're ready to dive into Fiber's implementation. The next section is more technical than what we've discussed so far. 
        Please make sure you're comfortable with the previous material before moving on.

    What is a fiber? (Learn in depth Later after your complete react for better understanding)
        We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application 
        developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. 
        Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)

        Here we go!

        We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need 
        to be able to:

            pause work and come back to it later.
            assign priority to different types of work.
            reuse previously completed work.
            abort work if it's no longer needed.

        In order to do any of this, we first need a way to break work down into units. In one sense, that's what a fiber is. 
        A fiber represents a unit of work.
*/