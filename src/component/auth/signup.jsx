import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Eye, EyeOff, User, Phone, Mail, MapPin, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: '',
    sname: '',
    email: '',
    phone: '',
    whatsapp: '',
    state: '',
    referralcode: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      toast.error('Please agree to the Terms and Conditions');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:3000/api/signup`, formData);
      toast.success(response.data.message);
      navigate('/login')
      
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 m-16">
      <div className="hidden md:flex w-1/2">
        <img
          src="https://www.8ways.ch/application/files/thumbnails/article_listing_tall/1817/3097/3162/work.jpg"
          alt="Sign up illustration"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center bg-[#003B5C] p-4">
        <div className="max-w-md w-full space-y-6 bg-[#003B5C]  rounded-md shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Sign up</h2>
            <p className="mt-2 text-white">
              Fill in your credentials and click on the Sign up button
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  First Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fname"
                    required
                    className="w-full px-3 py-2 pl-10 bg-gray-100 rounded-md"
                    onChange={handleChange}
                  />
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Last Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="sname"
                    required
                    className="w-full px-3 py-2 pl-10 bg-gray-100 rounded-md"
                    onChange={handleChange}
                  />
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Contact No
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-3 py-2 pl-10 bg-gray-100 rounded-md"
                  onChange={handleChange}
                />
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                WhatsApp No
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  className="w-full px-3 py-2 pl-10 bg-gray-100 rounded-md"
                  onChange={handleChange}
                />
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 pl-10 bg-gray-100 rounded-md"
                  onChange={handleChange}
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                State
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="state"
                  required
                  className="w-full px-3 py-2 pl-10 bg-gray-100 rounded-md"
                  onChange={handleChange}
                />
                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Referral Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="referralcode"
                  className="w-full px-3 py-2 pl-10 bg-gray-100 rounded-md"
                  onChange={handleChange}
                />
                <Gift className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  className="w-full px-3 py-2 pl-10 pr-10 bg-gray-100 rounded-md"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-white">
                I agree to the{' '}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || !agreed}
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors "
            >
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
            <p className='flex justify-center text-white '>Alredy cretae a accountt ?<span className='text-blue-500 ' onClick={()=>navigate('/login')}>sign in</span> </p>
          </form>
        </div>
      </div>
    </div>
  );
}
