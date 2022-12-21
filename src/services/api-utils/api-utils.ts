export async function handleResponse<T>(response: Response): Promise<T | null> {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    return handleError(new Error(error));
  }
  return handleError(new Error("Network response was not ok."));
}

// In a real app, would likely call an error logging service.
export function handleError(error: Error): null {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  return null;
}
