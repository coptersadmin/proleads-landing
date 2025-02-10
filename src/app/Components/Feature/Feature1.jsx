import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
  return (
    <section className="wcu-section section-padding fix">
      <div className="wcu-container-wrapper style1">
        <div className="container">
          <div
            className="section-title text-center mxw-685 mx-auto wow fadeInUp"
            data-wow-delay=".2s"
          >
            <SectionTitle
              SubTitle="Why use our Platform"
              Title="Our Platform is great for individuals, startups and enterprises"
            ></SectionTitle>
          </div>
          <div className="wcu-wrapper style1">
            <div className="row gy-5 d-flex justify-content-center">
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_1.svg"
                    title="Seamless Lead Discovery"
                    content="Find and connect with verified contacts effortlessly, ensuring high conversion rates."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_2.svg"
                    title="Automated Outreach"
                    content="Leverage AI-driven insights to optimize your campaigns and increase engagement."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_3.svg"
                    title="Smart Contact Management"
                    content="Organize, track, and manage your leads in one place with real-time updates."
                  ></FeatureCard>
                </div>
              </div>
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                  <div
                    className="main-thumb wow bounceInUp"
                    data-wow-delay=".6s"
                  >
                    <Image
                    className="image-banner"
                       src={"https://niotech-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fwcu%2FwcuThumb1_1.png&w=384&q=75"}
                      alt="img"
                      width={376}
                      height={342}
                    />
                  </div>
                  <div className="shape">
                    <Image
                      src="/assets/images/shape/wcuThumbShape1_1.png"
                      alt="img"
                      width={376}
                      height={377}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_4.svg"
                    title="Real-Time Communication"
                    content="Engage with prospects via live chat, email, and calls—all in one dashboard."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_5.svg"
                    title="Verified & Authentic Contacts"
                    content="Access a database of pre-verified professionals, ensuring accurate and up-to-date contact details."
                  ></FeatureCard>
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_6.svg"
                    title="More Affordable Than Competitors"
                    content="Save up to 70% on lead generation costs compared to other platforms while getting high-quality, verified contacts."
                  ></FeatureCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
