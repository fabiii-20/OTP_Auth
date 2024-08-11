import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function OTPForm({ email }) {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://otp-auth-nigg.onrender.com/api/verify-otp', { email, otp });

      if (response.status === 200) {
        navigate('/welcome');
      }
    } catch (error) {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-gray-700">Enter OTP:</label>
        <input 
          type="text" 
          value={otp} 
          onChange={(e) => setOtp(e.target.value)} 
          required 
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button 
          type="submit" 
          className="w-full bg-fuchsia-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Verify OTP
        </button>
      </form>
      <p className='text-green-400'> OTP Successfully send to the mail id </p>
    </div>
  );
}

OTPForm.propTypes = {
  email: PropTypes.string.isRequired,
};

export default OTPForm;



