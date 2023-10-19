import React, { Fragment, useState } from 'react';
import '../Css/ApplyLeave.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ApplyLeaveView = (props) => {

    console.log(props);
    
    const[LeaveTypeId, setLeaveTypeId]=useState("")
    const[StartDate, setStartDate]=useState("")
    const[EndDate, setEndDate]=useState("")

    return (
        <Fragment>
            <h1>Apply for a Leave Request</h1>
            <Container>
                <Row>
                    <Col>
                        <input type="number" className="form-control" placeholder="Enter LeaveTypeID" value={LeaveTypeId} onChange={(x)=> setLeaveTypeId(x.target.value)}/>
                    </Col>
                    <Col>
                        <input type="date" className="form-control" placeholder="Enter Start Date" value={StartDate} onChange={(x)=> setStartDate(x.target.value)}/>
                    </Col>
                    <Col>
                        <input type="date" className="form-control" placeholder="Enter End Date" value={EndDate} onChange={(x)=> setEndDate(x.target.value)}/>
                    </Col>
                    <br></br>
                    <Col>
                        <button className='btn btn-primary' onClick={()=>handleAdd()}>Submit Leave Request</button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ApplyLeaveView;