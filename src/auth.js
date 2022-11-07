import React from 'react';
import { connect } from 'react-redux';
// Imports: Redux Actions 
import { login } from '../src/store/actions/authActions';

function Counter({ loggedIn, reduxLogin }) {
    console.log(loggedIn);
    return (
        <div>
            {loggedIn}
            <button               
                onClick={loggedIn === false ? () => reduxLogin(true) : () => reduxLogin(false)}

            >Mudar o estado</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        //   counter: state.counterReducer.counter,
        loggedIn: state.authReducer.loggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        reduxLogin: (result) => dispatch(login(result)),

    };
};
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);