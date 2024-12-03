"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface Employee {
  id: string;
  name: string;
  designation: string;
  status: string;
}

const Page = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [sparkle, setSparkle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedEmployees: Employee[] = JSON.parse(
      localStorage.getItem("employees") || "[]"
    );
    setEmployees(storedEmployees);
  }, []);

  const getStatusColor = (status: string) => {
    if (status === "Active") {
      return "bg-green-500"; 
    } else if (status === "Inactive") {
      return "bg-red-500"; 
    }
    return "bg-gray-500"; 
  };

  const handleEdit = (employeeId: string) => {
    setSparkle(true);
    setTimeout(() => setSparkle(false), 1000); 
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login"); 
    } else {
      router.push(`/profile/${employeeId}`);
    }
  };

  const handleDelete = (employeeId: string) => {
    setSparkle(true);
    setTimeout(() => setSparkle(false), 1000); 
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      const updatedEmployees = employees.filter(
        (employee) => employee.id !== employeeId
      );
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      setEmployees(updatedEmployees); 
    }
  };

  return (
    <div
      className={`min-h-screen p-8 ${sparkle ? "bg-black animate-sparkle" : "bg-gray-900"
        } transition-all`}
    >
      <h1 className="text-3xl font-semibold mb-6 text-white">
        Employee Live Status
      </h1>
      {employees.length > 0 ? (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b border-gray-700 py-2 text-left">Name</th>
              <th className="border-b border-gray-700 py-2 text-left">
                Designation
              </th>
              <th className="border-b border-gray-700 py-2 text-left">Status</th>
              <th className="border-b border-gray-700 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="hover:bg-gray-800">
                <td className="py-2">{employee.name}</td>
                <td className="py-2">{employee.designation}</td>
                <td className="py-2">
                  <span
                    className={`inline-block py-1 px-3 rounded text-white ${getStatusColor(
                      employee.status
                    )}`}
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="py-2 flex space-x-4">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="text-blue-500 hover:text-blue-300 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="text-red-500 hover:text-red-300 transition duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-400">No employees registered yet.</p>
      )}
    </div>
  );
};

export default Page;
