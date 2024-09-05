// Imports for Hero
import openAIicon from "../public/compatible-icons/openai-icon.png";
import mongoDBIcon from "../public/compatible-icons/mongo-icon.png";
import cohereIcon from "../public/compatible-icons/cohere-icon.png";
import anthropicIcon from "../public/compatible-icons/anthropic-icon.png";

// Imports for cards
import integrateImg from "../public/feature-images/integrate-img.svg";
import secureImg from "../public/feature-images/secure-img.svg";
import searchImg from "../public/feature-images/search-img.svg";
import pointImg from "../public/feature-images/point-img.svg";
import codeImg from "../public/feature-images/code-img.png";
import integrateIcon from "../public/feature-icons/integrate-icon.svg";
import secureIcon from "../public/feature-icons/secure-icon.svg";
import searchIcon from "../public/feature-icons/search-icon.svg";
import codeIcon from "../public/feature-icons/code-icon.svg";
import pointIcon from "../public/feature-icons/point&click-icon.svg";

// Imports for Trusted and featured
import wiseLogo from "../public/trusted-logos/wise.png";
import mongoDBLogo from "../public/trusted-logos/mongoDB.png";
import moneyHubLogo from "../public/trusted-logos/moneyhub.svg";
import altanaLogo from "../public/trusted-logos/altana.png";
import geckoLogo from "../public/trusted-logos/gecko.png";
import checkrLogo from "../public/trusted-logos/checkr.png";
import latchelLogo from "../public/trusted-logos/latchel.png";
import lattiveLogo from "../public/trusted-logos/lattice.svg";
import ifrsLogo from "../public/trusted-logos/ifrs.png";

import techCrunchLogo from "../public/featured-logos/techcrunch.png";
import siliconAngleLogo from "../public/featured-logos/siliconangle.png";
import ipeLogo from "../public/featured-logos/ipe.png";

// Imports for Secure Section
import permissionsImg from "../public/secure-section/permissions.svg";
import auditImg from "../public/secure-section/audit-capabilities.svg";
import redactionImg from "../public/secure-section/auto-redaction.svg";
import infrastructureIcon from "../public/secure-section/infrastructure.svg";
import policiesIcon from "../public/secure-section/policies.svg";
import cloudIcon from "../public/secure-section/cloud.svg";

// Imports for Code Section
import performantIcon from "../public/code-section/performant.svg";
import interOperableIcon from "../public/code-section/interoperable.svg";
import multimodelIcon from "../public/code-section/multiplemodels.svg";

// Navbar
export const navItems = ["Security", "Use cases", "Pricing", "Docs", "Careers"];

export const subMenuItems = {
  products: ["Enterprise LLM Gateway", "Developer RAG Program"],
  useCases: [
    "Secure Chat",
    "Security Questionnaires",
    "API Gateway",
    "Customer Genie",
  ],
  about: ["Blog", "Team", "Guides"],
};

// Hero
export const compatibleItems = [
  openAIicon,
  anthropicIcon,
  cohereIcon,
  mongoDBIcon,
];

// Cards
export const featureData = [
  {
    title: "Integrate",
    img: integrateImg,
    icon: integrateIcon,
    content: "Pull data from any source",
  },
  {
    title: "Secure",
    img: secureImg,
    icon: secureIcon,
    content: "Inherit and enforce access controls",
  },
  {
    title: "Search",
    img: searchImg,
    icon: searchIcon,
    content: "Find anything across your data",
  },
  {
    title: "Code",
    img: codeImg,
    icon: codeIcon,
    content: "Flexible and secure API",
  },
  {
    title: "Point & Click",
    img: pointImg,
    icon: pointIcon,
    content: "Create AI copilot to do anything",
  },
];

// Trusted and featured
export const trustedPartnersList = [
  wiseLogo,
  mongoDBLogo,
  moneyHubLogo,
  altanaLogo,
  geckoLogo,
  checkrLogo,
  latchelLogo,
  lattiveLogo,
  ifrsLogo,
];

export const featuredInList = [techCrunchLogo, ipeLogo, siliconAngleLogo];

// Secure Section
export const secureSecData = [
  {
    title: "Permissions",
    img: permissionsImg,
    desc: "Credal synchronizes permissions across all source systems, ensuring no data leakage and full compliance for your company’s use of generative AI.",
    ticks: [
      "Sync permissions from all source systems",
      "Automatically update permissions cache in real-time.",
      "Granular and configurable access controls",
    ],
  },
  {
    title: "Auto Redaction",
    img: redactionImg,
    desc: "Credal can automatically replace PII with placeholders before passing it to third-party modules. Then, Credal can restore PII.",
    ticks: [
      "Prevent leakage of PHI, PII, and PCI.",
      "Protect secrets, API keys, & credentials.",
      "Helps you stay compliant with HIPAA",
    ],
  },
  {
    title: "Comprehensive Audit Capabilities",
    img: auditImg,
    desc: "Full audit logging for generative AI in your business, including prompts, data and responses.",
    ticks: [
      "Stay compliant and secure",
      "Review organizational use of AI models.",
      "Integrates with Splunk, Datadog, Prometheus etc",
    ],
  },
];

export const secureFeatures = [
  {
    icon: infrastructureIcon,
    title: "SOC 2 + GDPR + CCPA compliant",
    desc: "Credal infrastructure is SOC 2 Type 2 compliant, tested and verified",
  },
  {
    icon: cloudIcon,
    title: "Cloud + On Premise",
    desc: "We support both on premise and cloud deployments. Deploy Credal in the way that works best for your business.",
  },
  {
    icon: policiesIcon,
    title: "Enforce Acceptable Use Policies",
    desc: "Upload your policies and breathe easy: oversight, auditing and alerting for your IT team are built into Credal",
  },
];

// Search Section
export const searchSecTicks = [
  "Point-and-click integrations to all your source systems out of the box",
  "Automatic, near-real-time data refreshing with permissions build in",
  "Use AI however you want: chat UI, enterprise search, or developer API",
];

// Code Section
export const codeFeatures = [
  {
    icon: multimodelIcon,
    title: "Supports multiple models",
    desc: "One API integration gets you the latest models from OpenAI, Anthropic, Google and more",
  },
  {
    icon: interOperableIcon,
    title: "Fully interoperable and multimodal",
    desc: "Drop-in support for common endpoints such as text/chat completions, images, and popular libraries such as LangChain",
  },
  {
    icon: performantIcon,
    title: "Secure and performant",
    desc: "Focus on building your apps; Credal takes care of performance, cost, and security logging automatically",
  },
];
