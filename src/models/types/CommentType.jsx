import PropTypes from "prop-types";

const CommentType = PropTypes.shape({
  postId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
});

export default CommentType;
