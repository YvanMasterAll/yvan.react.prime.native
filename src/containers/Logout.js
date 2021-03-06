import {connect} from 'react-redux';
import {actions} from '../redux/configureStore';
import {Logout} from '../views/Logout';

const mapStateToProps = (state) => {
    return {
        user: state.currentUser.user,
        loggedIn: state.currentUser.loggedIn
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: (...args) => dispatch(actions.currentUser.logout(...args))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout)