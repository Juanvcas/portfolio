import { SlCheck, SlClose } from 'react-icons/sl';
import s from '@styles/common/alert.module.css';

const AlertMessage = (props) => {
	return (
		<aside className={`${s.main} ${!props.state && s.error}`}>
			<p>{props.message}</p>
			{props.state ? <SlCheck /> : <SlClose />}
		</aside>
	);
};

export default AlertMessage;
