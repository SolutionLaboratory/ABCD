import { CaretDown, CaretUp } from './icons';
import styles from '/styles/Hero.module.css';
import useCollapse from 'react-collapsed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Collapsible(props) {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	const config = {
		defaultExpanded: props.defaultExpanded && false,
		collapsedHeight: props.collapsedHeight || 0
	};
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
	return (
		<div className={styles.collapsible} data-aos="zoom-in-up" data-aos-duration="3000">
			<div className={styles.header} {...getToggleProps()}>
				<div className={styles.title}>{props.title}</div>
				<div>{isExpanded ? <CaretUp /> : <CaretDown />}</div>
			</div>
			<div {...getCollapseProps()}>
				<div className={styles.content}>{props.children}</div>
			</div>
		</div>
	);
}
