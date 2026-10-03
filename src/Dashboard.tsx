import React, { useState, useEffect } from "react";
import {
  Home,
  Users,
  GraduationCap,
  DoorOpen,
  CalendarCheck,
  FileSpreadsheet,
  Calendar,
  Settings,
  ChevronDown,
  Plus,
  X,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

// 1. Classes Structure
interface ClassInfo {
  id: string;
  grade: string;
  section: string;
  classTeacher: string;
  room: string;
  studentCount: number;
}

const classesList: ClassInfo[] = [
  { id: "C01", grade: "Grade 1", section: "A", classTeacher: "Kavitha M", room: "Room 101", studentCount: 41 },
  { id: "C02", grade: "Grade 1", section: "B", classTeacher: "Priya S", room: "Room 102", studentCount: 41 },
  { id: "C03", grade: "Grade 2", section: "A", classTeacher: "Anitha R", room: "Room 103", studentCount: 41 },
  { id: "C04", grade: "Grade 2", section: "B", classTeacher: "Saranya K", room: "Room 104", studentCount: 41 },
  { id: "C05", grade: "Grade 3", section: "A", classTeacher: "Deepa V", room: "Room 105", studentCount: 41 },
  { id: "C06", grade: "Grade 3", section: "B", classTeacher: "Meena N", room: "Room 106", studentCount: 41 },
  { id: "C07", grade: "Grade 4", section: "A", classTeacher: "Geetha T", room: "Room 107", studentCount: 41 },
  { id: "C08", grade: "Grade 4", section: "B", classTeacher: "Bhuvaneshwari P", room: "Room 108", studentCount: 41 },
  { id: "C09", grade: "Grade 5", section: "A", classTeacher: "Revathi S", room: "Room 109", studentCount: 41 },
  { id: "C10", grade: "Grade 5", section: "B", classTeacher: "Sangeetha M", room: "Room 110", studentCount: 41 },
  { id: "C11", grade: "Grade 6", section: "A", classTeacher: "Suresh Babu", room: "Room 201", studentCount: 41 },
  { id: "C12", grade: "Grade 6", section: "B", classTeacher: "Venkatesh R", room: "Room 202", studentCount: 41 },
  { id: "C13", grade: "Grade 7", section: "A", classTeacher: "Radha Krishnan", room: "Room 203", studentCount: 41 },
  { id: "C14", grade: "Grade 7", section: "B", classTeacher: "Muthu Kumar", room: "Room 204", studentCount: 41 },
  { id: "C15", grade: "Grade 8", section: "A", classTeacher: "Lakshmi Narayanan", room: "Room 205", studentCount: 41 },
  { id: "C16", grade: "Grade 8", section: "B", classTeacher: "Devi Prasanna", room: "Room 206", studentCount: 41 },
  { id: "C17", grade: "Grade 9", section: "A", classTeacher: "Karthikeyan P", room: "Room 301", studentCount: 30 },
  { id: "C18", grade: "Grade 9", section: "B", classTeacher: "Sudha Murthy", room: "Room 302", studentCount: 41 },
  { id: "C19", grade: "Grade 9", section: "C", classTeacher: "Ramesh C", room: "Room 303", studentCount: 41 },
  { id: "C20", grade: "Grade 10", section: "A", classTeacher: "Natarajan S", room: "Room 304", studentCount: 30 },
  { id: "C21", grade: "Grade 10", section: "B", classTeacher: "Hemalatha B", room: "Room 305", studentCount: 41 },
  { id: "C22", grade: "Grade 10", section: "C", classTeacher: "Dinesh Kumar", room: "Room 306", studentCount: 41 },
  { id: "C23", grade: "Grade 11", section: "A", classTeacher: "Gowri Shankar", room: "Room 401", studentCount: 40 },
  { id: "C24", grade: "Grade 11", section: "B", classTeacher: "Pavithra K", room: "Room 402", studentCount: 40 },
  { id: "C25", grade: "Grade 11", section: "C", classTeacher: "Vijay Anand", room: "Room 403", studentCount: 40 },
  { id: "C26", grade: "Grade 11", section: "D", classTeacher: "Manjula D", room: "Room 404", studentCount: 40 },
  { id: "C27", grade: "Grade 12", section: "A", classTeacher: "Balasubramaniam", room: "Room 405", studentCount: 40 },
  { id: "C28", grade: "Grade 12", section: "B", classTeacher: "Chitra Devi", room: "Room 406", studentCount: 40 },
  { id: "C29", grade: "Grade 12", section: "C", classTeacher: "Senthil Nathan", room: "Room 407", studentCount: 40 },
  { id: "C30", grade: "Grade 12", section: "D", classTeacher: "Kalaivani R", room: "Room 408", studentCount: 40 },
];

// 2. Teachers List
const subjectsList = [
  "Mathematics", "Science", "Physics", "Chemistry", "Biology",
  "English", "Tamil", "Computer Science", "Social Science", "Physical Ed",
];

const sampleTeacherNames = [
  "Kavitha", "Priya", "Anitha", "Saranya", "Deepa", "Meena", "Geetha",
  "Suresh", "Venkatesh", "Radha", "Muthu", "Lakshmi", "Karthik", "Ramesh",
  "Natarajan", "Dinesh", "Gowri", "Pavithra", "Vijay", "Balaji",
];

interface TeacherInfo {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  experience: string;
  status: "Active" | "On Leave";
}

const teachersList: TeacherInfo[] = Array.from({ length: 75 }, (_, i) => {
  const firstName = sampleTeacherNames[i % sampleTeacherNames.length];
  const initial = String.fromCharCode(65 + (i % 26));
  return {
    id: `TCH${String(i + 1).padStart(3, "0")}`,
    name: `${firstName} ${initial}`,
    subject: subjectsList[i % subjectsList.length],
    email: `${firstName.toLowerCase()}.${initial.toLowerCase()}@school.edu`,
    phone: `9842${String(100000 + i * 111).slice(0, 6)}`,
    experience: `${(i % 10) + 3} Years`,
    status: i < 3 ? "On Leave" : "Active",
  };
});

// 3. Student Record Interface
interface StudentRecord {
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

// Grade Multipliers
const gradeMultipliers: Record<string, number> = {
  "Grade 1": 0.5, "Grade 2": 0.55, "Grade 3": 0.6, "Grade 4": 0.65,
  "Grade 5": 0.7, "Grade 6": 0.75, "Grade 7": 0.8, "Grade 8": 0.85,
  "Grade 9": 1.0, "Grade 10": 1.15, "Grade 11": 0.95, "Grade 12": 1.05,
};

const allMonths = [
  { month: "Jan", blue: 110, green: 75, orange: 60 },
  { month: "Feb", blue: 140, green: 105, orange: 75 },
  { month: "Mar", blue: 130, green: 90, orange: 75 },
  { month: "Apr", blue: 145, green: 110, orange: 95 },
  { month: "May", blue: 155, green: 120, orange: 105 },
  { month: "Jun", blue: 200, green: 145, orange: 120 },
  { month: "Jul", blue: 170, green: 135, orange: 115 },
  { month: "Aug", blue: 215, green: 170, orange: 140 },
  { month: "Sep", blue: 200, green: 155, orange: 145 },
  { month: "Oct", blue: 220, green: 175, orange: 150 },
  { month: "Nov", blue: 230, green: 180, orange: 155 },
  { month: "Dec", blue: 245, green: 190, orange: 165 },
];

const subjectScoresReport = [
  { subject: "Math", score: 85 },
  { subject: "Science", score: 78 },
  { subject: "English", score: 92 },
  { subject: "History", score: 88 },
  { subject: "Art", score: 95 },
];

const performanceTrendsReport = [
  { month: "Jan", green: 72, black: 80 },
  { month: "Feb", green: 85, black: 74 },
  { month: "Mar", green: 82, black: 85 },
  { month: "Apr", green: 89, black: 79 },
  { month: "May", green: 94, black: 87 },
  { month: "Jun", green: 96, black: 91 },
];

interface DashboardProps {
  onLogout?: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [selectedYear, setSelectedYear] = useState("This Year");
  const [selectedGrade, setSelectedGrade] = useState("Grade 9");

  // Students Page Filter, View Mode & Pagination
  const [studentsSearch, setStudentsSearch] = useState("");
  const [selectedClassFilter, setSelectedClassFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Selected Checkboxes & Action Modal State
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);
  const [activeActionModal, setActiveActionModal] = useState<string | null>(null);
  const [openRowMenuId, setOpenRowMenuId] = useState<string | null>(null);

  // Synchronized Dynamic Student State - Fetched from Spring Boot Backend
  const [studentsListState, setStudentsListState] = useState<StudentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  // FETCH STUDENTS FROM SPRING BOOT REST API
  const fetchStudents = () => {
    let url = "http://localhost:8080/api/students";
    if (selectedClassFilter !== "ALL") {
      const [g, s] = selectedClassFilter.split("-");
      if (g && s) {
        url = `http://localhost:8080/api/students?grade=${encodeURIComponent(g)}&section=${encodeURIComponent(s)}`;
      }
    }

    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Backend network error");
        return res.json();
      })
      .then((data: StudentRecord[]) => {
        setStudentsListState(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Backend fetch error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, [selectedClassFilter]);

  // Add Student Modal State
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentGender, setNewStudentGender] = useState<"Male" | "Female">("Male");
  const [newStudentParent, setNewStudentParent] = useState("");
  const [newStudentPhone, setNewStudentPhone] = useState("");
  const [newStudentClassId, setNewStudentClassId] = useState("C17"); // Default Grade 9-A ID

  // Selected Class Modal for Classes Tab
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);

  // Events LocalStorage
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("school_events");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error(err);
      }
    }
    return [
      { id: 1, date: "10", title: "Science Fair", fullDate: "May 10, 2026", color: "red" },
      { id: 2, date: "15", title: "Parent-Teacher Meeting", fullDate: "May 15, 2026", color: "blue" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("school_events", JSON.stringify(events));
  }, [events]);

  const [showEventModal, setShowEventModal] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState("");

  const totalStudents = studentsListState.length;
  const totalTeachers = teachersList.length;
  const totalClasses = classesList.length;
  const attendanceRate = 94;

  const onLeaveTeachers = 3;
  const presentTeachers = totalTeachers - onLeaveTeachers;
  const presentPercent = Math.round((presentTeachers / totalTeachers) * 100);

  // Dynamic filter for Students table
  const filteredStudents = studentsListState.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(studentsSearch.toLowerCase()) ||
      s.id.toLowerCase().includes(studentsSearch.toLowerCase()) ||
      s.parentName?.toLowerCase().includes(studentsSearch.toLowerCase());
    const matchesStatus = statusFilter === "All" || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const displayedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const dynamicActiveCount = filteredStudents.filter((s) => s.status === "Active").length;
  const dynamicPendingCount = filteredStudents.filter((s) => s.status === "Pending").length;
  const dynamicMaleCount = filteredStudents.filter((s) => s.gender === "Male").length;
  const dynamicFemaleCount = filteredStudents.filter((s) => s.gender === "Female").length;

  const isAllSelected = displayedStudents.length > 0 && selectedStudentIds.length === displayedStudents.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedStudentIds([]);
    } else {
      setSelectedStudentIds(displayedStudents.map((s) => s.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    if (selectedStudentIds.includes(id)) {
      setSelectedStudentIds(selectedStudentIds.filter((item) => item !== id));
    } else {
      setSelectedStudentIds([...selectedStudentIds, id]);
    }
  };

  const handleExportCSV = () => {
    const headers = "ID,Name,Gender,Class,Parent,Phone,Status\n";
    const rows = filteredStudents
      .map(
        (s) =>
          `${s.id},${s.name},${s.gender},${s.grade}-${s.section},${s.parentName},${s.parentPhone},${s.status}`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Students_${selectedClassFilter}.csv`;
    a.click();
  };

  // Dashboard Chart Data
  const multiplier = gradeMultipliers[selectedGrade] || 1.0;
  const rawMonths = selectedYear === "This Year" ? allMonths.slice(0, 10) : allMonths;
  const dynamicChartData = rawMonths.map((item) => ({
    month: item.month,
    blue: Math.round(item.blue * multiplier),
    green: Math.round(item.green * multiplier),
    orange: Math.round(item.orange * multiplier),
  }));

  const attendancePieData = [
    { name: "Present", value: attendanceRate, color: "#4ade80" },
    { name: "Absent", value: 14, color: "#f87171" },
    { name: "Late", value: 2, color: "#fb923c" },
  ];

  // Add Event Handler
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle.trim()) return;
    let day = "20";
    let formattedDate = newEventDate;
    if (newEventDate) {
      day = newEventDate.split("-")[2] || "20";
      formattedDate = new Date(newEventDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } else {
      formattedDate = "Oct 20, 2026";
    }
    setEvents([
      {
        id: Date.now(),
        date: day,
        title: newEventTitle,
        fullDate: formattedDate,
        color: events.length % 2 === 0 ? "red" : "blue",
      },
      ...events,
    ]);
    setNewEventTitle("");
    setNewEventDate("");
    setShowEventModal(false);
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter((ev) => ev.id !== id));
  };

  // 1. ADD STUDENT BACKEND INTEGRATION (POST)
  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;
    
    // Find matching class info based on selected classId (e.g. "C17")
    const matchedClass = classesList.find((c) => c.id === newStudentClassId) || classesList[16];

    const newEntry = {
      id: `STU${String(studentsListState.length + 1201).padStart(4, "0")}`,
      rollNo: studentsListState.length + 1,
      name: newStudentName,
      grade: matchedClass.grade,
      section: matchedClass.section,
      classId: matchedClass.id,
      gender: newStudentGender,
      parentName: newStudentParent || "Guardian",
      parentPhone: newStudentPhone || "9443123456",
      attendance: 90,
      status: "Active" as const,
    };

    fetch("http://localhost:8080/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save student");
        return res.json();
      })
      .then((savedStudent) => {
        setStudentsListState([savedStudent, ...studentsListState]);
        setShowAddStudentModal(false);
        setNewStudentName("");
        setNewStudentParent("");
        setNewStudentPhone("");
        alert("Student successfully saved to MySQL database!");
      })
      .catch((err) => {
        console.error("Error creating student:", err);
        alert("Error saving student. Check console.");
      });
  };

  // 2. DELETE STUDENT BACKEND INTEGRATION (DELETE)
  const handleDeleteStudent = (id: string) => {
    fetch(`http://localhost:8080/api/students/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete student");
        setStudentsListState(studentsListState.filter((s) => s.id !== id));
        setOpenRowMenuId(null);
      })
      .catch((err) => console.error("Error deleting student:", err));
  };

  return (
    <div className="flex min-h-screen bg-[#f1f4f9] text-slate-800">
      {/* 1. Sidebar */}
      <aside className="w-56 bg-[#16213e] text-white flex flex-col justify-between shrink-0">
        <div>
          <nav className="p-3 space-y-1 text-xs">
            {[
              { name: "Dashboard", icon: <Home size={16} /> },
              { name: "Students", icon: <Users size={16} /> },
              { name: "Teachers", icon: <GraduationCap size={16} /> },
              { name: "Classes", icon: <DoorOpen size={16} /> },
              { name: "Attendance", icon: <CalendarCheck size={16} /> },
              { name: "Exams", icon: <FileSpreadsheet size={16} /> },
              { name: "Events", icon: <Calendar size={16} /> },
              { name: "Settings", icon: <Settings size={16} /> },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveMenu(item.name);
                  setCurrentPage(1);
                  setOpenRowMenuId(null);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition cursor-pointer ${
                  activeMenu === item.name
                    ? "bg-[#2563eb] text-white shadow-sm"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-3 text-[11px] text-slate-400 border-t border-white/10 flex justify-between items-center">
          <span>Admin Panel</span>
          <button onClick={onLogout} className="text-red-400 hover:underline cursor-pointer">
            Logout
          </button>
        </div>
      </aside>

      {/* 2. Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white px-6 py-3 border-b border-slate-200 flex items-center justify-between">
          <h1 className="text-lg font-bold text-slate-800">
            {activeMenu === "Dashboard" && "School Management Dashboard"}
            {activeMenu === "Students" && "Manage student records and information"}
            {activeMenu === "Teachers" && "Faculty & Teachers (75 Staff)"}
            {activeMenu === "Classes" && "Classes & Sections (30 Classrooms)"}
            {activeMenu === "Attendance" && "Class Attendance Tracking"}
            {activeMenu === "Exams" && "Student Achievement & Analytics"}
            {activeMenu === "Events" && "School Events & Activities"}
            {activeMenu === "Settings" && "System Settings"}
          </h1>
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="Admin"
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-xs font-semibold text-slate-700">Welcome, Admin</span>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </header>

        <main className="p-5 space-y-5 overflow-y-auto">
          {/* DASHBOARD MODULE */}
          {activeMenu === "Dashboard" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div
                  onClick={() => setActiveMenu("Students")}
                  className="bg-[#4f6ef7] text-white rounded-xl p-3.5 flex items-center justify-between shadow-xs cursor-pointer hover:opacity-95 transition"
                >
                  <div>
                    <p className="text-[11px] text-blue-100 font-medium">Total Students</p>
                    <h3 className="text-xl font-bold mt-0.5">{totalStudents.toLocaleString()}</h3>
                    <p className="text-[10px] text-blue-100 mt-1">Live from MySQL</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Users size={20} />
                  </div>
                </div>

                <div
                  onClick={() => setActiveMenu("Teachers")}
                  className="bg-[#10b981] text-white rounded-xl p-3.5 flex items-center justify-between shadow-xs cursor-pointer hover:opacity-95 transition"
                >
                  <div>
                    <p className="text-[11px] text-emerald-100 font-medium">Total Teachers</p>
                    <h3 className="text-xl font-bold mt-0.5">{totalTeachers}</h3>
                    <p className="text-[10px] text-emerald-100 mt-1">+2 This Week</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <GraduationCap size={20} />
                  </div>
                </div>

                <div
                  onClick={() => setActiveMenu("Classes")}
                  className="bg-[#f97316] text-white rounded-xl p-3.5 flex items-center justify-between shadow-xs cursor-pointer hover:opacity-95 transition"
                >
                  <div>
                    <p className="text-[11px] text-orange-100 font-medium">Classes</p>
                    <h3 className="text-xl font-bold mt-0.5">{totalClasses}</h3>
                    <p className="text-[10px] text-orange-100 mt-1">30 Sections</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <DoorOpen size={20} />
                  </div>
                </div>

                <div
                  onClick={() => setActiveMenu("Attendance")}
                  className="bg-[#8b5cf6] text-white rounded-xl p-3.5 flex items-center justify-between shadow-xs cursor-pointer hover:opacity-95 transition"
                >
                  <div>
                    <p className="text-[11px] text-purple-100 font-medium">Attendance</p>
                    <h3 className="text-xl font-bold mt-0.5">{attendanceRate}%</h3>
                    <p className="text-[10px] text-purple-100 mt-1">Weekly Average</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <CalendarCheck size={20} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-sm text-slate-800">Students Overview</h3>
                      <div className="flex items-center gap-3 mt-1 text-[10px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span> Enrolled
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#10b981]"></span> Active
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#f97316]"></span> Passed Exams
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-slate-700 outline-none cursor-pointer"
                      >
                        <option value="This Year">This Year (Jan - Oct)</option>
                        <option value="Last Year">Last Year (Full Year)</option>
                      </select>
                      <select
                        value={selectedGrade}
                        onChange={(e) => setSelectedGrade(e.target.value)}
                        className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-blue-600 font-semibold outline-none cursor-pointer"
                      >
                        {Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`).map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="h-56 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={dynamicChartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} />
                        <YAxis tickLine={false} tick={{ fontSize: 10, fill: "#94a3b8" }} domain={[0, 300]} />
                        <Tooltip />
                        <Line type="monotone" name="Enrolled" dataKey="blue" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                        <Line type="monotone" name="Active" dataKey="green" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
                        <Line type="monotone" name="Passed" dataKey="orange" stroke="#f97316" strokeWidth={2} dot={{ r: 3 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-sm text-slate-800">Upcoming Events</h3>
                      <button
                        onClick={() => setShowEventModal(true)}
                        className="text-[11px] text-blue-600 hover:underline cursor-pointer flex items-center gap-0.5"
                      >
                        <Plus size={12} /> Add Event
                      </button>
                    </div>
                    <div className="space-y-2.5 max-h-[175px] overflow-y-auto pr-1">
                      {events.map((item) => (
                        <div
                          key={item.id}
                          className={`p-2 rounded-lg flex items-center justify-between border group ${
                            item.color === "red" ? "bg-red-50/70 border-red-100" : "bg-blue-50/70 border-blue-100"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-8 h-8 rounded flex items-center justify-center font-bold text-[11px] shrink-0 ${
                                item.color === "red" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
                              }`}
                            >
                              {item.date}
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-slate-800 line-clamp-1">{item.title}</h4>
                              <p className="text-[10px] text-slate-500">{item.fullDate}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDeleteEvent(item.id)}
                            className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 p-1 transition cursor-pointer"
                            title="Delete Event"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveMenu("Events")}
                    className="w-full mt-3 py-1.5 bg-[#2563eb] text-white rounded-md text-xs font-medium hover:bg-blue-700 transition cursor-pointer"
                  >
                    View All Events
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
                  <h3 className="font-bold text-sm text-slate-800 mb-2.5">Recent Notifications</h3>
                  <div className="space-y-2.5 text-[11px]">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0"></span>
                      <div className="flex-1">
                        <p className="font-medium text-slate-700">Fee payment pending for 3 students</p>
                        <span className="text-[9px] text-slate-400">2 hrs ago</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1 shrink-0"></span>
                      <div className="flex-1">
                        <p className="font-medium text-slate-700">New admission request received</p>
                        <span className="text-[9px] text-slate-400">5 hrs ago</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0"></span>
                      <div className="flex-1">
                        <p className="font-medium text-slate-700">Exam schedule updated</p>
                        <span className="text-[9px] text-slate-400">1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setActiveMenu("Teachers")}
                  className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs cursor-pointer hover:border-blue-300 transition"
                >
                  <h3 className="font-bold text-sm text-slate-800 mb-2.5">Teacher Stats</h3>
                  <div className="p-2.5 bg-slate-50 rounded-lg flex items-center justify-between mb-3 border border-slate-100">
                    <div>
                      <p className="text-[10px] text-slate-500">Present Today</p>
                      <p className="text-xl font-bold text-slate-800">{presentTeachers}</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">
                      {presentPercent}%
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>On Leave</span>
                      <span className="font-bold text-slate-800">{onLeaveTeachers}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${presentPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setActiveMenu("Attendance")}
                  className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs cursor-pointer hover:border-blue-300 transition"
                >
                  <h3 className="font-bold text-sm text-slate-800 mb-2">Monthly Attendance</h3>
                  <div className="flex items-center justify-between">
                    <div className="w-28 h-28">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={attendancePieData} dataKey="value" cx="50%" cy="50%" outerRadius={45}>
                            {attendancePieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-1 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#4ade80]"></span>
                        <span>Present {attendanceRate}%</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#f87171]"></span>
                        <span>Absent 14%</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#fb923c]"></span>
                        <span>Late 2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* STUDENTS MANAGEMENT MODULE */}
          {activeMenu === "Students" && (
            <div className="space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    STUDENT MANAGEMENT (SPRING BOOT & MYSQL)
                  </span>
                  <h2 className="text-2xl font-bold text-slate-800 mt-0.5">
                    Manage student records and information
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Live connected to MySQL database via Spring Boot REST APIs
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleExportCSV}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-xs rounded-lg text-slate-700 shadow-2xs hover:bg-slate-50 cursor-pointer"
                  >
                    Export as <ChevronDown size={13} />
                  </button>
                  <button
                    onClick={() => setActiveActionModal("Bulk Upload")}
                    className="px-3 py-1.5 bg-white border border-slate-200 text-xs rounded-lg text-slate-700 shadow-2xs hover:bg-slate-50 cursor-pointer"
                  >
                    Bulk Upload
                  </button>
                  <button
                    onClick={() => setActiveActionModal("Bulk Enroll")}
                    className="px-3 py-1.5 bg-white border border-slate-200 text-xs rounded-lg text-slate-700 shadow-2xs hover:bg-slate-50 cursor-pointer"
                  >
                    Bulk Enroll
                  </button>
                  <button
                    onClick={() => setActiveActionModal("Promote Students")}
                    className="px-3 py-1.5 bg-white border border-slate-200 text-xs rounded-lg text-slate-700 shadow-2xs hover:bg-slate-50 cursor-pointer"
                  >
                    Promote Students
                  </button>
                  <button
                    onClick={() => setShowAddStudentModal(true)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1b4332] text-white text-xs font-semibold rounded-lg shadow-sm hover:bg-[#143326] transition cursor-pointer"
                  >
                    <Plus size={14} /> Add Student
                  </button>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500 font-medium">Total Students</p>
                  <p className="text-[10px] text-slate-400">Database Records</p>
                  <h3 className="text-2xl font-bold text-slate-800 mt-1">
                    {loading ? "..." : filteredStudents.length}
                  </h3>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500 font-medium">Active</p>
                  <p className="text-[10px] text-slate-400">Currently enrolled</p>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {loading ? "..." : dynamicActiveCount}
                    </h3>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                      {dynamicActiveCount} Active
                    </span>
                    {dynamicPendingCount > 0 && (
                      <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-medium">
                        {dynamicPendingCount} Pending
                      </span>
                    )}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500 font-medium">Male</p>
                  <h3 className="text-2xl font-bold text-slate-800 mt-3.5">
                    {loading ? "..." : dynamicMaleCount}
                  </h3>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500 font-medium">Female</p>
                  <h3 className="text-2xl font-bold text-slate-800 mt-3.5">
                    {loading ? "..." : dynamicFemaleCount}
                  </h3>
                </div>
              </div>

              {/* Table Container */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-2xs p-5">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">All Students</h3>
                    <p className="text-xs text-slate-400">
                      {loading ? "Loading from MySQL..." : `${filteredStudents.length} students found`}
                    </p>
                  </div>

                  {/* Tools Bar */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <button
                      onClick={() => setActiveActionModal("Filters")}
                      className="flex items-center gap-1 px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 cursor-pointer"
                    >
                      Filters
                    </button>
                    <button
                      onClick={() => setActiveActionModal("Presets")}
                      className="px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 cursor-pointer"
                    >
                      Presets
                    </button>
                    <button
                      onClick={() => setActiveActionModal("Columns")}
                      className="px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 cursor-pointer"
                    >
                      Columns
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 cursor-pointer"
                    >
                      Print
                    </button>

                    {/* Live Search */}
                    <div className="relative">
                      <Search size={13} className="absolute left-2.5 top-2.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search by name, admin..."
                        value={studentsSearch}
                        onChange={(e) => {
                          setStudentsSearch(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white text-xs outline-none w-44"
                      />
                    </div>

                    {/* Select Class Filter (Sync with Backend) */}
                    <select
                      value={selectedClassFilter}
                      onChange={(e) => {
                        setSelectedClassFilter(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="px-2.5 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-700 outline-none font-medium cursor-pointer"
                    >
                      <option value="ALL">All Classes (View All)</option>
                      {classesList.map((c) => {
                        const val = `${c.grade}-${c.section}`;
                        return (
                          <option key={c.id} value={val}>
                            {c.grade} - Section {c.section}
                          </option>
                        );
                      })}
                    </select>

                    {/* Select Status */}
                    <select
                      value={statusFilter}
                      onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="px-2.5 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 outline-none cursor-pointer"
                    >
                      <option value="All">Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-100">
                      <tr>
                        <th className="p-3 w-8">
                          <input
                            type="checkbox"
                            checked={isAllSelected}
                            onChange={toggleSelectAll}
                            className="rounded border-slate-300 cursor-pointer"
                          />
                        </th>
                        <th className="p-3">STUDENT</th>
                        <th className="p-3">STATUS</th>
                        <th className="p-3">GENDER</th>
                        <th className="p-3">CLASS</th>
                        <th className="p-3">PARENT</th>
                        <th className="p-3">DATE CREATED</th>
                        <th className="p-3 text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {loading ? (
                        <tr>
                          <td colSpan={8} className="p-6 text-center text-slate-400">
                            Connecting to Spring Boot & Loading Students...
                          </td>
                        </tr>
                      ) : displayedStudents.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="p-6 text-center text-slate-400">
                            No student records found in database.
                          </td>
                        </tr>
                      ) : (
                        displayedStudents.map((s) => (
                          <tr key={s.id} className="hover:bg-slate-50/70 transition">
                            <td className="p-3">
                              <input
                                type="checkbox"
                                checked={selectedStudentIds.includes(s.id)}
                                onChange={() => toggleSelectOne(s.id)}
                                className="rounded border-slate-300 cursor-pointer"
                              />
                            </td>
                            <td className="p-3">
                              <div className="font-semibold text-slate-900">{s.name}</div>
                              <div className="text-[10px] text-slate-400">{s.id}</div>
                            </td>
                            <td className="p-3">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                                  s.status === "Active"
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                    : "bg-amber-50 text-amber-700 border-amber-100"
                                }`}
                              >
                                {s.status}
                              </span>
                            </td>
                            <td className="p-3">{s.gender}</td>
                            <td className="p-3 font-medium text-slate-800">
                              {s.grade} - {s.section}
                            </td>
                            <td className="p-3">
                              <div className="font-medium text-slate-800">{s.parentName}</div>
                              <div className="text-[10px] text-slate-400">{s.parentPhone}</div>
                            </td>
                            <td className="p-3 text-slate-500">12 May 2026</td>
                            <td className="p-3 text-right relative">
                              <button
                                onClick={() => setOpenRowMenuId(openRowMenuId === s.id ? null : s.id)}
                                className="text-slate-400 hover:text-slate-700 px-1 font-bold cursor-pointer"
                              >
                                &bull;&bull;&bull;
                              </button>

                              {openRowMenuId === s.id && (
                                <div className="absolute right-3 top-8 w-28 bg-white border border-slate-200 rounded-lg shadow-lg z-20 py-1 text-left text-xs">
                                  <button
                                    onClick={() => {
                                      alert(`Student Profile: ${s.name} (${s.id})`);
                                      setOpenRowMenuId(null);
                                    }}
                                    className="w-full px-3 py-1 hover:bg-slate-50 text-slate-700 block text-left cursor-pointer"
                                  >
                                    View Profile
                                  </button>
                                  <button
                                    onClick={() => {
                                      const updatedStatus = s.status === "Active" ? "Pending" : "Active";
                                      fetch(`http://localhost:8080/api/students/${s.id}`, {
                                        method: "PUT",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({ ...s, status: updatedStatus }),
                                      })
                                        .then((res) => res.json())
                                        .then(() => {
                                          setStudentsListState(
                                            studentsListState.map((stu) =>
                                              stu.id === s.id ? { ...stu, status: updatedStatus } : stu
                                            )
                                          );
                                          setOpenRowMenuId(null);
                                        })
                                        .catch((err) => console.error("Error updating status:", err));
                                    }}
                                    className="w-full px-3 py-1 hover:bg-slate-50 text-slate-700 block text-left cursor-pointer"
                                  >
                                    Toggle Status
                                  </button>
                                  <button
                                    onClick={() => handleDeleteStudent(s.id)}
                                    className="w-full px-3 py-1 hover:bg-red-50 text-red-600 block text-left cursor-pointer"
                                  >
                                    Delete
                                  </button>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="p-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-2">
                  <span>
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                    {Math.min(currentPage * itemsPerPage, filteredStudents.length)} of {filteredStudents.length} entries
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className="p-1 border rounded disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="px-2 font-medium text-slate-700">
                      Page {currentPage} of {totalPages || 1}
                    </span>
                    <button
                      disabled={currentPage === totalPages || totalPages === 0}
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      className="p-1 border rounded disabled:opacity-40 cursor-pointer"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Modals */}
              {activeActionModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-5 space-y-4 text-xs">
                    <div className="flex justify-between items-center border-b pb-2">
                      <h3 className="font-bold text-slate-800 text-sm">{activeActionModal}</h3>
                      <button
                        onClick={() => setActiveActionModal(null)}
                        className="text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-slate-600">
                      {activeActionModal === "Bulk Upload" &&
                        "Upload CSV / Excel sheet to import multiple students at once."}
                      {activeActionModal === "Bulk Enroll" &&
                        "Enroll selected students into classes and assign roll numbers."}
                      {activeActionModal === "Promote Students" &&
                        "Promote eligible active students to the next academic grade (2026-2027)."}
                      {activeActionModal === "Filters" &&
                        "Custom filter by date of admission, attendance range, and section."}
                      {activeActionModal === "Presets" &&
                        "Saved table configuration views and default filters."}
                      {activeActionModal === "Columns" &&
                        "Toggle visible table columns (Phone, Attendance, Date Created)."}
                    </p>
                    {activeActionModal === "Bulk Upload" && (
                      <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center text-slate-500">
                        Click to browse file (.csv, .xlsx)
                      </div>
                    )}
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        onClick={() => setActiveActionModal(null)}
                        className="px-3 py-1.5 border rounded-lg text-slate-600 hover:bg-slate-50 cursor-pointer"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => {
                          alert(`${activeActionModal} action completed successfully!`);
                          setActiveActionModal(null);
                        }}
                        className="px-4 py-1.5 bg-[#1b4332] text-white rounded-lg font-medium hover:bg-[#143326] cursor-pointer"
                      >
                        Confirm & Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Add Student Popup Modal */}
              {showAddStudentModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-5 space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <h3 className="text-sm font-bold text-slate-800">Add New Student</h3>
                      <button
                        onClick={() => setShowAddStudentModal(false)}
                        className="text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <form onSubmit={handleCreateStudent} className="space-y-3 text-xs">
                      <div>
                        <label className="block text-slate-600 mb-1">Student Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Arun Kumar"
                          value={newStudentName}
                          onChange={(e) => setNewStudentName(e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-slate-600 mb-1">Gender</label>
                          <select
                            value={newStudentGender}
                            onChange={(e) => setNewStudentGender(e.target.value as "Male" | "Female")}
                            className="w-full px-3 py-2 border rounded-lg"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-600 mb-1">Classroom</label>
                          <select
                            value={newStudentClassId}
                            onChange={(e) => setNewStudentClassId(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                          >
                            {classesList.map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.grade}-{c.section} ({c.id})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-slate-600 mb-1">Parent Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Kumar S"
                          value={newStudentParent}
                          onChange={(e) => setNewStudentParent(e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 mb-1">Parent Phone</label>
                        <input
                          type="text"
                          placeholder="9876543210"
                          value={newStudentPhone}
                          onChange={(e) => setNewStudentPhone(e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setShowAddStudentModal(false)}
                          className="px-3 py-1.5 border rounded-lg text-slate-600 hover:bg-slate-50 cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 bg-[#1b4332] text-white rounded-lg font-medium hover:bg-[#143326] cursor-pointer"
                        >
                          Save Student
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TEACHERS MODULE */}
          {activeMenu === "Teachers" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500">Total Teachers</p>
                  <h3 className="text-2xl font-bold text-slate-800 mt-1">75</h3>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500">Present Today</p>
                  <h3 className="text-2xl font-bold text-emerald-600 mt-1">72 (96%)</h3>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500">On Leave</p>
                  <h3 className="text-2xl font-bold text-rose-500 mt-1">3</h3>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="p-3">Staff ID</th>
                        <th className="p-3">Teacher Name</th>
                        <th className="p-3">Subject</th>
                        <th className="p-3">Experience</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {teachersList.map((t) => (
                        <tr key={t.id} className="hover:bg-slate-50/80 transition">
                          <td className="p-3 font-semibold text-emerald-700">{t.id}</td>
                          <td className="p-3 font-medium text-slate-900">{t.name}</td>
                          <td className="p-3">
                            <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded font-medium">
                              {t.subject}
                            </span>
                          </td>
                          <td className="p-3">{t.experience}</td>
                          <td className="p-3 text-slate-500">{t.email}</td>
                          <td className="p-3 text-slate-600">{t.phone}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                                t.status === "Active"
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-rose-50 text-rose-700"
                              }`}
                            >
                              {t.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* CLASSES MODULE */}
          {activeMenu === "Classes" && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Classroom & Section Structure</h3>
                  <p className="text-xs text-slate-500">Grade 1 to 12 &bull; Total 30 Classes</p>
                </div>
                <div className="bg-blue-50 text-blue-800 px-3 py-1.5 rounded-lg text-xs font-semibold">
                  Capacity: Total = 1,200 Students
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
                {classesList.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setSelectedClassId(c.id)}
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs hover:border-blue-500 cursor-pointer transition group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-slate-900 group-hover:text-blue-600 transition">
                        {c.grade}
                      </span>
                      <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                        Sec {c.section}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">Teacher: {c.classTeacher}</p>
                    <p className="text-[10px] text-slate-400">{c.room}</p>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                      <span className="text-slate-500">Students:</span>
                      <strong className="text-blue-700 font-bold">{c.studentCount} Students</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ATTENDANCE MODULE */}
          {activeMenu === "Attendance" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500">Total Enrolled</p>
                  <h3 className="text-2xl font-bold text-slate-800 mt-1">1,200</h3>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500">Present Today</p>
                  <h3 className="text-2xl font-bold text-emerald-600 mt-1">1,128 (94%)</h3>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500">Absent Today</p>
                  <h3 className="text-2xl font-bold text-orange-500 mt-1">60</h3>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500">Late Arrivals</p>
                  <h3 className="text-2xl font-bold text-rose-500 mt-1">12</h3>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-2xs p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-bold text-sm text-slate-800">Class-wise Attendance Rates</h3>
                    <p className="text-xs text-slate-400">Showing all 30 classes across Grade 1 to 12</p>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Total Classes: <strong className="text-slate-800">{classesList.length}</strong>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 text-xs max-h-[460px] overflow-y-auto pr-1">
                  {classesList.map((c, i) => {
                    const presentCount = Math.round(c.studentCount * (0.92 + (i % 6) * 0.01));
                    const percent = Math.round((presentCount / c.studentCount) * 100);
                    return (
                      <div
                        key={c.id}
                        className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-800">{c.grade}</span>
                          <span className="text-[10px] bg-white border px-1.5 py-0.2 rounded font-medium text-slate-600">
                            Sec {c.section}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1.5 flex justify-between">
                          <span>Present:</span>
                          <strong className="text-slate-700">
                            {presentCount} / {c.studentCount}
                          </strong>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div
                            className={`h-1.5 rounded-full ${
                              percent >= 95
                                ? "bg-emerald-500"
                                : percent >= 90
                                ? "bg-blue-500"
                                : "bg-orange-500"
                            }`}
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <div className="text-right text-[10px] text-slate-400 mt-1 font-medium">
                          {percent}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* EXAMS & ACHIEVEMENTS MODULE */}
          {activeMenu === "Exams" && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h2 className="text-2xl font-bold text-slate-800">Student Achievement</h2>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 flex items-center gap-1 shadow-2xs">
                    Last 6 Months <ChevronDown size={13} />
                  </span>
                  <span>
                    Total Students: <strong className="text-slate-850">1,250</strong>
                  </span>
                  <span>
                    Avg. Attendance: <strong className="text-slate-850">94%</strong>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                  <h3 className="font-bold text-sm text-slate-800 mb-3">Average Subject Scores</h3>
                  <div className="h-56 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={subjectScoresReport}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="subject" tickLine={false} tick={{ fontSize: 11, fill: "#64748b" }} />
                        <YAxis domain={[0, 100]} tickLine={false} tick={{ fontSize: 11, fill: "#64748b" }} />
                        <Tooltip />
                        <Bar dataKey="score" fill="#1b2559" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <h3 className="font-bold text-sm text-slate-800 mb-2">Overall Pass Rate</h3>
                  <div className="flex items-center justify-center my-2">
                    <div className="w-40 h-40 relative flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: "Passed", value: 87, color: "#06b6d4" },
                              { name: "Failed", value: 13, color: "#1e293b" },
                            ]}
                            dataKey="value"
                            innerRadius={50}
                            outerRadius={68}
                            startAngle={90}
                            endAngle={-270}
                          >
                            <Cell fill="#06b6d4" />
                            <Cell fill="#1e293b" />
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute text-center">
                        <span className="text-3xl font-extrabold text-slate-800">87%</span>
                        <p className="text-[10px] text-slate-400 font-medium">Pass Rate</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-6 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#06b6d4]"></span> Passed
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#1e293b]"></span> Failed
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                <h3 className="font-bold text-sm text-slate-800 mb-3">Performance Trends</h3>
                <div className="h-52 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceTrendsReport}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="month" tickLine={false} tick={{ fontSize: 11, fill: "#64748b" }} />
                      <YAxis
                        domain={[60, 100]}
                        tickFormatter={(v) => `${v}%`}
                        tickLine={false}
                        tick={{ fontSize: 11, fill: "#64748b" }}
                      />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Line
                        type="monotone"
                        name="Target Trend"
                        dataKey="green"
                        stroke="#10b981"
                        strokeWidth={2.5}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        name="Actual Performance"
                        dataKey="black"
                        stroke="#1e293b"
                        strokeWidth={2.5}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* EVENTS MODULE */}
          {activeMenu === "Events" && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">School Calendar & Annual Activities</h3>
                  <p className="text-xs text-slate-500">
                    Manage institutional programs, meetings and celebrations
                  </p>
                </div>
                <button
                  onClick={() => setShowEventModal(true)}
                  className="px-4 py-2 bg-[#2563eb] text-white text-xs font-semibold rounded-lg hover:bg-blue-700 flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus size={14} /> Add New Event
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((ev) => (
                  <div
                    key={ev.id}
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex justify-between items-start"
                  >
                    <div className="flex gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-bold shrink-0 ${
                          ev.color === "red" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <span className="text-base leading-none">{ev.date}</span>
                        <span className="text-[9px] uppercase tracking-wider">Day</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-800">{ev.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          <Calendar size={12} /> {ev.fullDate}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteEvent(ev.id)}
                      className="text-slate-400 hover:text-red-500 p-1 cursor-pointer transition"
                      title="Delete Event"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SETTINGS MODULE */}
          {activeMenu === "Settings" && (
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs max-w-2xl space-y-5 text-xs">
              <h3 className="font-bold text-base text-slate-800 border-b pb-3">
                Institution Configuration
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-slate-600 font-medium mb-1">
                    School / Institution Name
                  </label>
                  <input
                    type="text"
                    defaultValue="School Management International Academy"
                    className="w-full px-3 py-2 border rounded-lg bg-slate-50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Academic Year</label>
                    <input
                      type="text"
                      defaultValue="2026 - 2027"
                      className="w-full px-3 py-2 border rounded-lg bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-medium mb-1">Curriculum Board</label>
                    <input
                      type="text"
                      defaultValue="State / CBSE Integrated"
                      className="w-full px-3 py-2 border rounded-lg bg-slate-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-600 font-medium mb-1">Administrator Email</label>
                  <input
                    type="email"
                    defaultValue="admin@school.edu"
                    className="w-full px-3 py-2 border rounded-lg bg-slate-50"
                  />
                </div>
              </div>
              <button className="px-5 py-2 bg-[#2563eb] text-white font-medium rounded-lg hover:bg-blue-700 cursor-pointer shadow-xs">
                Save Configurations
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Class Students Details Modal */}
      {selectedClassId && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-800 text-sm">
                Enrolled Students &bull;{" "}
                {classesList.find((c) => c.id === selectedClassId)?.grade} - Sec{" "}
                {classesList.find((c) => c.id === selectedClassId)?.section} (
                {classesList.find((c) => c.id === selectedClassId)?.studentCount} Students)
              </h3>
              <button
                onClick={() => setSelectedClassId(null)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto divide-y divide-slate-100 text-xs">
              {studentsListState
                .filter((s) => s.classId === selectedClassId)
                .map((stu) => (
                  <div key={stu.id} className="py-2.5 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-slate-800">{stu.name}</span>
                      <span className="text-[10px] text-blue-600 ml-2">({stu.id})</span>
                      <p className="text-[11px] text-slate-500">
                        Parent: {stu.parentName} &bull; {stu.parentPhone}
                      </p>
                    </div>
                    <span className="text-emerald-700 font-semibold">{stu.attendance}% Attd</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Add Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-5 space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-sm font-bold text-slate-800">Add New School Event</h3>
              <button
                onClick={() => setShowEventModal(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <form onSubmit={handleAddEvent} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 mb-1">Event Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Annual Sports Meet"
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">Event Date</label>
                <input
                  type="date"
                  value={newEventDate}
                  onChange={(e) => setNewEventDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEventModal(false)}
                  className="px-3 py-1.5 border rounded-lg text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#2563eb] text-white rounded-lg font-medium hover:bg-blue-700 cursor-pointer"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}