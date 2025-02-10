import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <SectionTitle
                            SubTitle="How It Works"
                            Title="Unlock Verified Contacts in 3 Easy Steps"
                        ></SectionTitle>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape">
                            <Image src="/assets/images/shape/workProcessShape1_1.png" alt="img" width={1416} height={225} />
                        </div>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="step">STEP - 01</div>
                                    <div className="title">Sign in & Verify</div>
                                    <div className="text">Sign in with LinkedIn and verify your contact to access the platform.</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 child2 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="step">STEP - 02</div>
                                    <div className="title">Share & Earn Credits</div>
                                    <div className="text">Add some of your LinkedIn connections with verified numbers to earn credits.</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="step">STEP - 03</div>
                                    <div className="title">Find & Unlock Contacts</div>
                                    <div className="text">Use credits to unlock contact details—or buy credits if you need more.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;
