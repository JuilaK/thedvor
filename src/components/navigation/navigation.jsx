import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import withSizes from '../../helpers/withSizes';
import NavigationLinks from '../navigationLinks';
import './navigation.scss';

const Navigation = ({sizes: {isDesktop}}) => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(!isOpen);  
    
    const closeBtn = <button className="close" onClick={openModal}></button>;

    return (
        <div className="dv-nav">
            <div className="dv-nav__wrapper">
                { isDesktop && <NavigationLinks /> }
                {
                    !isDesktop && 
                        <Button 
                            type="button" 
                            color="link"
                            className="dv-nav__icon-menu"
                            onClick={openModal}>
                        </Button>
                }
                <Modal 
                    isOpen={isOpen} 
                    toggle={openModal}
                    modalClassName="dv-nav__modal">
                    <ModalHeader close={closeBtn}/>   
                    <ModalBody>
                        <NavigationLinks vertical openModal={openModal}/>
                    </ModalBody>
                </Modal>

                <div>
                    <a 
                        href="https://www.instagram.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="dv-nav__icon dv-nav__icon_inst">
                    </a>
                    <a 
                        href="https://vk.com/club205810264" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="dv-nav__icon dv-nav__icon_vk">

                    </a>
                </div>
            </div>
        </div>
    )
}

export default withSizes(Navigation);

Navigation.propTypes = {
    sizes: PropTypes.object
};