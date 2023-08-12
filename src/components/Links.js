// Links.js
import React, { useState } from 'react';

const Links = () => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (url) => {
    // Regular expression for basic URL validation
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/;

    return urlPattern.test(url);
  };

  const addLink = () => {
    if (newLink.trim() !== '') {
      if (validateUrl(newLink)) {
        setLinks([...links, newLink]);
        setNewLink('');
        setError('');
      } else {
        setError('Invalid URL format');
      }
    }
  };

  const deleteLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  return (
    <div>
      <h2>Links</h2>
      <input
        type="text"
        value={newLink}
        onChange={(e) => setNewLink(e.target.value)}
      />
      <button onClick={addLink}>Add Link</button>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          {link}
          <button onClick={() => deleteLink(index)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Links;
