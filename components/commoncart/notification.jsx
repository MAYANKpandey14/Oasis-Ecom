import { useState, useEffect } from 'react';

function Notification({ message, onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      // onClose();
    }, 3000); // Notification disappears after 3 seconds       
                                                                                                     
    return () => clearTimeout(timer);
  }, []);

  return ( show &&
(    <div className="absolute top-0 right-0 mt-2 mr-2 bg-green-500 text-white px-4 py-2 rounded">
          {message}
        </div>)
  );
}

export default Notification;
