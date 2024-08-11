import Image from 'next/image';
import React from 'react';
import styles from "./comment.module.css";
import Link from 'next/link';

export default function Comment() {
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
				<div className='mb-3 mt-3'>Wittawat98 <span className='text-muted'>12h ago</span></div>
				<div>
					<p>Lorem ipsum dolor sit amet consectetur. Purus cursus vel est a pretium quam imperdiet. Tristique auctor sed semper nibh odio iaculis sed aliquet. Amet mollis eget morbi feugiat mi risus eu. Tortor sed sagittis convallis auctor.</p>
				</div>
			</div>
		</div>
	);
}
