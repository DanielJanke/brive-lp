import React, { Component } from "react";
import { withSiteData, scrollTo } from "react-static";
import { Container, Row, Col } from "react-grid-system";
import styled from "styled-components";

import logoImg from "../assets/img/brive_logo.png";
import openQuestion from "../assets/img/open_question.svg";

import { Title1, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import { Section, SectionBlue, SectionLight } from "../assets/styles";

import PrimaryButton from "../view/button";
import Box from "../view/box";
import ContactBox from "../view/contactBox";
import HeaderSection from "../sections/headerSection";
import ProblemSection from "../sections/problemSection";
import SolutionOverviewSection from "../sections/solutionOverviewSection";
import FaqSection from "../sections/faqSection";
import ContactSection from "../sections/contactSection";
import AdvantagesSection from "../sections/advantagesSection";
import SupportSection from "../sections/supportSection";
import AnalyseSection from "../sections/1_analyseSection";
import RatingSection from "../sections/2_ratingSection";
import RewardSection from "../sections/3_rewardSection";
import ScrollerComponent from "../components/ScrollerComponent";
import ImprovementSection from "../sections/4_improvementSection";
import Footer from "../sections/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <HeaderSection />

        <ProblemSection />

        <SolutionOverviewSection />
        <AnalyseSection />
        <RatingSection />
        <RewardSection />
        {/*<ScrollerComponent />*/}
        {/* <ImprovementSection /> */}
        <AdvantagesSection />
        <SupportSection />
        {/*<FaqSection />*/}
        <ContactSection />
        <Footer />
      </React.Fragment>
    );
  }
}
