import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/Config.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import toast from 'react-hot-toast';


export function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const response = await api.post('/login', formData);
      // login(response.data.token);
      setSuccessMessage(response.data.message);
      toast.success(response.data.message)
      navigate('/video');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="flex min-h-36  m-20   border rounded-md  ">
      <div className="hidden md:flex w-1/2">
        <img
          src={`src/assets/img-2.jpeg`}
          alt="Login "
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center bg-[#003B5C]">
        <div className="w-full max-w-md p-8 bg-[#003B5C] rounded-md shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
          <p className="text-white text-sm mb-4 text-center">
            Fill in your credentials and click on the Login button
          </p>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white">User name</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-end mb-4">
              <Link to="/forgot-password" className="text-blue-300 text-sm">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="-mt-6 w-32 bg-slate-400 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-white text-center mt-2 -ml-40">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-300">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

