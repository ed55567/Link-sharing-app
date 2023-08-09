import React, { useState } from 'react';

const LinkManager = () => {
  const [links, setLinks] = useState('');
  const [newLink, setNewLink] = useState([]);

  const addLink = () => {
    if (newLink.trim() === '') {
      return; // Prevent adding empty links
    }
    setLinks([...links, newLink]);
    setNewLink('');
  };

  const deleteLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  return (
    <div>
      <h2>Link Manager</h2>
      <input
        type="text"
        placeholder="Enter a link"
        value={newLink}
        onChange={(e) => setNewLink(e.target.value)}
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
 