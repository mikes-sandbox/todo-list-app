import { useLocation, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../../redux/user/user.selectors';

const RequireAuth = ({ currentUser, children }) => {
    let location = useLocation();
    if (currentUser)
        return children;
    return <Navigate to='/login' state={{ from: location }} replace />;
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(RequireAuth);
