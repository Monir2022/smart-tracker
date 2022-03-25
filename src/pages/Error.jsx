import ErrorImage from "../assets/images/error.jpg";
export default function Error() {
  return (
    <div className="error">
      <img src={ErrorImage} alt="Error" className="error-image" />
      <p className="error-text">Something went wrong, plese go to home page</p>
    </div>
  );
}
