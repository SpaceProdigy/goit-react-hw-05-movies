import React, { useCallback, useEffect, useState } from 'react';
import { Button, ConfigProvider, Modal } from 'antd';
import { apiMovies } from 'api/api';
import css from './Modal.module.css';

import { Link } from 'react-router-dom';

const ModalTrailer = ({ videoKey, title, name, onStop }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [video, setVideo] = useState('');
  const [videos, setVideos] = useState([]);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const showModal = () => {
    setIsModalOpen(true);
    onStop(false);
    openVideo(videos);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    onStop(true);
    setVideo('');
  };

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const { results } = await apiMovies(
          `https://api.themoviedb.org/3/movie/${videoKey}/videos`
        );

        if (results || results.length > 0) {
          setVideos(results);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideoUrl();
  }, [videoKey]);

  const openVideo = useCallback(arr => {
    if (arr?.length > 0) {
      setVideo(arr[getRandomNumber(0, arr.length)]);
    }
  }, []);

  useEffect(() => {
    openVideo();
  }, [openVideo]);

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              colorBgElevated: '#000',
              colorText: '#fff',
              colorIcon: '#fff',
              colorIconHover: 'yellow',
              borderRadiusLG: '10px',
            },
          },
        }}
      >
        <Button type="primary" onClick={showModal}>
          Watch trailer
        </Button>

        <Modal
          title={
            video?.name ? (
              <Link to={`/movies/${videoKey}`}>
                <p className={css.text}>{video.name}</p>
              </Link>
            ) : (
              <p className={css.text}> Trailer</p>
            )
          }
          forceRender="true"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          {video !== '' ? (
            <div className={css.iframe}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  border: 'none',
                }}
              ></iframe>
            </div>
          ) : (
            <p>No trailer</p>
          )}
        </Modal>
      </ConfigProvider>
    </>
  );
};
export default ModalTrailer;
