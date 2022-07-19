import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectUserLoading } from '../../redux/user/user.selectors';
import RootPage from './root-page.component';
import WithSpinner from '../../components/atoms/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => selectUserLoading(state)
});

const RootPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(RootPage);

export default RootPageContainer;
