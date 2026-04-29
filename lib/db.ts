// src/lib/db.ts
export let temp_users: any[] = []; 

// Helper to update the array since "export let" can be tricky with imports
export const setTempUsers = (newUsers: any[]) => {
  temp_users = newUsers;
};
