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
              <Title1>Impressum</Title1>
              <Text>
                Angaben gemäß § 5 TMG
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
                Kontakt:
                <br />
                <br />
                Telefon: +49152-04267406
                <br />
                E-Mail: info@brive.io
              </Text>
              <Text>
                Haftungsausschluss: <br />
                <br />
                Haftung für Inhalte <br />
                <br />
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
              </Text>
              <Text>
                Haftung für Links
                <br />
                <br />
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </Text>
              <Text>
                Urheberrecht
                <br />
                <br />
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
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
