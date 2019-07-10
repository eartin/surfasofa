import { connect } from 'react-redux';
import hostingsIndex from './hosting_index';
import { fetchHostings } from '../../actions/hosting_actions';
import { allHostings } from '../../reducers/selectors';

const mapStateToProps = state => ({
    hostings: allHostings(state.entities)
});

const mapDispatchToProps = dispatch => ({
    fetchHostings: () => dispatch(fetchHostings())
});

export default connect(mapStateToProps, mapDispatchToProps)(hostingsIndex);