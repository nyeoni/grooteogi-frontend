import { SortType } from 'types/enum';
import client from './client';

export const post = {
  deletePost: async (postId: number) => {
    const url = `/post/${postId}`;
    return await client.delete(url, { status: 200 });
  },
  createPost: async (post: any) => {
    const url = `/post`;
    console.log(post);
    return await client.post(url, post);
  },
  modifyPost: async (post: any) => {
    const url = `/post/${post.postId}`;
    return await client.put(url, post);
  },
  detailPost: async (postId: number) => {
    const url = `/post/${postId}`;
    return await client.get(url);
  },
  updatePostImg: async (formData: FormData) => {
    const url = `/s3/image`;
    return await client.post(url, formData);
  },
  detailSchedules: async (postId: number) => {
    const url = `post/${postId}/schedules`;
    return await client.get(url);
  },
  detailReviews: async (postId: number) => {
    const url = `post/${postId}/reviews`;
    return await client.get(url);
  },
  // detailLikes :async (postId: number) => {
  //     const url = `post/${postId}/like`;
  //     const res = await getData(url);
  //     return res;
  // },
  detailHashtags: async (postId: number) => {
    const url = `post/${postId}/hashtags`;
    return await client.get(url);
  },
  search: async (params: { keyword: string; sort: string; region: string; pageParam: number }) => {
    const { keyword, pageParam, sort, region } = params;
    const sortValue = SortType[sort as keyof typeof SortType];
    const url = `/post/search?keyword=${keyword}&page=${pageParam}&filter=${sortValue}&region=${region}`;
    return await client.get(url);
  },
};

export default post;
