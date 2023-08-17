import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

function UserList() {
    const [users, setUsers] = useState([]);
    const columns = [
        { field: 'firstName', headerName: 'First name' },
        { field: 'lastName', headerName: 'Last name' },
        { field: 'email', headerName: 'Email' },
    ];

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        
        <div className="App">
            <h1>Users</h1>
            {/* data grid */}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    getRowId={(row) => row._id}
                />
            </div>
        </div>
    );
}

export default UserList;
