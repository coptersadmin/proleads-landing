"use client";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";

const Faq1 = () => {
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);

    const handleItemClick = (index) => {
        setOpenItemIndex(index === openItemIndex ? -1 : index);
    };

    useEffect(() => {
        if (firstItemOpen) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
        }
    }, [firstItemOpen]);

    const faqData = [
        {
            title: "How is our content verified?",
            desc: "We verify content through multiple steps. When a prospect signs up using LinkedIn, we validate their identity using phone number and OTP.",
        },
        {
            title: "How is content verified after a prospect adds it?",
            desc: "Once a prospect adds content, our automated system verifies its authenticity to ensure it's accurate and up-to-date.",
        },
        {
            title: "What if the content is invalid?",
            desc: "If you find any content that is incorrect or outdated, report it to us. We will review and refund credits for invalid entries.",
        },
        {
            title: "Why is ProLeads more affordable?",
            desc: "Our competitors charge significantly higher prices for lead generation. ProLeads provides the same high-quality leads at a fraction of the cost.",
        },
        {
            title: "Do I own the leads I get from ProLeads?",
            desc: "Yes! Once you access a lead, it is yours to use indefinitely. There are no restrictions on how you engage with your leads.",
        },
        {
            title: "How often is the database updated?",
            desc: "Our lead database is updated daily using AI-driven validation and user-reported corrections to ensure high accuracy.",
        },
    ];

    return (
        <section className="faq-section section-padding fix">
            <div className="container">
                <div className="faq-wrapper style1">
                    <div className="row gy-5 gy-xl-0 gx-60 d-flex align-items-start">
                        <div className="col-xl-12">
                            <div className="faq-content style1">
                                <div className="section-title">
                                    <SectionTitle SubTitle="FAQs" Title="Frequently Asked Questions" />
                                    <p className="section-desc">Get answers to common questions about ProLeads and how our platform works.</p>
                                </div>
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                        {faqData.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`accordion-item mb-3 wow fadeInUp ${index === openItemIndex ? "active" : ""}`}
                                                data-wow-delay=".3s"
                                            >
                                                <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#faq${index}`}
                                                        aria-expanded={index === openItemIndex}
                                                        aria-controls={`faq${index}`}
                                                    >
                                                        {item.title}
                                                    </button>
                                                </h5>
                                                <div
                                                    id={`faq${index}`}
                                                    className={`accordion-collapse collapse ${index === openItemIndex ? "show" : ""}`}
                                                    data-bs-parent="#accordion"
                                                >
                                                    <div className="accordion-body">{item.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq1;
