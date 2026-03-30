import react from 'react';
import { useParams } from 'react-router-dom';
export const Profile = () => {
    const { user } = useParams()
    console.log(user);
    
    return ( 
        <div>
            <h1>Profile</h1>
            <p>Name: ${user}</p>
        </div>
     );
}
 