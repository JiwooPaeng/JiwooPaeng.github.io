import { getAllPosts } from '@/service/posts'
import FilterablePosts from '@/components/FilterablePosts'

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))]
  // category만 담겨있는 배열을 생성

  return (
  <FilterablePosts posts={posts} categories={categories} />
  )
}