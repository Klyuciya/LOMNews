import React from "react";

export const CommentItem = ({comment}) => {
    return (
        <div className="media">
							<div className="media-left">
								<img alt=" " className="media-object" data-src=""
										 src="" data-holder-rendered="true"/>{new Date(comment.dtWhen).toDateString()}
							</div>
							<div className="media-body">
								<h4 className="media-heading">
                                    {comment.commentText}
                                </h4>
							</div>
        </div> )

        {/* <div>CommentItem</div> */}
}