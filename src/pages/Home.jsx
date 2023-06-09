import React from 'react';
import { useAuth } from '../Context/authContext';

function Home(props) {
    const user = useAuth()
    return (
        <div>
            Welcome {user?.email}
        </div>
    );
}

export default Home;