const API_URL = "http://localhost:3000/api"; // backend URL

export async function loginUser(credentials) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
