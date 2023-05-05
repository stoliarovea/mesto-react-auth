import closeIcon from '../images/close-icon.svg';
import successIcon from '../images/success-icon.png';
import failureIcon from '../images/failure-icon.png';

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__info-tool-tip-container">
                <button className="popup__close-button" type="button" onClick={props.onClose}>
                    <img className="popup__close-icon" src={closeIcon} alt="Иконка." />
                </button>
                <img className="popup__info-tool-tip-image" src={successIcon} />
                <p className="popup__info-tool-tip-sign">Вы успешно зарегистрировались!</p>
            </div>
        </div>
    );
}

export default InfoTooltip;