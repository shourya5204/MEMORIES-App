import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useStyles from "./styles";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost , likePost} from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Graceful fallback for undefined or missing fields
  const { selectedFile, creator, createdAt, tags, message, likeCount, title } = post;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(post._id));
    }
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={selectedFile || "https://via.placeholder.com/150"} // Fallback image
        title={title || "Post Title"}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{creator || "Unknown Creator"}</Typography>
        <Typography variant="body2">
          {createdAt ? moment(createdAt).fromNow() : "Unknown Date"}
        </Typography>
      </div>

      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {tags?.length ? tags.map((tag) => `#${tag} `).join(" ") : "#NoTags"}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {title || "Untitled"}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message || "No content available."}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp;
          {likeCount || 0}
        </Button>

        <Button size="small" color="primary" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
          &nbsp; Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
