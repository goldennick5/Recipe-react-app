import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  }

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  return (
    <FormStyle>
      <div>
        <FaSearch></FaSearch>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={submitHandler} type='submit'>Search</button>
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.div`
  margin: 0 20rem;

  div {
    display: flex;
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    padding: 0.5rem 3rem;
    border-radius: 1rem;
    border: none;
    color: white;
    font-size: 1.5rem;
    outline: none;
    width: 100%;
    margin-right: 3rem;
  }

  button {
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    color: white;
    background: linear-gradient(35deg, #494949, #313131);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search