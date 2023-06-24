import React from "react";
import { Link } from "react-router-dom";
import { CardMedia, Typography } from "@mui/material";

const ScopusCard = ({ post }) => {
  return (
    <div class="col-lg-6 col-md-6 col-sm-12 mt-3">
      <Link
        to={`/authors-scopus-detail?id=${post.name.split(",")[0]}`}
        className="no-underline"
      >
        <div class="card">
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <CardMedia
                component="img"
                sx={{
                  pt: "56.25%",
                  borderRadius: "7.5px",
                  padding: "2px",
                  width: "100%",
                  height: "450px",
                  "@media (min-width: 600px)": {
                    width: "150px",
                    height: "210px",
                  },
                }}
                image="https://scholar.googleusercontent.com/citations/images/avatar_scholar_128.png"
                alt={post.name}
              />
            </div>
            <div class="card-body p-5">
              <h4 className="ubutu color-blue">{post.name}</h4>
              <Typography className="ubutu gray" style={{ fontSize: "17px" }}>
              {post.citation} citations by {post.citations_by}
              </Typography>
              
              <div className="d-flex flex-wrap ">
                <div className="border-blue p-2 mt-4 text-center me-1">
                  <span className="color-blue ubutu">
                    <b>Research Articles: </b>
                  </span>
                  <span className="color-blue ubutu">{post.documents} </span>
                </div>
                <div className="border-blue p-2 mt-4 text-center me-1">
                  <div className="text-center">
                    <span className="color-blue ubutu">
                      <b>h-index: </b>
                      <span className="color-blue ubutu">{post.h_index}</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* <Typography className="ubutu gray" style={{ fontSize: "17px" }}>
                {post.citations_by}
              </Typography>
               */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ScopusCard;
