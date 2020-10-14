import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadUserData } from '../../actions/getUser'
import DisplayProfileUser from '../components/Display/User/DisplayProfileUser'

const UserPage = ({ user, loadUserData }) => {
    useEffect(() => {
        loadUserData();
    })
    return (
        user.loading && user.user == null ?
            <p>...Loading</p> :
            <DisplayProfileUser name={user.user.results[0].name.first} email={user.user.results[0].email} />
    )
}

const mapStateToProps = state => ({
    user: state.user
})

UserPage.propTypes = {
    user: PropTypes.object.isRequired,
    loadUserData: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { loadUserData })(UserPage) 
