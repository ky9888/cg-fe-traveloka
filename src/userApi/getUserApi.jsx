import axios from "axios";

export const getApiUser = async (id) => {
 const res = await axios.get(`http://localhost:4000/api/auth/getDetailUser/${id}`)
 return res.data
};

