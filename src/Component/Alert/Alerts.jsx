import React, { useState, useEffect } from 'react'

function Alerts({ success, message }) {

    const [hide, setHide] = useState(true)

    useEffect(() => {
        let clear;
        if (success != undefined) { 
             console.log("run")
            clear = setTimeout(() => setHide(false), 3000) }
        return () => clearTimeout(clear)
    }, [success])

    return (
        <div>
            {
         (success!=null) ?   success ?
                    hide && <div className="alert alert-success" role="alert">
                        {message}

                    </div>

                    : hide && <div className="alert alert-danger" role="alert">
                        {message}

                    </div> :null
            }

        </div>
    )
}

export default Alerts