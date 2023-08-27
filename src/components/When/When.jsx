import React from 'react';
import { Button } from 'react-bootstrap';
import Loader from '../../coman/loder';

// todo - add prop types
export const When = (props) => {
    const { isLoading,  errMsg, retry, children } = props;
    if (isLoading) {
        return <Loader/>
    }

    if (errMsg) {
        return (
            <div>
                <div className='errMsg'>
                    {errMsg}.
                    {retry ? 'Please click following button to retry' : ''}
                </div>
                {retry ? <Button
                    disabled={isLoading}
                    onClick={retry}
                >
                    Fetch Data
                </Button> : ''
                }
        </div>
        )
    }
    return children;
}