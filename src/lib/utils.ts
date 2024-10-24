export const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

export const dataCountChart = [
  {
    name: "Boys",
    count: 55,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#FAE27C",
  },
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
];

export const dataAttendanceChart = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Thu",
    present: 55,
    absent: 45,
  },
  {
    name: "Wed",
    present: 80,
    absent: 20,
  },
  {
    name: "Thu",
    present: 30,
    absent: 70,
  },
  {
    name: "Fri",
    present: 60,
    absent: 40,
  },
];

export const dataFinanseChart = [
  {
    name: "Jun",
    income: 1234,
    expense: 4334,
  },
  {
    name: "Frb",
    income: 6543,
    expense: 7764,
  },
  {
    name: "Mar",
    income: 65654,
    expense: 77654,
  },
  {
    name: "Apr",
    income: 6543,
    expense: 7847,
  },
  {
    name: "May",
    income: 6536,
    expense: 7653,
  },
  {
    name: "Jun",
    income: 66745,
    expense: 5443,
  },
  {
    name: "Jul",
    income: 75643,
    expense: 5446,
  },
  {
    name: "Sep",
    income: 2345,
    expense: 5435,
  },
  {
    name: "Oct",
    income: 6554,
    expense: 9987,
  },
  {
    name: "Nov",
    income: 5678,
    expense: 8766,
  },
  {
    name: "Dec",
    income: 45567,
    expense: 6553,
  },
];

export const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
