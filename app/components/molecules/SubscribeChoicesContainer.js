import React from "react";
import styled from "styled-components/native";
import MembershipChoiceCard from "../atoms/MembershipChoiceCard";

export default function SubscribeChoicesContainer() {
  return (
    <Container>
      <MembershipChoiceCard
        isSelected={true}
        title="annuel"
        subTitle="paiement"
        priceYear="80€/an"
        isPriceMember={true}
        priceMonth="6,67€/mois"
      />
      <MembershipChoiceCard
        isSelected={false}
        title="mensuel"
        subTitle="paiement"
        priceYear="120€/an"
        isPriceMember={false}
        priceMonth="10€/mois"
      />
    </Container>
  );
}

// Styles
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
