import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import API_URL from '../config';

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${API_URL}/users/${id}`, {
        name,
        email,
        gender
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='columns mt-5 is-centered'>
      <div className='column is-half'>
        <form onSubmit={updateUser}>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
              required
            />
          </div>

          <div className='field'>
            <label className='label'>Email</label>
            <input
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
          </div>

          <div className='field'>
            <label className='label'>Gender</label>
            <div className='select is-fullwidth'>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>
          </div>

          <button type='submit' className='button is-success'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
