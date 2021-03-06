import React, { useState } from 'react'
import { CButton, CModal, CModalHeader, CModalBody, CModalFooter } from '@coreui/react'
const HomePage = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    return (
        <>
            <CButton
                onClick={toggle}
                className="mr-1"
            >Launch demo modal</CButton>
            <CModal
                show={modal}
                onClose={toggle}
            >
                <CModalHeader closeButton>Modal title</CModalHeader>
                <CModalBody>
                    {process.env.REACT_APP_ENV}
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary">Do Something</CButton>{' '}
                    <CButton
                        color="secondary"
                        onClick={toggle}
                    >Cancel</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default HomePage
