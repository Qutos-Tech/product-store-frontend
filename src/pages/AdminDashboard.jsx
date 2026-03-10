import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockOrders } from '../data/orders';
import useAuthStore from '../store/authStore';

const AdminDashboard = () => {
  const [orders] = useState(mockOrders);
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/admin/login');
    }
  }, [user, navigate]);

  if (!user || user.role !== 'admin') return null;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-700">Order Management</h2>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
              {orders.length} Total Orders
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-500 font-bold text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Total Amount</th>
                  <th className="px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-blue-600 font-semibold">{order._id}</td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-800">{order.customerDetails.name}</div>
                      <div className="text-xs text-gray-500 font-medium">{order.customerDetails.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${order.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                        order.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-800">₹{order.totalAmount}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                      {new Date(order.createdAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;