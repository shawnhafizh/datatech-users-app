export const fetchUsers = async () => {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    return data;  // return the fetched data
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];  // return an empty array in case of error
  }
};