"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [loggedInUser, setLoggedInUser] = useState<{
    name: string;
    email: string;
    mobile: string;
    designation: string;
    status: "active" | "inactive";
  } | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<{
    name: string;
    email: string;
    mobile: string;
    designation: string;
    status: "active" | "inactive";
  }>({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    status: "active", // Ensure the default value matches the union type
  });

  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser") || "null");
    if (!user) {
      alert("You need to log in to view your profile.");
      router.push("/login");
    } else {
      setLoggedInUser(user);
      setEditedProfile(user);
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    router.push("/login");
  };

  const handleDelete = () => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const updatedEmployees = employees.filter(
      (emp: any) => emp.email !== loggedInUser?.email
    );
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    sessionStorage.removeItem("loggedInUser");
    alert("Profile deleted successfully!");
    router.push("/login");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const updatedEmployees = employees.map((emp: any) =>
      emp.email === loggedInUser?.email ? editedProfile : emp
    );

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    sessionStorage.setItem("loggedInUser", JSON.stringify(editedProfile));

    setLoggedInUser(editedProfile);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProfile(loggedInUser || editedProfile);
  };

  if (!loggedInUser) return null;

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Your Profile</h1>
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedProfile.name}
              onChange={(e) =>
                setEditedProfile({ ...editedProfile, name: e.target.value })
              }
              placeholder="Name"
              className="w-full px-4 py-2 mb-3 bg-gray-700 rounded-md text-white"
            />
            <input
              type="email"
              value={editedProfile.email}
              onChange={(e) =>
                setEditedProfile({ ...editedProfile, email: e.target.value })
              }
              placeholder="Email"
              className="w-full px-4 py-2 mb-3 bg-gray-700 rounded-md text-white"
              disabled
            />
            <input
              type="text"
              value={editedProfile.mobile}
              onChange={(e) =>
                setEditedProfile({ ...editedProfile, mobile: e.target.value })
              }
              placeholder="Mobile"
              className="w-full px-4 py-2 mb-3 bg-gray-700 rounded-md text-white"
            />
            <select
              value={editedProfile.designation}
              onChange={(e) =>
                setEditedProfile({
                  ...editedProfile,
                  designation: e.target.value,
                })
              }
              className="w-full px-4 py-2 mb-3 bg-gray-700 rounded-md text-white"
            >
               <option value="" disabled>Select Designation</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Teacher">Teacher</option>
            <option value="other">Other</option>
            </select>
            <select
              value={editedProfile.status}
              onChange={(e) =>
                setEditedProfile({
                  ...editedProfile,
                  status: e.target.value as "active" | "inactive", // Explicitly cast to the union type
                })
              }
              className="w-full px-4 py-2 mb-3 bg-gray-700 rounded-md text-white"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="w-full px-4 py-2 bg-green-600 rounded-md hover:bg-green-500"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="w-full px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold">{loggedInUser.name}</h2>
            <p className="text-sm text-gray-400 mt-1">
              Email: {loggedInUser.email}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Mobile: {loggedInUser.mobile}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Designation: {loggedInUser.designation}
            </p>
            <p
              className={`mt-4 inline-block px-3 py-1 rounded-full text-xs ${
                loggedInUser.status === "active"
                  ? "bg-green-600 text-green-100"
                  : "bg-red-600 text-red-100"
              }`}
            >
              {loggedInUser.status.toUpperCase()}
            </p>
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleEdit}
                className="w-full px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="w-full px-4 py-2 bg-red-600 rounded-md hover:bg-red-500"
              >
                Delete
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="w-full mt-4 px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
