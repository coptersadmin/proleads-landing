import About4 from "@/app/Components/About/About4";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="About Us"
      ></BreadCumb>
      <About4
        img1="https://niotech-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fabout%2FaboutThumb1_1.png&w=640&q=75"
        img2="/assets/images/about/aboutThumb1_2.png"
        subtitle="About ProLeads"
        title="The Smarter Way to Access Verified Contacts"
        content="ProLeads is a powerful lead-generation platform designed to help businesses acquire **verified contact details** directly from LinkedIn profile URLs. Our advanced system ensures that every lead is **authentic, accurate, and high-intent**, helping businesses connect with the right decision-makers effortlessly. Unlike traditional databases, ProLeads focuses on real-time verification, ensuring **you only pay for valid contacts.**"
        FeatureList={[
          "Verified Contacts: Get authentic contact details sourced from LinkedIn profiles.",
          "Cost-Effective: More affordable than competitors without compromising quality.",
          "Refund Guarantee: If a contact isn't verified, you get your money back—no risks involved.",
        ]}
        btnname="Learn More"
        btnurl="https://dashboard.buildyourcontactlist.com"
      ></About4>
    </div>
  );
};

export default page;
