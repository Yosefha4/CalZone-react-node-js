import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";
import './Pricing.css';


function PricingBox() {
  return (
      <div className="PricingBox">
    <PricingTable  highlightColor="#1976D2">
      <PricingSlot buttonText="Order Now" title="$6/month" priceText="Start small">
        <PricingDetail> Watch Free Content </PricingDetail>
        <PricingDetail> Hundreds of Episodes from our Library</PricingDetail>
        <PricingDetail> Hundres of Short Form Pieces</PricingDetail>
      </PricingSlot>
      <PricingSlot buttonText="Order Now" title="$12/month" priceText="Grow">
        <PricingDetail> Everything in FREE + </PricingDetail>
        <PricingDetail> Ad Free Viewing Experience </PricingDetail>
        <PricingDetail> Watch Latest Episodes from shows on TV</PricingDetail>
        <PricingDetail>
          {" "}
          Our entire library of Episodes, Specials, Documentaries and Movies
        </PricingDetail>
        <PricingDetail> </PricingDetail>
      </PricingSlot>
      <PricingSlot buttonText="Order Now" title="$24/month" priceText="Enterprise">
        <PricingDetail> Everything in Prime + </PricingDetail>
        <PricingDetail> Watch Premium Content from Vault </PricingDetail>
        <PricingDetail>
          {" "}
          Watch Exclusive Behind the Scenes + other Bonus Content
        </PricingDetail>
      </PricingSlot>
    </PricingTable>
    </div>
  );
}

export default PricingBox