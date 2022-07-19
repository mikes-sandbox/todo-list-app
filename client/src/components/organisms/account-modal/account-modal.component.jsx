import React from 'react';
import './account-modal.styles.scss';

const AccountModal = () => {
    return (
        <div className="modal-overlay">

            <div className="modal-content">
                <button
                    onClick={() => console.log('clicked')}>
                    Sign In
                </button>
            </div>

        </div>
    );
};

export default AccountModal;