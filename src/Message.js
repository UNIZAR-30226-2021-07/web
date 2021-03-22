import {Row} from 'react-bootstrap';

function Mensaje ({userid, text}) {
    return(
        <Row>{userid}: {text}</Row>
    )
}

export default Mensaje;