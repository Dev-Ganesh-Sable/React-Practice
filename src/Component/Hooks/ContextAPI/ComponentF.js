import React, { use } from 'react'
import { UserContext, ChannalContext } from '../../../App'

function ComponentF() {
    return (
        // step 03
        <div>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannalContext.Consumer>
                            {
                                Channal => {
                                    return <div>User Context Value  {user}, ChannalContext value {Channal} </div>
                                }
                            }
                        </ChannalContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF