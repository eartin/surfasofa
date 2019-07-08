import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({session, entities: { users }}) => ({
    currentUser: users[session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);