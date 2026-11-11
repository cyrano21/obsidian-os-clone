import AudienceSection, { type Feature } from "./audience-section";

const firmFeatures: Feature[] = [
  {
    title: "Day plan",
    body: "Kanban view of meetings, tasks, and client communications.",
    img: "/orig/day-plan.webp",
  },
  {
    title: "AI search",
    body: "Find relevant client information in seconds, with intelligent, unified search across your systems and documents.",
    img: "/orig/ai-search.webp",
  },
  {
    title: "AI meeting assistant",
    body: "Every client meeting sharpens the system. You start with the right context, what matters is captured as the conversation unfolds, and insight turns into action automatically.",
    img: "/orig/ai-meeting-assistant.webp",
  },
  {
    title: "Document digitization",
    body: "Transform paper records and scanned documents into searchable, structured data automatically.",
    img: "/orig/document-digitisation.webp",
  },
  {
    title: "Suitability report",
    body: "Generate compliant suitability reports with AI assistance, ensuring every recommendation is properly documented.",
    img: "/orig/suitability-report.webp",
  },
  {
    title: "Portfolio aggregation",
    body: "Every client's full portfolio, across custodians and platforms, unified in a single, reliable view.",
    img: "/orig/portfolio-aggregation.webp",
  },
  {
    title: "Client-ready emails in your voice",
    body: "Personalized drafts that match your tone. Client recap emails are drafted and ready to send automatically.",
    img: "/orig/client-emails.webp",
  },
];

const consolidatorFeatures: Feature[] = [
  {
    title: "Multi-firm oversight",
    body: "Manage multiple firms under one organisation with consolidated reporting, controls, and visibility.",
    img: "/orig/multi-firm-oversight.webp",
  },
  {
    title: "Rapid onboarding",
    body: "Onboard new firms in minutes through automated data migration and structured setup.",
    img: "/orig/rapid-onboarding.webp",
  },
  {
    title: "Document digitisation",
    body: "Convert paper records into searchable, structured data across the organisation.",
    img: "/orig/document-digitisation.webp",
  },
  {
    title: "Data segregation",
    body: "Maintain strict separation between firms, teams, and users, with tenant-level data isolation.",
    img: "/orig/data-segregation.webp",
  },
  {
    title: "Role-based access",
    body: "Fine-grained permissions ensure the right people see the right data.",
    img: "/orig/role-based-access.webp",
  },
  {
    title: "Audit trails",
    body: "Complete visibility into every action across your organisation for compliance and oversight.",
    img: "/orig/audit-trails.webp",
  },
  {
    title: "Everything for Independent Firms and more",
    body: "Built on the full Independent Firm feature set, with additional layers for oversight, scale, and control.",
    img: "/orig/everything-independent-firms.webp",
  },
];

export function FirmsSection() {
  return (
    <AudienceSection
      id="who"
      heading={<>The platform that scales your firm</>}
      title="Independent firms"
      subtitle="Spend less time on admin and more time delivering advice that matters."
      items={firmFeatures}
      panelSide="right"
      pt="pt-[124px]"
    />
  );
}

export function ConsolidatorsSection() {
  return (
    <AudienceSection
      heading={<>Unlock rapid growth</>}
      title="Consolidators"
      subtitle="Unify firms, data, and controls to scale faster – without operational drag."
      items={consolidatorFeatures}
      panelSide="left"
      pt="pt-[109px]"
    />
  );
}
