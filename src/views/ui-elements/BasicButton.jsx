import React from 'react';

// react-bootstrap
import { Row, Col, Button, OverlayTrigger, Tooltip, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

// project import
import ModuleNotification from '../../components/Widgets/Statistic/Notification';
import Card from '../../components/Card/MainCard';

// ==============================|| BUTTON ||============================== //

const BasicButton = () => {
  const buttonVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  const buttonOptions = [
    { variant: 'primary', icon: 'feather icon-thumbs-up mx-2' },
    { variant: 'secondary', icon: 'feather icon-camera mx-2' },
    { variant: 'success', icon: 'feather icon-check-circle mx-2' },
    { variant: 'danger', icon: 'feather icon-slash mx-2' },
    { variant: 'warning', icon: 'feather icon-alert-triangle mx-2' },
    { variant: 'info', icon: 'feather icon-info mx-2' }
  ];

  const basicButtons = buttonVariants.map((variant, idx) => (
    <OverlayTrigger key={idx} overlay={<Tooltip>{variant}</Tooltip>}>
      <Button variant={variant} className="text-capitalize mx-2">
        {variant}
      </Button>
    </OverlayTrigger>
  ));



  const iconButtons = buttonOptions.map((button, idx) => (
    <Button key={idx} variant={button.variant} className="text-capitalize mx-2">
      <i className={button.icon} />
      {button.variant}
    </Button>
  ));


  const onlyIconButtons = buttonOptions.map((button, idx) => (
    <Button className="btn-icon" key={idx} variant={button.variant}>
      <i className={button.icon} />
    </Button>
  ));



  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://react-bootstrap.github.io/components/buttons/"
          />
        </Col>
      </Row>
      <Row className="btn-page">
        <Col>
          <Card title="Default">
            {basicButtons}
            <OverlayTrigger overlay={<Tooltip>link</Tooltip>}>
              <Button variant="link">Link</Button>
            </OverlayTrigger>
          </Card>

        </Col>
      </Row>
      <Row className="btn-page">


        <Col md={6}>
          <Card title="Button With Icon">{iconButtons}</Card>
        </Col>

        <Col md={6}>
          <Card title="Only Icon">{onlyIconButtons}</Card>
        </Col>

      </Row>
    </React.Fragment>
  );
};

export default BasicButton;
