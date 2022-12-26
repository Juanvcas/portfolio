import s from '@styles/common/fullImage.module.css';

export const FullImage = (props) => {
	return (
		<div className={s.main} onClick={() => props.setState(false)}>
			<span className={s.close} onClick={() => props.setState(false)}>
				X
			</span>
			<div className={`content-limit ${s['image-cont']}`}>
				<label onClick={(e) => e.stopPropagation()}>
					<input type={'checkbox'} hidden />
					<img
						src={props.image}
						alt={props.name}
						className={s.main_image}
						onClick={(e) => e.stopPropagation()}
					/>
				</label>
			</div>
		</div>
	);
};
