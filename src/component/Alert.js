import React from 'react'
// import PropTypes from 'prop-types'
function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
    return (
        
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">{/*props.alert && means if the value is null then it will not execute further */}
                <strong>{capitalize(props.alert.type)}</strong>{props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        
    )
}

export default Alert