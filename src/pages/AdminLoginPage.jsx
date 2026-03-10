import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { LockOutlined, PersonOutline, ArrowBack } from '@mui/icons-material';

const AdminLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setAuth } = useAuthStore();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock Admin Credentials
        if (username === 'admin' && password === 'admin123') {
            setAuth("admin-token-xyz", { id: 0, name: "Super Admin", role: "admin" });
            navigate('/admin');
        } else {
            setError('Invalid administrator credentials');
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Back to Site */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium"
                >
                    <ArrowBack fontSize="small" className="mr-2" /> Back to Store
                </button>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="bg-green-600 p-8 text-center">
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Admin Portal</h1>
                        <p className="text-green-100 text-sm font-medium">Secured Gateway for Management</p>
                    </div>

                    <form onSubmit={handleLogin} className="p-8 space-y-6">
                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-bold border border-red-100 animate-shake text-center">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                Username
                            </label>
                            <div className="flex items-center bg-slate-50 border-2 border-slate-100 rounded-2xl px-4 py-3 focus-within:border-green-500 focus-within:bg-white transition-all">
                                <PersonOutline className="text-slate-400 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Admin username"
                                    className="bg-transparent w-full outline-none text-slate-700 font-semibold"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                Password
                            </label>
                            <div className="flex items-center bg-slate-50 border-2 border-slate-100 rounded-2xl px-4 py-3 focus-within:border-green-500 focus-within:bg-white transition-all">
                                <LockOutlined className="text-slate-400 mr-3" />
                                <input
                                    type="password"
                                    placeholder="Enter secure password"
                                    className="bg-transparent w-full outline-none text-slate-700 font-semibold"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            Sign In to Dashboard
                        </button>
                    </form>

                    <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                            Authorized Personnel Only
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
