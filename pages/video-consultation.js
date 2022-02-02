/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
 import React from 'react';
 import VideoConsultation from 'views/VideoConsultation';
 import Main from 'layouts/Main';
 import WithLayout from 'WithLayout';
 
 const VideoConsultationIndexView = () => {
   return <WithLayout component={VideoConsultation} layout={Main} />;
 };
 
 export default VideoConsultationIndexView;
 