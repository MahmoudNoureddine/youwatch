import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
       
      />
    </Link>
    
  </Card>
);
        
      

export default VideoCard