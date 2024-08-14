import Image from 'next/image';
import React from 'react';
import styles from "./comment.module.css";

export default function Comment(data: any) {
	const comment = data.data;
	return (
		<div className={`${styles.commentContainer} d-flex gap-3 mb-3`}>
			<div>
				<Image 
					alt='image profile' 
					src={'/images/profile.png'}
					width={50}
					height={50}
				/>
			</div>
			<div>
				<div className='mb-3 mt-3'>{comment?.user?.username || ''} <span className='text-muted'>{ comment.createdAt || ''}</span></div>
				<div>
					<p>{comment?.comment || ''}</p>
				</div>
			</div>
		</div>
	);
}
