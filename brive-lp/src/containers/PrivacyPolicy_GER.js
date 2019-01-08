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
              <Title1>Datenschutzerklärung</Title1>
              <Text>
                Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt)
                werden von uns nur im Rahmen der Erforderlichkeit sowie zum
                Zwecke der Bereitstellung eines funktionsfähigen und
                nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte
                und der dort angebotenen Leistungen, verarbeitet. Gemäß Art. 4
                Ziffer 1. der Verordnung (EU) 2016/679, also der
                Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt),
                gilt als „Verarbeitung“ jeder mit oder ohne Hilfe
                automatisierter Verfahren ausgeführter Vorgang oder jede solche
                Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie
                das Erheben, das Erfassen, die Organisation, das Ordnen, die
                Speicherung, die Anpassung oder Veränderung, das Auslesen, das
                Abfragen, die Verwendung, die Offenlegung durch Übermittlung,
                Verbreitung oder eine andere Form der Bereitstellung, den
                Abgleich oder die Verknüpfung, die Einschränkung, das Löschen
                oder die Vernichtung.
              </Text>
              <Text>
                Mit der nachfolgenden Datenschutzerklärung informieren wir Sie
                insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage
                der Verarbeitung personenbezogener Daten, soweit wir entweder
                allein oder gemeinsam mit anderen über die Zwecke und Mittel der
                Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend
                über die von uns zu Optimierungszwecken sowie zur Steigerung der
                Nutzungsqualität eingesetzten Fremdkomponenten, soweit hierdurch
                Dritte Daten in wiederum eigener Verantwortung verarbeiten.
                Unsere Datenschutzerklärung ist wie folgt gegliedert:
              </Text>
              <Text>
                <ul>
                  <li>I. Informationen über uns als Verantwortliche</li>
                  <li>II. Rechte der Nutzer und Betroffenen</li>
                  <li>III. Informationen zur Datenverarbeitung</li>
                </ul>
              </Text>
              <Title3>I. Informationen über uns als Verantwortliche</Title3>
              <Text>
                Verantwortlicher Anbieter dieses Internetauftritts im
                datenschutzrechtlichen Sinne ist:
              </Text>
              <Text>
                Roman Safronov
                <br />
                Rheinsberger Str. 76/77
                <br />
                10115 Berlin
                <br />
                Deutschland
                <br />
                Telefon: +4915204267406
                <br />
                <br />
                E-Mail: info@brive.io
              </Text>
              <Title3>II. Rechte der Nutzer und Betroffenen</Title3>
              <Text>
                Mit Blick auf die nachfolgend noch näher beschriebene
                Datenverarbeitung haben die Nutzer und Betroffenen das Recht
                <ul>
                  <li>
                    auf Bestätigung, ob sie betreffende Daten verarbeitet
                    werden, auf Auskunft über die verarbeiteten Daten, auf
                    weitere Informationen über die Datenverarbeitung sowie auf
                    Kopien der Daten (vgl. auch Art. 15 DSGVO);
                  </li>
                  <li>
                    auf Berichtigung oder Vervollständigung unrichtiger bzw.
                    unvollständiger Daten (vgl. auch Art. 16 DSGVO);
                  </li>
                  <li>
                    auf unverzügliche Löschung der sie betreffenden Daten (vgl.
                    auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere
                    Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist,
                    auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18
                    DSGVO;
                  </li>
                  <li>
                    auf Erhalt der sie betreffenden und von ihnen
                    bereitgestellten Daten und auf Übermittlung dieser Daten an
                    andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);
                  </li>
                  <li>
                    auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie
                    der Ansicht sind, dass die sie betreffenden Daten durch den
                    Anbieter unter Verstoß gegen datenschutzrechtliche
                    Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).
                  </li>
                </ul>
              </Text>
              <Text>
                Darüber hinaus ist der Anbieter dazu verpflichtet, alle
                Empfänger, denen gegenüber Daten durch den Anbieter offengelegt
                worden sind, über jedwede Berichtigung oder Löschung von Daten
                oder die Einschränkung der Verarbeitung, die aufgrund der
                Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese
                Verpflichtung besteht jedoch nicht, soweit diese Mitteilung
                unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden
                ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft
                über diese Empfänger.
              </Text>
              <Text>
                Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO
                das Recht auf Widerspruch gegen die künftige Verarbeitung der
                sie betreffenden Daten, sofern die Daten durch den Anbieter nach
                Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden.
                Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum
                Zwecke der Direktwerbung statthaft.
              </Text>
              <Title3>III. Informationen zur Datenverarbeitung</Title3>
              <Text>
                Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten
                werden gelöscht oder gesperrt, sobald der Zweck der Speicherung
                entfällt, der Löschung der Daten keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen und nachfolgend keine
                anderslautenden Angaben zu einzelnen Verarbeitungsverfahren
                gemacht werden.
              </Text>
              <Title4>Serverdaten</Title4>
              <Text>
                Aus technischen Gründen, insbesondere zur Gewährleistung eines
                sicheren und stabilen Internetauftritts, werden Daten durch
                Ihren Internet-Browser an uns bzw. an unseren Webspace-Provider
                übermittelt. Mit diesen sog. Server-Logfiles werden u.a. Typ und
                Version Ihres Internetbrowsers, das Betriebssystem, die Website,
                von der aus Sie auf unseren Internetauftritt gewechselt haben
                (Referrer URL), die Website(s) unseres Internetauftritts, die
                Sie besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie
                die IP-Adresse des Internetanschlusses, von dem aus die Nutzung
                unseres Internetauftritts erfolgt, erhoben.
              </Text>
              <Text>
                Diese so erhobenen Daten werden vorrübergehend gespeichert, dies
                jedoch nicht gemeinsam mit anderen Daten von Ihnen. Diese
                Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1
                lit. f) DSGVO. Unser berechtigtes Interesse liegt in der
                Verbesserung, Stabilität, Funktionalität und Sicherheit unseres
                Internetauftritts. Die Daten werden spätestens nach sieben Tage
                wieder gelöscht, soweit keine weitere Aufbewahrung zu
                Beweiszwecken erforderlich ist. Andernfalls sind die Daten bis
                zur endgültigen Klärung eines Vorfalls ganz oder teilweise von
                der Löschung ausgenommen.
              </Text>
              <Title4>Cookies</Title4>
              <Text>a) Sitzungs-Cookies/Session-Cookies</Text>
              <Text>
                Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies
                sind kleine Textdateien oder andere Speichertechnologien, die
                durch den von Ihnen eingesetzten Internet-Browser auf Ihrem
                Endgerät ablegt und gespeichert werden. Durch diese Cookies
                werden im individuellen Umfang bestimmte Informationen von
                Ihnen, wie beispielsweise Ihre Browser- oder Standortdaten oder
                Ihre IP-Adresse, verarbeitet. Durch diese Verarbeitung wird
                unser Internetauftritt benutzerfreundlicher, effektiver und
                sicherer, da die Verarbeitung bspw. die Wiedergabe unseres
                Internetauftritts in unterschiedlichen Sprachen oder das Angebot
                einer Warenkorbfunktion ermöglicht. Rechtsgrundlage dieser
                Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern diese
                Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung
                verarbeitet werden. Falls die Verarbeitung nicht der
                Vertragsanbahnung oder Vertragsabwicklung dient, liegt unser
                berechtigtes Interesse in der Verbesserung der Funktionalität
                unseres Internetauftritts. Rechtsgrundlage ist in dann Art. 6
                Abs. 1 lit. f) DSGVO. Mit Schließen Ihres Internet-Browsers
                werden diese Session-Cookies gelöscht.
              </Text>
              <Text>b) Drittanbieter-Cookies</Text>
              <Text>
                Gegebenenfalls werden mit unserem Internetauftritt auch Cookies
                von Partnerunternehmen, mit denen wir zum Zwecke der Werbung,
                der Analyse oder der Funktionalitäten unseres Internetauftritts
                zusammenarbeiten, verwendet. Die Einzelheiten hierzu,
                insbesondere zu den Zwecken und den Rechtsgrundlagen der
                Verarbeitung solcher Drittanbieter-Cookies, entnehmen Sie bitte
                den nachfolgenden Informationen.
              </Text>
              <Text>c) Beseitigungsmöglichkeit</Text>
              <Text>
                Sie können die Installation der Cookies durch eine Einstellung
                Ihres Internet-Browsers verhindern oder einschränken. Ebenfalls
                können Sie bereits gespeicherte Cookies jederzeit löschen. Die
                hierfür erforderlichen Schritte und Maßnahmen hängen jedoch von
                Ihrem konkret genutzten Internet-Browser ab. Bei Fragen benutzen
                Sie daher bitte die Hilfefunktion oder Dokumentation Ihres
                Internet-Browsers oder wenden sich an dessen Hersteller bzw.
                Support. Bei sog. Flash-Cookies kann die Verarbeitung allerdings
                nicht über die Einstellungen des Browsers unterbunden werden.
                Stattdessen müssen Sie insoweit die Einstellung Ihres
                Flash-Players ändern. Auch die hierfür erforderlichen Schritte
                und Maßnahmen hängen von Ihrem konkret genutzten Flash-Player
                ab. Bei Fragen benutzen Sie daher bitte ebenso die Hilfefunktion
                oder Dokumentation Ihres Flash-Players oder wenden sich an den
                Hersteller bzw. Benutzer-Support. Sollten Sie die Installation
                der Cookies verhindern oder einschränken, kann dies allerdings
                dazu führen, dass nicht sämtliche Funktionen unseres
                Internetauftritts vollumfänglich nutzbar sind. Kontaktanfragen /
                Kontaktmöglichkeit Sofern Sie per Kontaktformular oder E-Mail
                mit uns in Kontakt treten, werden die dabei von Ihnen
                angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die
                Angabe der Daten ist zur Bearbeitung und Beantwortung Ihre
                Anfrage erforderlich - ohne deren Bereitstellung können wir Ihre
                Anfrage nicht oder allenfalls eingeschränkt beantworten.
                Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b)
                DSGVO. Ihre Daten werden gelöscht, sofern Ihre Anfrage
                abschließend beantwortet worden ist und der Löschung keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw.
                bei einer sich etwaig anschließenden Vertragsabwicklung.
              </Text>
              <Text>Google Analytics</Text>
              <Text>
                In unserem Internetauftritt setzen wir Google Analytics ein.
                Hierbei handelt es sich um einen Webanalysedienst der Google
                LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA,
                nachfolgend nur „Google“ genannt.
                <br />
                Durch die Zertifizierung nach dem EU-US-Datenschutzschild
                („EU-US Privacy Shield“)
              </Text>
              <Text>
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
              </Text>
              <Text>
                garantiert Google, dass die Datenschutzvorgaben der EU auch bei
                der Verarbeitung von Daten in den USA eingehalten werden. Der
                Dienst Google Analytics dient zur Analyse des Nutzungsverhaltens
                unseres Internetauftritts. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. f) DSGVO. Unser berechtigtes Interesse liegt in der
                Analyse, Optimierung und dem wirtschaftlichen Betrieb unseres
                Internetauftritts. Nutzungs- und nutzerbezogene Informationen,
                wie bspw. IP-Adresse, Ort, Zeit oder Häufigkeit des Besuchs
                unseres Internetauftritts, werden dabei an einen Server von
                Google in den USA übertragen und dort gespeichert. Allerdings
                nutzen wir Google Analytics mit der sog.
                Anonymisierungsfunktion. Durch diese Funktion kürzt Google die
                IP-Adresse schon innerhalb der EU bzw. des EWR. Die so erhobenen
                Daten werden wiederum von Google genutzt, um uns eine Auswertung
                über den Besuch unseres Internetauftritts sowie über die
                dortigen Nutzungsaktivitäten zur Verfügung zu stellen. Auch
                können diese Daten genutzt werden, um weitere Dienstleistungen
                zu erbringen, die mit der Nutzung unseres Internetauftritts und
                der Nutzung des Internets zusammenhängen. Google gibt an, Ihre
                IP-Adresse nicht mit anderen Daten zu verbinden. Zudem hält
                Google unter
              </Text>
              <Text>
                https://www.google.com/intl/de/policies/privacy/partners
              </Text>
              <Text>
                weitere datenschutzrechtliche Informationen für Sie bereit, so
                bspw. auch zu den Möglichkeiten, die Datennutzung zu
                unterbinden. Zudem bietet Google unter
              </Text>

              <Text>https://tools.google.com/dlpage/gaoptout?hl=de</Text>
              <Text>
                ein sog. Deaktivierungs-Add-on nebst weiteren Informationen
                hierzu an. Dieses Add-on lässt sich mit den gängigen
                Internet-Browsern installieren und bietet Ihnen weitergehende
                Kontrollmöglichkeit über die Daten, die Google bei Aufruf
                unseres Internetauftritts erfasst. Dabei teilt das Add-on dem
                JavaScript (ga.js) von Google Analytics mit, dass Informationen
                zum Besuch unseres Internetauftritts nicht an Google Analytics
                übermittelt werden sollen. Dies verhindert aber nicht, dass
                Informationen an uns oder an andere Webanalysedienste
                übermittelt werden. Ob und welche weiteren Webanalysedienste von
                uns eingesetzt werden, erfahren Sie natürlich ebenfalls in
                dieser Datenschutzerklärung.
              </Text>
              <Text>Google-Maps</Text>
              <Text>
                In unserem Internetauftritt setzen wir Google Maps zur
                Darstellung unseres Standorts sowie zur Erstellung einer
                Anfahrtsbeschreibung ein. Es handelt sich hierbei um einen
                Dienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View,
                CA 94043 USA, nachfolgend nur „Google“ genannt. Durch die
                Zertifizierung nach dem EU-US-Datenschutzschild („EU-US Privacy
                Shield“)
              </Text>
              <Text>
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
              </Text>
              <Text>
                garantiert Google, dass die Datenschutzvorgaben der EU auch bei
                der Verarbeitung von Daten in den USA eingehalten werden. Um die
                Darstellung bestimmter Schriften in unserem Internetauftritt zu
                ermöglichen, wird bei Aufruf unseres Internetauftritts eine
                Verbindung zu dem Google-Server in den USA aufgebaut. Sofern Sie
                die in unseren Internetauftritt eingebundene Komponente Google
                Maps aufrufen, speichert Google über Ihren Internet-Browser ein
                Cookie auf Ihrem Endgerät. Um unseren Standort anzuzeigen und
                eine Anfahrtsbeschreibung zu erstellen, werden Ihre
                Nutzereinstellungen und -daten verarbeitet. Hierbei können wir
                nicht ausschließen, dass Google Server in den USA einsetzt.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser
                berechtigtes Interesse liegt in der Optimierung der
                Funktionalität unseres Internetauftritts. Durch die so
                hergestellte Verbindung zu Google kann Google ermitteln, von
                welcher Website Ihre Anfrage gesendet worden ist und an welche
                IP-Adresse die Anfahrtsbeschreibung zu übermitteln ist. Sofern
                Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie
                die Möglichkeit, die Installation der Cookies durch die
                entsprechenden Einstellungen in Ihrem Internet-Browser zu
                verhindern. Einzelheiten hierzu finden Sie vorstehend unter dem
                Punkt „Cookies“. Zudem erfolgt die Nutzung von Google Maps sowie
                der über Google Maps erlangten Informationen nach den
                Google-Nutzungsbedingungen
                https://policies.google.com/terms?gl=DE&hl=de und den
                Geschäftsbedingungen für Google Maps
                https://www.google.com/intl/de_de/help/terms_maps.html.
              </Text>
              <Text>
                Überdies bietet Google unter
                <br />
                https://adssettings.google.com/authenticated
                <br />
                https://policies.google.com/privacy
                <br />
                weitergehende Informationen an.
                <br />
              </Text>
              <Text>
                Muster-Datenschutzerklärung der Anwaltskanzlei Weiß & Partner
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
