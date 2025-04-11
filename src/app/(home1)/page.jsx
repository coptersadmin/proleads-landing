import React from "react";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Brand1 from "../Components/Brand/Brand1";
import About1 from "../Components/About/About1";
import HowWork from "../Components/HowWork/HowWork";
import Choose1 from "../Components/Choose/Choose1";
import Feature1 from "../Components/Feature/Feature1";
import Counter1 from "../Components/Counter/Counter1";
import Faq1 from "../Components/Faq/Faq1";
import Testimonial from "../Components/Testimonial/Testimonial";
import Feature2 from "../Components/Feature/Feature2";
import Pricing1 from "../Components/Pricing/Pricing1";
import Cta1 from "../Components/Cta/Cta1";
import Blog1 from "../Components/Blog/Blog1";
import HeroBanner4 from "../Components/HeroBanner/HeroBanner4";
import Feature4 from "../Components/Feature/Feature4";

const page = () => {
  return (
    <div>
      <HeroBanner4
        bgimg="/assets/images/hero/hero-bg.jpg"
        subtitle="Your Leads Partner"
        title="Find & Connect with Decision-Makers <span>Effortlessly</span>"
        content="Sign in with LinkedIn, verify your identity, and add your phone number to access a network of real, verified contacts."
        btnname="Get Started Now"
        btnurl="https://dashboard.buildyourcontactlist.com"
        btnname2="Download App"
        btnurl2="https://dashboard.buildyourcontactlist.com"
        img1="/assets/images/hero/01.png"
        img2="/assets/images/hero/mobile.png"
      ></HeroBanner4>

      <HowWork></HowWork>
      <Feature4
        img="https://niotech-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fabout%2F01.png&w=1080&q=75"
        subtitle="Our Features"
           title="We Provide the Best Quality"
        content="ProLeads is a powerful platform designed to help businesses acquire verified contacts directly from LinkedIn profile URLs. Our cutting-edge technology ensures accuracy, cost-efficiency, and high conversion rates, making lead generation seamless and reliable."
        FeatureList={[
          "<b>Verified Contacts:</b> <span> Get high-quality, validated leads from LinkedIn profiles.</span>",
          "<b>Cost-Effective Solution:</b> <span> More affordable than competitors, ensuring better ROI.</span>",
          "<b>Money-Back Guarantee:</b> <span> If a contact isn’t verified, you get a refund.</span>",
        ]}
        btnname="Learn More"
        btnurl="https://dashboard.buildyourcontactlist.com"
      />

      <Feature1></Feature1>
      <Counter1></Counter1>
      <Brand1></Brand1>
      <Faq1></Faq1>
      {/* <Testimonial></Testimonial>   */}
      <Pricing1></Pricing1>
      {/* <Cta1
                subtitle="Our App"
                title="Download our app and start your free trail to get started today!"
                content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised"
                btnurl1="https://play.google.com/store"
                btnurl2="https://www.apple.com/store"
                img="/assets/images/cta/ctaThumb1_1.png"
            ></Cta1>      */}
      {/* <Blog1></Blog1>                          */}
    </div>
  );
};

export default page;
