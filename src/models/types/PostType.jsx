import PropTypes from "prop-types";

const PostType = PropTypes.shape({
  userId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  body: PropTypes.string,
});

export default PostType;
