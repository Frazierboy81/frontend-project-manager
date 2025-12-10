import axios from "axios"

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzFjYTRiNGEzMDkwNWRjZjhjMTZjMiIsInVzZXJuYW1lIjoibGVta2JtbGEiLCJlbWFpbCI6InRpbUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE3NjUzOTIzNzgsImV4cCI6MTc2NTQ3ODc3OH0.2GwSSnGl5PxOqLyVXNpSk5HV78O0MmP-h1pqsaG7htM"
    }
});
