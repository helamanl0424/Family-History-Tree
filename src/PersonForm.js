import React, { useState } from 'react';
import axios from 'axios';

function PersonForm() {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerson(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/persons', person);
            alert('Person added successfully!');
            setPerson({ firstName: '', lastName: '' }); // Reset form
        } catch (error) {
            alert('Failed to add person');
            console.error('Error adding person:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={person.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
            />
            <input
                type="text"
                name="lastName"
                value={person.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
            />
            <button type="submit">Add Person</button>
        </form>
    );
}

export default PersonForm;