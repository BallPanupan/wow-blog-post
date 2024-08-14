import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDeletePost = ({ show, onClose, content, fetchPosts}: any) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
	useEffect(() => {
		const token = localStorage.getItem('accesstoken');
		setAccessToken(token ? token : null);
	}, [accessToken]);

  const handleDelete = async (content: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${content._id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Post');
      }
      await onClose()
      await fetchPosts()
      return await response.json();
    } catch (error: any) {
      console.error(error)
    }
  }

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Post </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center">
        <h6>Please confirm if you wish to delete the post</h6>
        <p className='text-center'>
          Are you sure you want to delete the post? Once deleted, it cannot be recovered.
        </p>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={() => handleDelete(content)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeletePost;
