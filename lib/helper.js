const BASE_URL = "http://localhost:3000/";

/**
 * This function makes a GET request to the /api/users endpoint and returns the
 * response as JSON.
 * @returns An array of objects.
 */
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}api/users`);
  const json = await response.json();
  return json;
};

/**
 * It fetches a user from the API and returns the user object or an empty object if
 * the user doesn't exist
 * @param userId - The user's ID
 * @returns An object with the user's information.
 */
export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}api/users/${userId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};

export async function addUser(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}api/users`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

/**
 * It takes a userId and formData as arguments, and then it makes a PUT request to
 * the server with the userId and formData
 * @param userId - The id of the user you want to update
 * @param formData - {
 * @returns The response from the server.
 */

export async function updateUser(userId, formData) {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${BASE_URL}api/users/${userId}`, Options);
  const json = await response.json();
  return json;
}

//Delete user
export async function deleteUser(userId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${BASE_URL}api/users/${userId}`, Options);
  const json = await response.json();
  return json;
}
