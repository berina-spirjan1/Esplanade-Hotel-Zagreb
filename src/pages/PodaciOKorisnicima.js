import React from "react";
import {Container, Row, Table} from "react-bootstrap";
function PodaciOKorisnicima(){
    return(
        <Container>
            <Row>
                <Table striped bordered hover size={"sm"}>
                    <thread>
                        <tr>
                            <th>Id</th>
                            <th>Ime i prezime</th>
                            <th>Broj telefona</th>
                            <th>Državljanstvo</th>
                            <th colSpan={"2"}>Akcije</th>
                        </tr>
                    </thread>
                    <tbody>

                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}
export default PodaciOKorisnicima;