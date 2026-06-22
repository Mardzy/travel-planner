const API_BASE_URL = 'http://localhost:3000';

export const apiClient = async <ResponseBody>(path: string, init?: RequestInit): Promise<ResponseBody> => {
  const response = await fetch(`${API_BASE_URL}${path}`, init);

  if (response.ok) {
    return response.json() as Promise<ResponseBody>;
  }

  throw new Error(`Request failed: ${response.status} ${response.statusText}`);
};
