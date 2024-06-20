import axios from "axios";

export const getApiUser = async (id) => {
 const res = await axios.get(`https://cg-be-traveloka.onrender.com/api/auth/getDetailUser/${id}`)
 return res.data
};

