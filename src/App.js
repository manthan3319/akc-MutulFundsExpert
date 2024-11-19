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
        <Route path="/Mutual-Funds-Expert" element={<InviteAsSpeaker />} />
        <Route path="/press-kit" element={<Presskit />} />
        <Route path="/media-gallery" element={<PhotosVideos />} />
        <Route path="/services" element={<Writer />} />
        <Route path="/contact-inquiry" element={<InquiryFrom />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
