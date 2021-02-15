import React, { useState } from "react";
import styled from "styled-components/native";
import MembershipChoiceCard from "../atoms/MembershipChoiceCard";

export default function SubscribeChoicesContainer() {
  const [isSelectedEvent, setIsSelectedEvent] = useState({
    annual: true,
    monthly: false,
  });

  console.log("ANNUAL :", isSelectedEvent.annual);
  console.log("MONTHLY :", isSelectedEvent.monthly);

  return (
    <Container>
      <MembershipChoiceCard
        isSelected={isSelectedEvent.annual}
        onPress={() => {
          setIsSelectedEvent({
            annual: !setIsSelectedEvent.annual,
          });
        }}
        title="annuel"
        subTitle="paiement"
        priceYear="80€/an"
        isPriceMember={true}
        priceMonth="6,67€/mois"
      />
      <MembershipChoiceCard
        isSelected={isSelectedEvent.monthly}
        onPress={() => {
          setIsSelectedEvent({
            monthly: !setIsSelectedEvent.monthly,
          });
        }}
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
