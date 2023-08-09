import React, { useState } from 'react';

const LinkManager = () => {
  const [link, setLink] = useState('');
  const [links, setLinks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLinks([...links, link]);
    setLink('');
  };
  
  return (
    <div>
      <h2>Link Manager</h2>
      <input
        type="text"
        placeholder="Enter a link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={addLink}>Add Link</button>
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

export default LinkManager;
 