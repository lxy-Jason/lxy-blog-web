// const baseUrl = 'http://localhost:3667';

const baseUrl = 'http://124.220.59.240:3667';

class Request {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(baseUrl + url, {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: T = await response.json();
    return data;
  }

  async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('请求错误' + response.statusText);
    }
    const data: T = await response.json();
    return data;
  }

  async put<T>(url: string, params: any): Promise<T> {
    const response = await fetch(baseUrl + url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: T = await response.json();
    return data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(baseUrl + url, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data: T = await response.json();
    return data;
  }
}

export default new Request();
