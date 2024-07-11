import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PersonList() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const fetchPersons = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/persons');
                setPersons(response.data);
            } catch (error) {
                console.error('Error fetching persons:', error);
            }
        };

        fetchPersons();
    }, []);

    return (
        <div className="tree">
            <ul>
                {persons.map(person => (
                    <li key={person.id}>
                        <a href="#">{person.first_name} {person.last_name}</a>
                        {/* Assuming you have a way to nest children here */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonList;