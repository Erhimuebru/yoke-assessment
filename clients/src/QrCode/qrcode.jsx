import "./qrcode.css";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode";

const MyQRCode = () => {
  const [dataURL, setDataURL] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const generateQRCode = async () => {
      const url = await QRCode.toDataURL(
        "https://gilded-youtiao-9fbdf6.netlify.app/"
      );
      setDataURL(url);
    };
    generateQRCode();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const url = await QRCode.toDataURL(
        "https://gilded-youtiao-9fbdf6.netlify.app/"
      );
      setDataURL(url);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [dataURL]);

  return (
    <div className="background">
      <img src={dataURL} />
    </div>
  );
};

export default MyQRCode;
