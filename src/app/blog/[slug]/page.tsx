// src/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation'; // Use for handling 404
// import { fetchPostBySlug } from '../../../lib/fetchPosts'; // Your data fetching logic

interface BlogPostProps {
	params: {
		slug: string;
	};
}

const post: any = {
	slug: '1',
	title: '1',
	content: 'content 1',
}

const BlogPostPage: React.FC<BlogPostProps> = async ({ params }) => {
	// const post = await fetchPostBySlug(params.slug);

	if (!post) {
		return notFound(); // Or return a custom 404 component
	}

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</div>
	);
};

export default BlogPostPage;
