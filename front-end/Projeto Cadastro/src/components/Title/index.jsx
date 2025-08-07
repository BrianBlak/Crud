import { Title } from "./styles";
import PropTypes from 'prop-types'

function DefaultTittle ({...props}) {
    return(
        <Title {...props} ></Title>
    )    
}
DefaultTittle.PropTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultTittle