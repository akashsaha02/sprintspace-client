import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const UpdateRegistration = () => {
    const { id } = useParams();
    const [registration, setRegistration] = useState(null);
    useEffect(() => {
        axios.get(`${apiBaseUrl}/registrations/${id}`).then((response) => {
            setRegistration(response.data);
        }).catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, [])
    return (
        <div>
            <h1>Update Registration</h1>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={registration?.name} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={registration?.email} />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" value={registration?.phone} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <textarea id="address" name="address" value={registration?.address} />
                </div>
                <button type="submit">Update</button>
            </form>

        </div>
    )
}

export default UpdateRegistration
