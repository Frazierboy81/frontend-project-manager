import axios from "axios"

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzFjYTRiNGEzMDkwNWRjZjhjMTZjMiIsInVzZXJuYW1lIjoibGVta2JtbGEiLCJlbWFpbCI6InRpbUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE3NjQ5NTY0MTUsImV4cCI6MTc2NDk2MzYxNX0.aluNlo3KynUEZH4oTWDeI5jQZIIRLkoJ8mXNyZaBd-U"
    }
});
