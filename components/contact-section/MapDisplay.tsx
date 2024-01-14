const MapDisplay: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.190017019727!2d25.64337437636158!3d-25.863222750175563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ea2cac697680bb7%3A0x2ad30578d491e15a!2sAuto%20Wheels%20%26%20Exhausts!5e0!3m2!1sen!2sza!4v1688487939861!5m2!1sen!2sza"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer"
    ></iframe>
  );
};

export default MapDisplay;
