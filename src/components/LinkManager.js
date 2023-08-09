import React, { useState } from 'react';

const LinkManager = () => {
  const [link, setLink] = useState('');
  const [links, setLinks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLinks([...links, link]);
    setLink('');
  };

 