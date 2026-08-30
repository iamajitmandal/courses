/*
    Learning about Use Effect Hook

    Learning to Fetch API Data using UseEffect...

    One Error: 
        Each Child in a list should have a unique 'key' prop.
        To remove the above error add kye={item.id} in the following type of code:

        return (
            <>
                {post.map((item) => (
                    <li key={item.id}>{item.title}</li>
                    ))}
            </>
        )


 */