export const complaints = [
  {
    id: "CC1001",
    title: "Street Light Not Working",
    description:
      "The street light near the main road has not been working for several days, creating safety issues for residents at night.",
    location: "Malviya Nagar, Jaipur",
    department: "Jaipur Municipal Corporation",
    submitted: "02 Sep 2026",
    priority: "High",
    status: "In Progress",

    history: [
      {
        date: "02 Sep 2026",
        title: "Complaint Submitted",
        text: "Your complaint has been successfully submitted.",
      },
      {
        date: "03 Sep 2026",
        title: "Complaint Assigned",
        text: "The complaint has been assigned to the concerned department.",
      },
      {
        date: "04 Sep 2026",
        title: "Work in Progress",
        text: "The department is currently working on the issue.",
      },
    ],
  },

  {
    id: "CC1002",
    title: "Garbage Collection Issue",
    description:
      "Garbage has not been collected from the locality for the last three days.",
    location: "Vaishali Nagar, Jaipur",
    department: "Waste Management Department",
    submitted: "01 Sep 2026",
    priority: "Medium",
    status: "Pending",

    history: [
      {
        date: "01 Sep 2026",
        title: "Complaint Submitted",
        text: "Your complaint has been successfully submitted.",
      },
      {
        date: "02 Sep 2026",
        title: "Under Review",
        text: "The complaint is being reviewed by the concerned department.",
      },
    ],
  },

  {
    id: "CC1003",
    title: "Water Supply Problem",
    description:
      "Residents are facing irregular water supply in the area.",
    location: "Mansarovar, Jaipur",
    department: "Water Supply Department",
    submitted: "28 Aug 2026",
    priority: "High",
    status: "Resolved",

    history: [
      {
        date: "28 Aug 2026",
        title: "Complaint Submitted",
        text: "Your complaint was submitted successfully.",
      },
      {
        date: "29 Aug 2026",
        title: "Complaint Assigned",
        text: "The complaint was assigned to the water supply department.",
      },
      {
        date: "31 Aug 2026",
        title: "Complaint Resolved",
        text: "The water supply issue has been resolved.",
      },
    ],
  },

  {
    id: "CC1004",
    title: "Pothole on Main Road",
    description:
      "A large pothole has developed on the main road and is causing problems for vehicles.",
    location: "Jagatpura, Jaipur",
    department: "Road & Transport Department",
    submitted: "25 Aug 2026",
    priority: "Medium",
    status: "In Progress",

    history: [
      {
        date: "25 Aug 2026",
        title: "Complaint Submitted",
        text: "Your complaint was submitted successfully.",
      },
      {
        date: "27 Aug 2026",
        title: "Inspection Scheduled",
        text: "The concerned department has scheduled an inspection.",
      },
    ],
  },
];

export const categories = [
  "Roads",
  "Water Supply",
  "Electricity",
  "Waste Management",
  "Public Safety",
  "Other",
];