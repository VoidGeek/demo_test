import axios from "axios";

const API_URL = "http://35.154.46.100:8080/api";// Replace with your actual API URL

// Fetch all projects
const requestReset = (email) => {
    return axios
      .post(`${API_URL}/request`, { email })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error sending request:", error);
        throw error;
      });
  };
  
  const verifyOTP = (email, otp) => {
    return axios
      .post(`${API_URL}/verify`, { email, otp })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error verifying OTP", error);
        throw error;
      });
  };
  

// Create a new project


const ResetService = {
    requestReset,
    verifyOTP, // Add getProjectById to the service
};

export default ResetService;
