import client from "../../../Shared/services/api/client";

class AuthApiService {
  static async getTokens(username: string, password: string) {
    const response = await client.post<{ access_token: string }>(
      "/auth/tokens",
      { username, password },
    );
    return response.data.access_token;
  }
}

export default AuthApiService;
