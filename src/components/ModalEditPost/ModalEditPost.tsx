import { Modal, Button, Dropdown, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const ModalEditPost = ({ show, onClose, content, fetchPosts }: any) => {
  const [updateContent, setUpdateContent] = useState<any>(content);

  useEffect(() => {
    setUpdateContent(content);
	}, [content]);

	const handleClickUpdate = async () => {
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${content._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`,
				},
				body: JSON.stringify(updateContent),
			});
			await fetchPosts();
			if (!response.ok) {
				const errorMessage = response.status === 401 ? 'Unauthorized access' : 'Failed to post data';
				throw new Error(errorMessage);
			}
			const data = await response.json();
		} catch (err: any) {
			console.error(err)
		}
	};

	const communityList = [
		'All',
		'History',
		'Food',
		'Pats',
		'Health',
		'Fashion',
		'Exercise',
		'Others',
	]

	return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
						{ !updateContent?.community ? 'community' : updateContent?.community || 'community'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {communityList.length > 0 && communityList.map((name: any, index: any) => (
              <Dropdown.Item
                key={index}
                onClick={() => setUpdateContent({ ...updateContent, 'community': name })} 
              >
                {name}
              </Dropdown.Item>
            ))}

          </Dropdown.Menu>
        </Dropdown>

        <Form.Group className="mt-3">
          <Form.Control
            type="text"
            placeholder="Title"
            value={updateContent?.topic}
            onChange={(e) => setUpdateContent({ ...updateContent, 'topic': e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="What’s on your mind..."
            value={updateContent?.content}
            onChange={(e) => setUpdateContent({ ...updateContent, 'content': e.target.value })}

          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleClickUpdate}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditPost;
