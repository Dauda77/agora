import type { Metadata } from 'next'
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

import { 
  getProfileByUsername, 
  getUserLikedPosts, 
  getUserPosts, 
  isFollowing 
} from "@/actions/profile.action";

// Define parameters explicitly as Next.js expects
export interface Params {
  username: string;
}

// Define page props to match Next.js expectations
export interface PageProps {
  params: Params;
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Metadata generation function
export async function generateMetadata({ 
  params 
}: PageProps): Promise<Metadata> {
    const user = await getProfileByUsername(params.username);
    if(!user) return {};

    return {
        title: `${user.name ?? user.username}`,
        description: user.bio || `Check out ${user.username}'s profile.`,
    }
}

// Page component with explicit typing
export default async function ProfilePage({ 
  params 
}: PageProps) { 
    const user = await getProfileByUsername(params.username); 

    if (!user) return notFound();

    const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
        getUserPosts(user.id),
        getUserLikedPosts(user.id),
        isFollowing(user.id),
    ])
    

    return <ProfilePageClient 
        user={user} 
        posts={posts} 
        likedPosts={likedPosts} 
        isFollowing={isCurrentUserFollowing} 
    />;
}

//   console.log("params:", params);
//   await new Promise((resolve) => setTimeout(resolve, 3000));
