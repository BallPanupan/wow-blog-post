import Image from 'next/image';
import React from 'react';
import styles from "./searchBar.module.css";

export default function SearchBar() {
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
					Community
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<li><a className="dropdown-item" href="#">History</a></li>
					<li><a className="dropdown-item" href="#">Food</a></li>
					<li><a className="dropdown-item" href="#">Pats</a></li>
					<li><a className="dropdown-item" href="#">Health</a></li>
					<li><a className="dropdown-item" href="#">Fashion</a></li>
					<li><a className="dropdown-item" href="#">Exercise</a></li>
					<li><a className="dropdown-item" href="#">Others</a></li>
				</ul>
			</div>
			<button className={`btn bg-success p-1 ${styles.create}`}>Create&nbsp;+</button>
		</div>
	);
}
