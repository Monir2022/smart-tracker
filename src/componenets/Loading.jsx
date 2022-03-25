//Project files
import loading_logo from "../assets/images/Loading.gif";

export default function Loading() {
  const parcelLoading = (
    <div>
      <img src={loading_logo} alt="loading" />
      <h1>Loading.......</h1>
    </div>
  );

  return <div>{parcelLoading}</div>;
}
