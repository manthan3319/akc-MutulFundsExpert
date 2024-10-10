import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import InviteAsSpeaker from "./components/InviteAsSpeaker/InviteAsSpeaker";
import Presskit from "./components/Presskit/Presskit";
import PhotosVideos from "./components/PhotosVideos/PhotosVideos";
import Writer from "./components/Writer/Writer";
import InquiryFrom from "./components/InquiryFrom/InquiryFrom";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inviteAsspeaker" element={<InviteAsSpeaker />} />
        <Route path="/press-kit" element={<Presskit />} />
        <Route path="/photos-videos" element={<PhotosVideos />} />
        <Route path="/The-Writer" element={<Writer />} />
        <Route path="/inquiryfrom" element={<InquiryFrom />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
