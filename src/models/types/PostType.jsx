import PropTypes from "prop-types";

const PostType = PropTypes.shape({
  userId: PropTypes.number,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  body: PropTypes.string,
});

export default PostType;
