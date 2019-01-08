import { Component } from "react";
import React from "react";
import styled from "styled-components";
import { SectionLight, SectionBlue } from "../assets/styles";
import Footer from "../sections/Footer";
import { Title1, Title2, Title3, Title4, Text } from "../assets/primitives";
import { Container, Row, Col } from "react-grid-system";

export default class Imprint extends Component {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <ContainerExt>
          <Row>
            <Col xs={12}>
              <Title1>Legal Disclosure</Title1>
              <Text>
                Information in accordance with Section 5 TMG 
                <br />
                <br />
                Roman Safronov
                <br />
                Rheinsberger Str. 76/77
                <br />
                10115 Berlin
                <br />
                <br />
                Vertreten durch:
                <br />
                Roman Safronov
                <br />
                <br />
                Contact Information:
                <br />
                <br />
                Telephone: +49152-04267406
                <br />
                E-Mail: info@brive.io
              </Text>
              <Text>
                Disclaimer: <br />
                <br />
                Accountability for content <br />
                <br />
                The contents of our pages have been created with the utmost
                care. However, we cannot guarantee the contents' accuracy,
                completeness or topicality. According to statutory provisions,
                we are furthermore responsible for our own content on these web
                pages. In this matter, please note that we are not obliged to
                monitor the transmitted or saved information of third parties,
                or investigate circumstances pointing to illegal activity. Our
                obligations to remove or block the use of information under
                generally applicable laws remain unaffected by this as per §§ 8
                to 10 of the Telemedia Act (TMG).
              </Text>
              <Text>
                Accountability for links
                <br />
                <br />
                Responsibility for the content of external links (to web pages
                of third parties) lies solely with the operators of the linked
                pages. No violations were evident to us at the time of linking.
                Should any legal infringement become known to us, we will remove
                the respective link immediately.
              </Text>
              <Text>
                Copyright
                <br />
                <br />
                Our web pages and their contents are subject to German copyright
                law. Unless expressly permitted by law, every form of utilizing,
                reproducing or processing works subject to copyright protection
                on our web pages requires the prior consent of the respective
                owner of the rights. Individual reproductions of a work are only
                allowed for private use. The materials from these pages are
                copyrighted and any unauthorized use may violate copyright
                laws. 
              </Text>
              <Text>
                Privacy Policy
                <br />
                <br />
                Personal data (usually referred to just as "data" below) will
                only be processed by us to the extent necessary and for the
                purpose of providing a functional and user-friendly website,
                including its contents, and the services offered there.
              </Text>
              <Text>Website Impressum von impressum-generator.de</Text>
            </Col>
          </Row>
        </ContainerExt>
        <Footer />
      </React.Fragment>
    );
  }
}

const ContainerExt = styled(Container)`
  padding: 3rem 0;
`;
