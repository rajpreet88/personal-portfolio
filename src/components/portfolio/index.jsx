import React from "react";
import Section from "../shared/Section";
import Filters from "./filters";

import "./style.scss";

// const projectsData = [
//     {
//         id: 1,
//         name: "Healthy Food Restaurant",
//         tags: ["web-app", "mobile-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-7.jpg"),
//         },
//     },
//     {
//         id: 2,
//         name: "Anna & Daniel",
//         tags: ["web-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-2.jpg"),
//         },
//     },
//     {
//         id: 3,
//         name: "Web Design Landing Page",
//         tags: ["web-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-8.jpg"),
//         },
//     },
//     {
//         id: 4,
//         name: "Business Analytics Web App",
//         tags: ["web-app", "mobile-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-1.jpg"),
//         },
//     },
//     {
//         id: 5,
//         name: "Limitless",
//         tags: ["web-app", "web-page"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-6.jpg"),
//         },
//     },
//     {
//         id: 6,
//         name: "Dashboard",
//         tags: ["product", "web-app", "mobile-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-4.jpg"),
//         },
//     },
//     {
//         id: 7,
//         name: "Digital Creatiev Agency",
//         tags: ["web-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-3.jpg"),
//         },
//     },
//     {
//         id: 8,
//         name: "Virtual Reality Experience",
//         tags: ["web-app", "mobile-app", "web-page"],
//         media: {
//             thumbnail: require("../../images/portfolio/thumb-5.jpg"),
//         },
//     },
//     {
//         id: 9,
//         name: "Decentralized Crowd Funding",
//         tags: ["web-app", "web-page"],
//         media: {
//             thumbnail: require("../../images/portfolio/web3_1.jpg"),
//         },
//     },
//     {
//         id: 10,
//         name: "Decentralised Gamify",
//         tags: ["product", "web-app", "mobile-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/web3_2.jpg"),
//         },
//     },
//     {
//         id: 11,
//         name: "NFT Dashboard",
//         tags: ["web-app", "web-page"],
//         media: {
//             thumbnail: require("../../images/portfolio/web3_3.jpg"),
//         },
//     },
//     {
//         id: 12,
//         name: "NFT Marketplace DashBoard",
//         tags: ["web-page"],
//         media: {
//             thumbnail: require("../../images/portfolio/web3_4.jpg"),
//         },
//     },
//     {
//         id: 13,
//         name: "Crypto Finance Exchange",
//         tags: ["product", "web-app", "mobile-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/web3_5.jpg"),
//         },
//     },
//     {
//         id: 14,
//         name: "NFT-Bloc Marketplace",
//         tags: ["product", "web-app", "web-page", "mobile-app"],
//         media: {
//             thumbnail: require("../../images/portfolio/web3_6.jpg"),
//         },
//     },
//     {
//         id: 15,
//         name: "Metaverse Dashboard",
//         tags: ["web-page"],
//         media: {
//             thumbnail: require("../../images/portfolio/web3_7.jpg"),
//         },
//     },
//     {
//         id: 16,
//         name: "Metaverse App",
//         tags: ["product", "web-app", "web-page"],
//         media: {
//             thumbnail: require("../../images/portfolio/web3_8.jpg"),
//         },
//     },
// ];

const Portfolio = () => {
    return (
        <Section
            id="portfolio"
            title="Check my Portfolio"
            background="light"
        >
            <div className="portfolio">
                <Filters />
            </div>
        </Section>
    );
};

export default Portfolio;
