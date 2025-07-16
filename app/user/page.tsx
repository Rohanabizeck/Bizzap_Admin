'use client';
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Avatar,
    Stack,
    Button,
    CircularProgress,
    Switch,
    FormControlLabel,
} from '@mui/material';

const initialUsers = [
    {
        id: 1,
        name: 'Rohan Sharma',
        email: 'rohan@example.com',
        role: 'Admin',
        avatar: '/images/profile/user-1.jpg',
        onboardingProgress: 85,
        isActive: true,
    },
    {
        id: 2,
        name: 'Dharshini Raj',
        email: 'dharshini@example.com',
        role: 'Editor',
        avatar: '/images/profile/user-2.jpg',
        onboardingProgress: 60,
        isActive: true,
    },
    {
        id: 3,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'User',
        avatar: '/images/profile/user-3.jpg',
        onboardingProgress: 30,
        isActive: false,
    },
];

export default function UsersPage() {
    const [users, setUsers] = useState(initialUsers);

    const handleToggle = (id: number) => {
        const updated = users.map((user) =>
            user.id === id ? { ...user, isActive: !user.isActive } : user
        );
        setUsers(updated);
    };

    return (
        <Box>
            <Typography variant="h5" fontWeight={600} mb={3} color='text.primary'>
                Users
            </Typography>

            <Paper elevation={3} sx={{ overflow: 'hidden' }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                            <TableCell>#</TableCell>
                            <TableCell>User</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Onboarding</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={user.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Avatar src={user.avatar} alt={user.name} />
                                        <Typography>{user.name}</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell sx={{ minWidth: 160 }}>
                                    <Box position="relative" display="inline-flex">
                                        <CircularProgress
                                            variant="determinate"
                                            value={user.onboardingProgress}
                                            size={48}
                                            thickness={5}
                                            color={
                                                user.onboardingProgress >= 80
                                                    ? 'success'
                                                    : user.onboardingProgress >= 50
                                                        ? 'warning'
                                                        : 'error'
                                            }
                                        />
                                        <Box
                                            top={0}
                                            left={0}
                                            bottom={0}
                                            right={0}
                                            position="absolute"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Typography
                                                variant="caption"
                                                component="div"
                                                color="text.secondary"
                                            >
                                                {`${user.onboardingProgress}%`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={user.isActive}
                                                onChange={() => handleToggle(user.id)}
                                                color="primary"
                                            />
                                        }
                                        label={user.isActive ? 'Active' : 'Inactive'}
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                                        <Button variant="outlined" size="small">
                                            View
                                        </Button>
                                        <Button variant="contained" color="primary" size="small">
                                            Edit
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
}
