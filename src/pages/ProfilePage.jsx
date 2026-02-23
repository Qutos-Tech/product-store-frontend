import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
  };

  const orders = [
    {
      id: "ORD-1234",
      date: "February 15, 2026",
      items: 8,
      total: "$78.45",
      status: "Delivered",
    },
    {
      id: "ORD-1235",
      date: "February 10, 2026",
      items: 12,
      total: "$124.99",
      status: "Processing",
    },
    {
      id: "ORD-1236",
      date: "February 5, 2026",
      items: 6,
      total: "$56.20",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-10 py-8">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <h1 className="text-3xl font-bold">My Account</h1>
        <p className="text-gray-500 mb-8">
          Manage your profile and preferences
        </p>

        <div className="flex flex-col md:flex-row gap-8">

          {/* LEFT PROFILE CARD */}
          <div className="md:w-1/3 bg-white rounded-2xl shadow p-6 h-fit">
            <div className="flex flex-col items-center text-center">

              <div className="w-24 h-24 rounded-full bg-green-200 flex items-center justify-center text-3xl font-bold text-green-700">
                {user.name.charAt(0)}
              </div>

              <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-gray-500">{user.phone}</p>

              <button className="mt-6 w-full py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                Edit Profile
              </button>

              <button className="mt-3 text-red-500 hover:underline">
                Sign Out
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="md:w-2/3">

            {/* Tabs */}
            <div className="bg-gray-200 rounded-full p-1 flex mb-6 overflow-x-auto">
              {["orders", "addresses", "wishlist"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-4 py-2 rounded-full text-sm md:text-base capitalize transition ${
                    activeTab === tab
                      ? "bg-white shadow font-semibold"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">
                        Order {order.id}
                      </h3>
                      <p className="text-gray-500">
                        Placed on {order.date}
                      </p>
                      <p className="mt-2 text-gray-700">
                        {order.items} items •{" "}
                        <span className="font-semibold">
                          {order.total}
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-4">

                      <span
                        className={`px-4 py-1 rounded-full text-sm font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {order.status}
                      </span>

                      <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
                        View Details
                      </button>

                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Saved Addresses
                </h3>
                <p className="text-gray-500">
                  No addresses added yet.
                </p>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Your Wishlist
                </h3>
                <p className="text-gray-500">
                  Your wishlist is empty.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
