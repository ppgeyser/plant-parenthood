import React from 'react';
import { useAuth0 } from "../../react-auth0-spa";

// This component is just used to show us the user's unique id.  We can remove this in the final build.
export const User = (props) => {
const { key } = useAuth0();

localStorage.setItem("userId" , key);

return (
        <div>
        {/* // Your key is: <code>{JSON.stringify(key, null, 2,)}</code> */}
        </div>
    )
}