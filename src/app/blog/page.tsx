// src/app/blog/page.tsx

import Link from 'next/link';
import React from 'react';
// import { fetchPosts } from '../../lib/fetchPosts'; // Ensure this path is correct

interface Post {
  slug: string;
  title: string;
}

const posts: any = [
	{
		id: 1,
		slug: '1',
		title: '1'
	}
]

const BlogListingPage: React.FC = async () => {
  // const posts: Post[] = await fetchPosts();
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogListingPage;
