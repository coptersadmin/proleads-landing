"use client";
import { useState } from "react";
import PricingCard from "../Card/PricingCard";

const Pricing1 = () => {
  const [isActive, setIsActive] = useState("basic");

  return (
    <section className="pricing-section section-padding pt-0 fix">
      <div className="container">
        <div className="section-title text-p-center mxw-685 mx-auto">
          <div className="subtitle">Our Pricing</div>
          <h2 className="title center">Pay Only for the Leads You Need!</h2>
        </div>
        <div className="pricing-wrapper style1">
          <div className="tab-content">
            <div className="row gy-5 text-p-center">
              {/* <PricingCard
                name="Basic Package"
                price="$0.50"
                monthly="Per Lead"
                content="Ideal for individuals and small businesses looking for high-quality leads at an affordable rate."
                FeatureList={[
                  "Access to verified leads",
                  "Basic lead details (Name, Email)",
                  "Limited contact attempts",
                  "No commitment, pay as you go",
                  "7-day replacement guarantee",
                ]}
                btnname="Buy Leads"
                btnurl="/pricing"
              ></PricingCard>

              <PricingCard
                name="Standard Package"
                price="$0.80"
                monthly="Per Lead"
                content="Perfect for growing businesses that need richer lead data and higher conversion potential."
                FeatureList={[
                  "Includes all Basic Package features",
                  "Additional lead insights (Company, Position)",
                  "Higher contact attempt limit",
                  "AI-verified contact accuracy",
                  "Priority support",
                ]}
                btnname="Buy Leads"
                btnurl="/pricing"
              ></PricingCard> */}

              <PricingCard
                name="Premium Package"
                price="₹ 2.20"
                monthly="Per Lead"
                content="Designed for individuals, startups and enterprises that need premium data accuracy and powerful outreach capabilities."
                FeatureList={[
                  "Direct phone numbers & LinkedIn profiles",
                  "Unlimited contact attempts",
                  "Real-time lead validation",
                  "Custom lead filtering",
                ]}
                btnname="Buy Now"
                btnurl="https://dashboard.proleads-landing.vercel.app"
              ></PricingCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
