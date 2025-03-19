"use client"

import { useUser } from "@clerk/nextjs";
import { useState } from "react";



function PostCard({post, dbUserId} : { post:Post; dbUserId: string | null}) {
  const { user } = useUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState(post._count.likes)
  

  return (
    <div>PostCard</div>
  )
}

export default PostCard