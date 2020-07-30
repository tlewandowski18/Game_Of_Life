import React from 'react'
import { connect } from 'react-redux'
import { randomize } from '../../actions'

function RandomButton(props) {
    
    const clickButton = () => {
        
        props.randomize()
    }
    
    return (
        <div className="control" onClick={clickButton}>Random</div>
    )
}

const mapStateToProps = state => {
    return {
        current_gen: state.generations.current_gen,
    }
}

export default connect(mapStateToProps, { randomize })(RandomButton)