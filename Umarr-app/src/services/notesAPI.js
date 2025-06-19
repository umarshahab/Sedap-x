import axios from 'axios'

const API_URL = "https://trtfexwyxwbgzzsrwpys.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydGZleHd5eHdiZ3p6c3J3cHlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NzM1MTIsImV4cCI6MjA2NTM0OTUxMn0.f-gigWYQdKzS_th1ZjQl6X4KBfpBPHItHWpl24YQ5I4"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },
    async updateNote(id, data) {
    await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers });
  },
}