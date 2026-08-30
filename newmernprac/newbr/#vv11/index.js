/*
    Continuing the previous Lottery Project    
    
    To remove timer we have, clearTimer

    Try to understand the following code:
        {!isPaused && <button onClick={pauseGame}>Pause</button>}
        {isPaused && <button onClick={pauseGame}>Continue</button>}

    Try to understand the following code:

          // const pauseGame = () => {
            //     setIsPaused(true)
            // };

            // const resumeGame = () => {
            //   setIsPaused(false)
            // };

            const pauseGame = () => {
                setIsPaused(!isPaused);
            };

        {!isPaused && <button onClick={pauseGame}>Pause</button>}
        {isPaused && <button onClick={resumeGame}>Continue</button>}

        <button onClick={pauseGame}>{isPaused ? "Start" : "Pause"}</button>

    For Project:
        Make Show casable project that you can show to the company
        Do some hobby project so that you will get interest

        Some Tools:
            Remotion
            Twilio : Twilio gives you the tools to connect digital experiences on any channel, 
                     full access to your customer data, and AI
            Node cron : node-cron module is tiny task scheduler in pure JavaScript for node.js based on GNU crontab

        Think your project and Start making project

*/