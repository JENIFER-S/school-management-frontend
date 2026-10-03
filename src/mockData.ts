// 30 Classes across Grade 1 to 12
export interface ClassInfo {
  id: string;
  grade: string;
  section: string;
  classTeacher: string;
  room: string;
  studentCount: number; // 40 students per section * 30 classes = 1200
}

export const classesList: ClassInfo[] = [
  // Primary (1-5) -> 2 sections each = 10 classes (400 students)
  { id: "C01", grade: "Grade 1", section: "A", classTeacher: "Kavitha M", room: "Room 101", studentCount: 40 },
  { id: "C02", grade: "Grade 1", section: "B", classTeacher: "Priya S", room: "Room 102", studentCount: 40 },
  { id: "C03", grade: "Grade 2", section: "A", classTeacher: "Anitha R", room: "Room 103", studentCount: 40 },
  { id: "C04", grade: "Grade 2", section: "B", classTeacher: "Saranya K", room: "Room 104", studentCount: 40 },
  { id: "C05", grade: "Grade 3", section: "A", classTeacher: "Deepa V", room: "Room 105", studentCount: 40 },
  { id: "C06", grade: "Grade 3", section: "B", classTeacher: "Meena N", room: "Room 106", studentCount: 40 },
  { id: "C07", grade: "Grade 4", section: "A", classTeacher: "Geetha T", room: "Room 107", studentCount: 40 },
  { id: "C08", grade: "Grade 4", section: "B", classTeacher: "Bhuvaneshwari P", room: "Room 108", studentCount: 40 },
  { id: "C09", grade: "Grade 5", section: "A", classTeacher: "Revathi S", room: "Room 109", studentCount: 40 },
  { id: "C10", grade: "Grade 5", section: "B", classTeacher: "Sangeetha M", room: "Room 110", studentCount: 40 },

  // Middle (6-8) -> 2 sections each = 6 classes (240 students)
  { id: "C11", grade: "Grade 6", section: "A", classTeacher: "Suresh Babu", room: "Room 201", studentCount: 40 },
  { id: "C12", grade: "Grade 6", section: "B", classTeacher: "Venkatesh R", room: "Room 202", studentCount: 40 },
  { id: "C13", grade: "Grade 7", section: "A", classTeacher: "Radha Krishnan", room: "Room 203", studentCount: 40 },
  { id: "C14", grade: "Grade 7", section: "B", classTeacher: "Muthu Kumar", room: "Room 204", studentCount: 40 },
  { id: "C15", grade: "Grade 8", section: "A", classTeacher: "Lakshmi Narayanan", room: "Room 205", studentCount: 40 },
  { id: "C16", grade: "Grade 8", section: "B", classTeacher: "Devi Prasanna", room: "Room 206", studentCount: 40 },

  // High School (9-10) -> 3 sections each = 6 classes (240 students)
  { id: "C17", grade: "Grade 9", section: "A", classTeacher: "Karthikeyan P", room: "Room 301", studentCount: 40 },
  { id: "C18", grade: "Grade 9", section: "B", classTeacher: "Sudha Murthy", room: "Room 302", studentCount: 40 },
  { id: "C19", grade: "Grade 9", section: "C", classTeacher: "Ramesh C", room: "Room 303", studentCount: 40 },
  { id: "C20", grade: "Grade 10", section: "A", classTeacher: "Natarajan S", room: "Room 304", studentCount: 40 },
  { id: "C21", grade: "Grade 10", section: "B", classTeacher: "Hemalatha B", room: "Room 305", studentCount: 40 },
  { id: "C22", grade: "Grade 10", section: "C", classTeacher: "Dinesh Kumar", room: "Room 306", studentCount: 40 },

  // Higher Secondary (11-12) -> 4 sections each = 8 classes (320 students)
  { id: "C23", grade: "Grade 11", section: "A", classTeacher: "Gowri Shankar", room: "Room 401", studentCount: 40 },
  { id: "C24", grade: "Grade 11", section: "B", classTeacher: "Pavithra K", room: "Room 402", studentCount: 40 },
  { id: "C25", grade: "Grade 11", section: "C", classTeacher: "Vijay Anand", room: "Room 403", studentCount: 40 },
  { id: "C26", grade: "Grade 11", section: "D", classTeacher: "Manjula D", room: "Room 404", studentCount: 40 },
  { id: "C27", grade: "Grade 12", section: "A", classTeacher: "Balasubramaniam", room: "Room 405", studentCount: 40 },
  { id: "C28", grade: "Grade 12", section: "B", classTeacher: "Chitra Devi", room: "Room 406", studentCount: 40 },
  { id: "C29", grade: "Grade 12", section: "C", classTeacher: "Senthil Nathan", room: "Room 407", studentCount: 40 },
  { id: "C30", grade: "Grade 12", section: "D", classTeacher: "Kalaivani R", room: "Room 408", studentCount: 40 },
];

// Generate 75 Teachers
const subjects = ["Mathematics", "Science", "Physics", "Chemistry", "Biology", "English", "Tamil", "Computer Science", "Social Science", "Physical Education"];
const teacherFirstNames = ["Kavitha", "Priya", "Anitha", "Saranya", "Deepa", "Meena", "Geetha", "Suresh", "Venkatesh", "Radha", "Muthu", "Lakshmi", "Karthik", "Ramesh", "Natarajan", "Dinesh", "Gowri", "Pavithra", "Vijay", "Balaji", "Senthil", "Kalaivani", "Arun", "Vimal", "Aravind", "Sundar", "Swetha", "Nandhini", "Lavanya", "Divya"];

export interface TeacherInfo {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  experience: string;
  status: "Active" | "On Leave";
}

export const teachersList: TeacherInfo[] = Array.from({ length: 75 }, (_, i) => {
  const firstName = teacherFirstNames[i % teacherFirstNames.length];
  const initial = String.fromCharCode(65 + (i % 26));
  const name = `${firstName} ${initial}`;
  const subject = subjects[i % subjects.length];
  return {
    id: `TCH${String(i + 1).padStart(3, "0")}`,
    name,
    subject,
    email: `${firstName.toLowerCase()}.${initial.toLowerCase()}@school.edu`,
    phone: `9842${String(100000 + i * 111).slice(0, 6)}`,
    experience: `${(i % 12) + 2} Years`,
    status: i < 3 ? "On Leave" : "Active", // Exactly 3 On Leave matching Dashboard
  };
});

// Generate 1200 Students mapped to 30 Classes
const firstNames = ["Arun", "Bala", "Chandran", "Dinesh", "Elango", "Ganesh", "Hari", "Ilango", "Jeeva", "Karthik", "Loganathan", "Mani", "Naveen", "Pradeep", "Raghav", "Sanjay", "Thiru", "Vasanth", "Yuvan", "Abirami", "Bhavani", "Chitra", "Divya", "Ezhil", "Gayathri", "Harini", "Ishwarya", "Janani", "Kavya", "Lavanya", "Malathi", "Nivetha", "Pavithra", "Ramya", "Sneha", "Tharani", "Uma", "Vidya", "Yamuna", "Zoya"];
const parentNames = ["Rajan S", "Murugan K", "Kumar V", "Senthil M", "Velu R", "Shanmugam P", "Gopal T", "Ramasamy N", "Sundaram K", "Natarajan A"];

export interface StudentRecord {
  id: string;
  rollNo: number;
  name: string;
  grade: string;
  section: string;
  classId: string;
  gender: "Male" | "Female";
  parentName: string;
  parentPhone: string;
  attendance: number;
  status: "Active" | "Pending";
}

export const fullStudentsList: StudentRecord[] = [];
let rollCounter = 1;

classesList.forEach((cls) => {
  for (let s = 1; s <= cls.studentCount; s++) {
    const isMale = s % 2 === 1;
    const nameIndex = (rollCounter + s) % firstNames.length;
    const parentIndex = (rollCounter + s) % parentNames.length;
    fullStudentsList.push({
      id: `STU${String(rollCounter).padStart(4, "0")}`,
      rollNo: rollCounter,
      name: `${firstNames[nameIndex]} ${String.fromCharCode(65 + (s % 26))}`,
      grade: cls.grade,
      section: cls.section,
      classId: cls.id,
      gender: isMale ? "Male" : "Female",
      parentName: parentNames[parentIndex],
      parentPhone: `9443${String(200000 + rollCounter * 17).slice(0, 6)}`,
      attendance: 80 + (rollCounter % 20),
      status: "Active",
    });
    rollCounter++;
  }
});