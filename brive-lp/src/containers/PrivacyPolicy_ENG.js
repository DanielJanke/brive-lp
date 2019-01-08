import { Component } from "react";
import React from "react";
import styled from "styled-components";
import { SectionLight, SectionBlue } from "../assets/styles";
import Footer from "../sections/Footer";
import { Title1, Title2, Title3, Title4, Text } from "../assets/primitives";
import { Container, Row, Col } from "react-grid-system";

export default class Datenschutz extends Component {
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
              <Title1>Privacy Policy</Title1>
              <Text>
                Personal data (usually referred to just as "data" below) will
                only be processed by us to the extent necessary and for the
                purpose of providing a functional and user-friendly website,
                including its contents, and the services offered there. Per Art.
                4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data
                Protection Regulation (hereinafter referred to as the "GDPR"),
                "processing" refers to any operation or set of operations such
                as collection, recording, organization, structuring, storage,
                adaptation, alteration, retrieval, consultation, use, disclosure
                by transmission, dissemination, or otherwise making available,
                alignment, or combination, restriction, erasure, or destruction
                performed on personal data, whether by automated means or not.
                The following privacy policy is intended to inform you in
                particular about the type, scope, purpose, duration, and legal
                basis for the processing of such data either under our own
                control or in conjunction with others. We also inform you below
                about the third-party components we use to optimize our website
                and improve the user experience which may result in said third
                parties also processing data they collect and control. ​ Our
                privacy policy is structured as follows:
              </Text>
              <Text>
                <ul>
                  <li>I. Information about us as controllers of your data</li>
                  <li>II. The rights of users and data subjects</li>
                  <li>III. Information about the data processing</li>
                </ul>
              </Text>
              <Title3>
                I. Information about us as controllers of your data
              </Title3>
              <Text>
                The party responsible for this website (the "controller") for
                purposes of data protection law is:
              </Text>
              <Text>
                Roman Safronov
                <br />
                Rheinsberger Str. 76/77
                <br />
                10115 Berlin
                <br />
                Germany
                <br />
                Telephone: +4915204267406
                <br />
                <br />
                E-Email: info@brive.io
              </Text>
              <Title3>II. The rights of users and data subjects</Title3>
              <Text>
                With regard to the data processing to be described in more
                detail below, users and data subjects have the right
                <ul>
                  <li>
                    to confirmation of whether data concerning them is being
                    processed, information about the data being processed,
                    further information about the nature of the data processing,
                    and copies of the data (cf. also Art. 15 GDPR);
                  </li>
                  <li>
                    to correct or complete incorrect or incomplete data (cf.
                    also Art. 16 GDPR);
                  </li>
                  <li>
                    to the immediate deletion of data concerning them (cf. also
                    Art. 17 DSGVO), or, alternatively, if further processing is
                    necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict
                    said processing per Art. 18 GDPR;
                  </li>
                  <li>
                    to receive copies of the data concerning them and/or
                    provided by them and to have the same transmitted to other
                    providers/controllers (cf. also Art. 20 GDPR);
                  </li>
                  <li>
                    to file complaints with the supervisory authority if they
                    believe that data concerning them is being processed by the
                    controller in breach of data protection provisions (see also
                    Art. 77 GDPR).
                  </li>
                </ul>
              </Text>
              <Text>
                In addition, the controller is obliged to inform all recipients
                to whom it discloses data of any such corrections, deletions, or
                restrictions placed on processing the same per Art. 16, 17 Para.
                1, 18 GDPR. However, this obligation does not apply if such
                notification is impossible or involves a disproportionate
                effort. Nevertheless, users have a right to information about
                these recipients.
              </Text>
              <Text>
                Likewise, under Art. 21 GDPR, users and data subjects have the
                right to object to the controller's future processing of their
                data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an
                objection to data processing for the purpose of direct
                advertising is permissible.
              </Text>
              <Title3>III. Information about the data processing</Title3>
              <Text>
                Your data processed when using our website will be deleted or
                blocked as soon as the purpose for its storage ceases to apply,
                provided the deletion of the same is not in breach of any
                statutory storage obligations or unless otherwise stipulated
                below.
              </Text>
              <Title4>Server data</Title4>
              <Text>
                For technical reasons, the following data sent by your internet
                browser to us or to our server provider will be collected,
                especially to ensure a secure and stable website: These server
                log files record the type and version of your browser, operating
                system, the website from which you came (referrer URL), the
                webpages on our site visited, the date and time of your visit,
                as well as the IP address from which you visited our site.
              </Text>
              <Text>
                The data thus collected will be temporarily stored, but not in
                association with any other of your data. The basis for this
                storage is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest
                lies in the improvement, stability, functionality, and security
                of our website. The data will be deleted within no more than
                seven days, unless continued storage is required for evidentiary
                purposes. In which case, all or part of the data will be
                excluded from deletion until the investigation of the relevant
                incident is finally resolved.
              </Text>
              <Title4>Cookies</Title4>
              <Text>a) Session cookies</Text>
              <Text>
                We use cookies on our website. Cookies are small text files or
                other storage technologies stored on your computer by your
                browser. These cookies process certain specific information
                about you, such as your browser, location data, or IP address.  
                This processing makes our website more user-friendly, efficient,
                and secure, allowing us, for example, to display our website in
                different languages or to offer a shopping cart function. The
                legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR,
                insofar as these cookies are used to collect data to initiate or
                process contractual relationships. If the processing does not
                serve to initiate or process a contract, our legitimate interest
                lies in improving the functionality of our website. The legal
                basis is then Art. 6 Para. 1 lit. f) GDPR. When you close your
                browser, these session cookies are deleted.
              </Text>
              <Text>b) Third-party cookies</Text>
              <Text>
                If necessary, our website may also use cookies from companies
                with whom we cooperate for the purpose of advertising,
                analyzing, or improving the features of our website. Please
                refer to the following information for details, in particular
                for the legal basis and purpose of such third-party collection
                and processing of data collected through cookies.
              </Text>
              <Text>c) Disabling cookies</Text>
              <Text>
                You can refuse the use of cookies by changing the settings on
                your browser. Likewise, you can use the browser to delete
                cookies that have already been stored. However, the steps and
                measures required vary, depending on the browser you use. If you
                have any questions, please use the help function or consult the
                documentation for your browser or contact its maker for support.
                Browser settings cannot prevent so-called flash cookies from
                being set. Instead, you will need to change the setting of your
                Flash player. The steps and measures required for this also
                depend on the Flash player you are using. If you have any
                questions, please use the help function or consult the
                documentation for your Flash player or contact its maker for
                support. If you prevent or restrict the installation of cookies,
                not all of the functions on our site may be fully usable.
              </Text>
              <Text>Google Analytics</Text>
              <Text>
                We use Google Analytics on our website. This is a web analytics
                service provided by Google Inc., 1600 Amphitheatre Parkway,
                Mountain View, CA 94043 (hereinafter: Google).
                <br />
                Through certification according to the EU-US Privacy Shield
              </Text>
              <Text>
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
              </Text>
              <Text>
                Google guarantees that it will follow the EU's data protection
                regulations when processing data in the United States. The
                Google Analytics service is used to analyze how our website is
                used. The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our
                legitimate interest lies in the analysis, optimization, and
                economic operation of our site. Usage and user-related
                information, such as IP address, place, time, or frequency of
                your visits to our website will be transmitted to a Google
                server in the United States and stored there. However, we use
                Google Analytics with the so-called anonymization function,
                whereby Google truncates the IP address within the EU or the EEA
                before it is transmitted to the US. The data collected in this
                way is in turn used by Google to provide us with an evaluation
                of visits to our website and what visitors do once there. This
                data can also be used to provide other services related to the
                use of our website and of the internet in general. Google states
                that it will not connect your IP address to other data. In
                addition, Google provides further information with regard to its
                data protection practices at
              </Text>
              <Text>
                https://www.google.com/intl/de/policies/privacy/partners
              </Text>
              <Text>
                including options you can exercise to prevent such use of your
                data. In addition, Google offers an opt-out add-on at
              </Text>

              <Text>https://tools.google.com/dlpage/gaoptout?hl=en</Text>
              <Text>
                in addition with further information. This add-on can be
                installed on the most popular browsers and offers you further
                control over the data that Google collects when you visit our
                website. The add-on informs Google Analytics' JavaScript (ga.js)
                that no information about the website visit should be
                transmitted to Google Analytics. However, this does not prevent
                information from being transmitted to us or to other web
                analytics services we may use as detailed herein.
              </Text>
              <Text>Google-Maps</Text>
              <Text>
                Our website uses Google Maps to display our location and to
                provide directions. This is a service provided by Google Inc.,
                1600 Amphitheatre Parkway, Mountain View, CA 94043 (hereinafter:
                Google). Through certification according to the EU-US Privacy
                Shield
              </Text>
              <Text>
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
              </Text>
              <Text>
                Google guarantees that it will follow the EU's data protection
                regulations when processing data in the United States. To enable
                the display of certain fonts on our website, a connection to the
                Google server in the USA is established whenever our website is
                accessed. If you access the Google Maps components integrated
                into our website, Google will store a cookie on your device via
                your browser. Your user settings and data are processed to
                display our location and create a route description. We cannot
                prevent Google from using servers in the USA. The legal basis is
                Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in
                optimizing the functionality of our website. By connecting to
                Google in this way, Google can determine from which website your
                request has been sent and to which IP address the directions are
                transmitted. If you do not agree to this processing, you have
                the option of preventing the installation of cookies by making
                the appropriate settings in your browser. Further details can be
                found in the section about cookies above. In addition, the use
                of Google Maps and the information obtained via Google Maps is
                governed by the Google Terms of
                Use https://policies.google.com/terms?gl=DE&hl=en and the Terms
                and Conditions for Google
                Mapshttps://www.google.com/intl/de_de/help/terms_maps.html.
              </Text>
              <Text>
                Google also offers further information at
                <br />
                https://adssettings.google.com/authenticated
                <br />
                https://policies.google.com/privacy
                <br />
              </Text>
              <Text>
                Model Data Protection Statement for Anwaltskanzlei Weiß &
                Partner
              </Text>
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
