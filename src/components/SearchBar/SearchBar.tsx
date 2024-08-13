"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from "./searchBar.module.css";

export default function SearchBar({setErrorMessage, fetchPosts}: any) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

	useEffect(() => {
    const token = localStorage.getItem('accesstoken');
    setAccessToken(token ? token : null);
  }, [accessToken]);

	interface Post {
		topic: string;
		content: string;
		community: string | null;
	}

	const [searchcommunity, setSearchcommunity] = useState<any>()
  const [newPost, setNewPost] = useState<Post>({
		topic: '',
    content: '',
    community: '',
	});

	// handle Create new Post
	const handleClick = async () => {
		try {
			if( (!newPost.topic && !newPost.content && !newPost.community)){
				throw new Error(`community, topic and content can't be empty`)
			}
			if (!accessToken) throw new Error(`Please sign in to create a new post.`)
			if (accessToken) {
				const response = await fetch('http://localhost:3001/post', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${accessToken}`,
					},
					body: JSON.stringify(newPost),
					
				});
		
				await fetchPosts();

				if (!response.ok) {
					const errorMessage = response.status === 401 ? 'Unauthorized access' : 'Failed to post data';
					throw new Error(errorMessage);
				}
				const data = await response.json();
			}
		} catch (err: any) {
			setErrorMessage(err.message || 'An unexpected error occurred.')
		}
	};

	const communityList = [
		'History',
		'Food',
		'Pats',
		'Health',
		'Fashion',
		'Exercise',
		'Others',
	]

	return (
		<div className='d-flex align-items-center justify-content-end p-1 gap-1 mb-4'>
			<div className={`input-group align-items-center ${styles.searchInput}`}>
				<Image 
					alt='search'
					src={'./icon/search-md.svg'} 
					width={24}
          height={24}
				 />
				<input
					type="text"
					className={`form-control ${styles.formControl} ${styles.inputFocus}`}
					placeholder="Search"
					aria-label="Search"
				/>
			</div>
			<div className="dropdown ms-3">
				<button
					className={`btn btn-white dropdown-toggle ${styles.buttonSearch}`}
					type="button"
					id="dropdownMenuButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					{ !searchcommunity ? 'Community' : searchcommunity }
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{ 
						communityList.length <= 0 ? null : communityList.map((name, index) => {
							return (
								<li key={index}>
									<a
										className="dropdown-item"
										onClick={() => setSearchcommunity(name)}
										href="#"
									>{name}</a>
								</li>
							)
						})
					}
				</ul>
			</div>
			<button 
				className={`btn bg-success p-1 ${styles.create}`}
				data-bs-toggle="modal" data-bs-target="#exampleModal"
			>Create&nbsp;+
			</button>
			{/* <!-- Modal --> */}
			<div className="modal fade align-content-center" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog d-flex ">
					<div className="modal-content">
						<div className="modal-header border-0">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Create Post</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>

						<div className="modal-body d-flex gap-2 flex-column">
							<div className="dropdown">
								<button
									className={`btn btn-white dropdown-toggle btn-success f-post`}
									type="button"
									id="dropdownMenuButton"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									{
										!newPost.community ? 'Choose a community' : newPost.community
									}
								</button>

								{communityList.length > 0 && (
									<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										{communityList.map((name, index) => (
											<li key={index}>
												<a 
													className="dropdown-item" 
													onClick={() => setNewPost({ ...newPost, 'community': name })}
													href="#"
												>
													{name}
												</a>
											</li>
										))}
									</ul>
								)}
							</div>

							<input
								type="text"
								className='inputControl p-2'
								placeholder="Title"
								value={newPost.topic}
								onChange={(e) => setNewPost({ ...newPost, 'topic': e.target.value })}
							/>

							<textarea
								className='textareaControl p-2'
								placeholder="What’s on your mind..."
								value={newPost.content}
								onChange={(e) => setNewPost({ ...newPost, 'content': e.target.value })}
							></textarea>

						</div>



						<div className="modal-footer border-0">
							<button type="button" className="btn btn-success ml-2" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-success-dark" data-bs-dismiss="modal" onClick={handleClick}>Post</button>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Modal --> */}


		</div>
	);
}
