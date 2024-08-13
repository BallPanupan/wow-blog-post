import React from 'react';
import Link from 'next/link';
import styles from "./menuLeft.module.css";
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';

const MenuLeft: React.FC = () => {

	const pathname = usePathname(); // Returns the current path
	const searchParams = useSearchParams(); // Returns the current query parameters

	const currentUrl = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;

	const btnActive = {
		'home': currentUrl === '/' ? styles.active : '',
		'ourBlog': currentUrl === '/ourBlog' ? styles.active : '',
	}

	return (
		<div className="offcanvas-body">
			<ul className="navbar-nav justify-content-end flex-grow-1 pe-3 pt-5">
				<li className={`nav-item ${styles.desktop}`}>
					<Link className={`nav-link d-flex gap-2 ${btnActive.home}`} aria-current="page" href="/">
						<Image
							src={'/icon/home-line.svg'}
							alt='Home'
							width={24}
							height={24}
							className={styles.svgIconHome}
						/>
						Home
					</Link>
				</li>
				<li className={`nav-item ${styles.desktop}`}>
					<Link className={`nav-link d-flex gap-2 ${btnActive.ourBlog}`} href="/ourBlog">
						<Image
							src={'/icon/edit-05.svg'}
							alt='Home'
							width={24}
							height={24}
							className={styles.svgIconEdit}
						/>
						Our Blog
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MenuLeft;
