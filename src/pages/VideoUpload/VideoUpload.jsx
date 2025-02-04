import React from 'react'
import "./VideoUpload.css"
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Link } from "react-router-dom";

const VideoUpload = () => {
  return (
    <div className="video-upload">
      <div className="upload-box">
        <div className="upload-video-title">
          <CloudUploadOutlinedIcon sx={{ fontSize: "36px" }} />
          <h2 className="upload-video-title-text">Upload Video</h2>
        </div>

        <div className="upload-form">
            <input type="text" placeholder="Title of video" className="upload-form-input" />
            <input type="text" placeholder="Description" className="upload-form-input" />
            <input type="text" placeholder="Category" className="upload-form-input" />

            <div className="upload-sec">
                <div className="upload-sec-show">
                    <p className="upload-sec-show-text">Thumbnail</p>
                    <div className="upload-sec-show-icon-wrapper">
                        <FileUploadOutlinedIcon sx={{ fontSize: "28px" }} className="upload-sec-show-icon" />
                        <input type="file" className="upload-form-file" />
                    </div>
                </div>
            </div>

            <div className="upload-sec">
                <div className="upload-sec-show">
                    <p className="upload-sec-show-text">Video</p>
                    <div className="upload-sec-show-icon-wrapper">
                        <FileUploadOutlinedIcon sx={{ fontSize: "28px" }} className="upload-sec-show-icon" />
                        <input type="file" className="upload-form-file" />
                    </div>
                </div>
            </div>

            <div className="upload-back-btns">
                <div className="upload-btn">Upload</div>
                <Link to="/" className="back-btn">Back</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;