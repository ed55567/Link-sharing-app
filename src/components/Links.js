// Links.js
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Links = () => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');
  const [error, setError] = useState('');

  const handleOnDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list

    const updatedLinks = Array.from(links);
    const [reorderedItem] = updatedLinks.splice(result.source.index, 1);
    updatedLinks.splice(result.destination.index, 0, reorderedItem);

    setLinks(updatedLinks);
  };


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
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="links">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {links.map((link, index) => (
              <Draggable key={index} draggableId={link} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {link}
                    <button onClick={() => deleteLink(index)}>Delete</button>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
    </div>
  );
};
 

export default Links;
