import axios from 'axios';

const API_URL = 'https://demo-01-0cbh.onrender.com/api/posts';

export interface Post {
  id: number;
  content: string;
  created_at: string;
  updated_at?: string;
}

class PostService {
  async getAllPosts(): Promise<Post[]> {
    const response = await axios.get<Post[]>(API_URL);
    return response.data;
  }

  async getPostById(id: number): Promise<Post> {
    const response = await axios.get<Post>(`${API_URL}/${id}`);
    return response.data;
  }

  async createPost(content: string): Promise<Post> {
    const response = await axios.post<Post>(API_URL, { content });
    return response.data;
  }

  async updatePost(id: number, content: string): Promise<Post> {
    const response = await axios.patch<Post>(`${API_URL}/${id}`, { content });
    return response.data;
  }

  async deletePost(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  }
}

export default new PostService();


postgresql://simplesocialnetwork_user:Dyg3mlbGeJXraVHhTlRz6ZIehZKeBjuL@dpg-cs8q82lsvqrc739l9180-a/simplesocialnetwork