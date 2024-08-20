import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Desktop/RootLayout";
import Error from "./Desktop/Error";
import About from "./Desktop/About";
import Student from "./Desktop/Student";
import Faculty from "./Desktop/Faculty";
import Admin from "./Desktop/Admin";
import Query from "./Desktop/Query";
import Result from "./Pages/Result";
import ResultView from "./Pages/ResultView";
import AddStudent from "./Pages/AddStudent";
import AddFaculty from "./Pages/AddFaculty";
import View from "./Pages/View";
import AddResult from "./Pages/AddResult";
import UpdateResult from "./Pages/UpdateResult";
import AdminView from "./Pages/AdminView";
import FacultyView from "./Pages/FacultyView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <About /> }, 
      { path: "/studentlogin", element: <Student /> },
      { path: "/facultylogin", element: <Faculty /> },
      { path: "/adminlogin", element: <Admin /> },
      { path: "/query", element: <Query /> },
      { path: "/studentlogin/result", element: <Result /> },
      { path: "/studentlogin/result/resultview", element: <ResultView /> },
      { path: "/adminlogin/adminview/addstudent", element: <AddStudent /> },
      { path: "/adminlogin/adminview/addfaculty", element: <AddFaculty /> },
      { path: "/adminlogin/adminview//viewquery", element: <View /> },
      { path: "/facultylogin/facultyview/addresult", element: <AddResult /> },
      { path: "/facultylogin/facultyview/updateresult", element: <UpdateResult /> },
      { path: "/adminlogin/adminview", element: <AdminView />},
      { path: "/facultylogin/facultyview", element: <FacultyView /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
