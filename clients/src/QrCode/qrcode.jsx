import "./qrcode.css";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode";

const MyQRCode = () => {
  const [dataURL, setDataURL] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const generateQRCode = async () => {
      const url = await QRCode.toDataURL(
        "https://bespoke-belekoy-b0b655.netlify.app/"
      );
      setDataURL(url);
    };
    generateQRCode();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const url = await QRCode.toDataURL(
        "https://bespoke-belekoy-b0b655.netlify.app/"
      );
      setDataURL(url);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [dataURL]);

  return (
    <div className="qr-code-container">
      <img className="qr-code-image" src={dataURL} />
    </div>
  );
};

export default MyQRCode;
