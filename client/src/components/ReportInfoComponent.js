import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardText, Breadcrumb, BreadcrumbItem, Fade } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderReports({report}) {
    return(
        <div className="col-sm-4 m-1">
                <Card style={{ padding: 10}}>
                    <CardImg top src={baseUrl + report.image} alt={report.name} />
                </Card>
        </div>
    );
}

function RenderReportDescription({report}) {
    return(
        <div className="col m-1">
                <Card>
                    <CardBody style={{paddingTop: 4, paddingBottom: 4, paddingLeft: 10, paddingRight: 10}}>
                        <CardText>{report.description}</CardText>
                    </CardBody>
                </Card>
        </div>
    );
}


function ReportInfo(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
        if (props.report) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/historical">Historical Reports</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.report.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.report.name}</h2>
                        <hr />
                        </div>
            </div>
                    <div className="row">
                        <RenderReports report={props.report} />
                        <RenderReportDescription report={props.report} />
                    </div>
                </div>
            );
        } 
    return <div />;
}


export default ReportInfo;